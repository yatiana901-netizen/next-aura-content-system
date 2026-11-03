#!/usr/bin/env python3
"""Next Aura project intake + evidence gate (Python stdlib, optional ffprobe).

Organizes metadata and QA evidence. DOES NOT edit video, listen to audio,
validate legal rights, control CapCut or publish to platforms.
"""
import argparse
import csv
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

STAGES = ("research", "voice", "edit", "qa", "publish")
CHECKS = {
    "topic_visual_feasibility": ("research", "Fresh angle, adequate distinct usable footage", True),
    "factual_sources": ("research", "Dated facts sourced; concept vs prototype vs future clear", True),
    "media_rights": ("research", "Actual usage permission/license evidence for source assets", True),
    "sources_audited": ("research", "Source inventory, source audio and duplicate videos checked", True),
    "german_script_approved": ("voice", "Native concise German script and strong first 2-3 seconds", True),
    "vo_listened_and_cleaned": ("voice", "Actual VO take listened, chosen and cleaned as needed", True),
    "narration_pronunciation": ("voice", "Names and numbers pronounced correctly in German", True),
    "shot_boundaries": ("edit", "Frame-accurate source in/out, no mixed scenes or repeat filler", True),
    "camera_follow": ("edit", "Keyframed/subject-tracked 9:16 crop, no lost car/black bars", True),
    "transitions_effects": ("edit", "Transitions and effects purposeful, restrained, non-repetitive", True),
    "visual_cards_subtitles": ("edit", "Verified mobile-readable cards; subtitles only if requested", True),
    "vo_scene_sync": ("edit", "Actual voiced phrase/shot/card timing matched", True),
    "source_audio_review": ("edit", "Engine/ambience gain controlled, no hidden background music", True),
    "sfx_design": ("edit", "SFX purposeful and timed, no weak/random sound padding", True),
    "vo_audio_mix": ("edit", "Voice dominant, ducking, fades, no clipping or masking", True),
    "render_probe": ("qa", "Final export technically verified", True),
    "loudness_meter": ("qa", "Measured final mixed LUFS and true peak in dBTP", True),
    "manual_audio_review": ("qa", "Actually listened 1x, hard sync beats at 0.5x", True),
    "manual_visual_review": ("qa", "Actually watched final video and inspected crop/shot boundaries", True),
    "mobile_review": ("qa", "Reviewed small screen / phone or documented unavailable", False),
    "independent_review": ("qa", "Separate independent review or documented unavailable", False),
    "legal_release_check": ("qa", "Source permissions/disclosures verified before release", True),
    "tiktok_pack": ("publish", "9:16 cover, German caption, EXACTLY 5 topical hashtags", True),
    "youtube_pack": ("publish", "Distinct Shorts title/description and supported thumbnail workflow", True),
    "publish_time_review": ("publish", "Dated Germany/Morocco times and DST; experiment honesty", True),
    "delivery_and_analytics": ("publish", "Master + QA + source ledger + performance plan ready", True),
}
FILE_GATES = {
    "voice": ("vo_file",),
    "edit": ("shotlist_csv", "vo_cues_csv", "audio_cues_csv"),
    "qa": ("master_mp4", "qa_report"),
    "publish": ("tiktok_cover", "tiktok_pack_file", "youtube_pack_file"),
}
HEADERS = {
    "SHOTLIST.csv": "shot_id,source_file,source_in,source_out,timeline_in,timeline_out,story_beat,spoken_phrase,crop_x_start,crop_x_end,camera_follow_keyframes,transition,sfx_id,source_audio_action,rights_evidence,frame_reviewed",
    "VO_CUES.csv": "spoken_phrase,word_onset,word_end,card_in,card_out,sfx_transient,shot_id,verified_by_listening,notes",
    "AUDIO_CUES.csv": "timeline_in,timeline_out,track_type,source_file,action,gain_db,duck_under_vo_db,fade_in_ms,fade_out_ms,sound_identity,rights_evidence,notes",
}


def init(args):
    name = args.project_id.strip()
    if not re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9_-]{1,79}", name):
        raise ValueError("project_id must be 2-80 letters/digits/underscore/hyphen")
    dest = Path(args.output_dir).expanduser().resolve() / name
    if dest.exists():
        raise ValueError(f"Refusing overwrite: {dest}")
    dest.mkdir(parents=True)
    for filename, header in HEADERS.items():
        with (dest / filename).open("w", newline="", encoding="utf-8-sig") as f:
            csv.writer(f).writerow(header.split(","))
    (dest / "PUBLISHING_TIKTOK.md").write_text(
        "# TikTok publishing pack\n\nGerman caption: TODO\n\nEXACTLY five hashtags: TODO\n\n"
        "9:16 cover: TODO\nGermany date/time: TODO\nMorocco date/time: TODO\n"
        "Posting-time evidence or experiment label: TODO\n", encoding="utf-8")
    (dest / "PUBLISHING_YOUTUBE.md").write_text(
        "# YouTube Shorts publishing pack\n\nGerman title: TODO\nDescription: TODO\n"
        "Hashtags: TODO\nThumbnail or chosen video frame: TODO\n"
        "Germany date/time: TODO\nMorocco date/time: TODO\n"
        "Posting-time evidence or experiment label: TODO\n", encoding="utf-8")
    (dest / "QA_REPORT.md").write_text(
        "# QA evidence\n\nFinal MP4 technical probe: NOT DONE\n"
        "Integrated LUFS / true peak dBTP: NOT MEASURED\n"
        "Final audio actual listening: NOT DONE\n"
        "Small-screen playback: NOT DONE\n"
        "Camera-follow and scene sync manual review: NOT DONE\n"
        "License evidence: NOT VERIFIED\n"
        "Independent reviewer / defects: NOT REVIEWED\n", encoding="utf-8")
    manifest = {
        "schema": "next-aura-video-pipeline/1.0",
        "project_id": name, "title": args.title or name, "stage": "research",
        "format": {"aspect": "9:16", "width": 1080, "height": 1920, "fps": 30,
                   "music": "none", "presenter": "off-unless-approved"},
        "source_notes": [], "fact_sources": [], "rights_notes": [],
        "related_videos": [], "avoid_shared_shots_with": [],
        "files": {
            "vo_file": "", "shotlist_csv": "SHOTLIST.csv",
            "vo_cues_csv": "VO_CUES.csv", "audio_cues_csv": "AUDIO_CUES.csv",
            "master_mp4": "", "qa_report": "QA_REPORT.md", "tiktok_cover": "",
            "tiktok_pack_file": "PUBLISHING_TIKTOK.md",
            "youtube_pack_file": "PUBLISHING_YOUTUBE.md",
        },
        "checks": {key: {"status": "pending", "evidence": ""} for key in CHECKS},
        "audio_measurements": {"integrated_lufs": None,
                               "true_peak_dbtp": None, "method": None},
        "warnings": [],
    }
    (dest / "project.json").write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8")
    print(f"CREATED {dest} — all QA checks start pending")


def load_manifest(path):
    p = Path(path).expanduser().resolve()
    obj = json.loads(p.read_text(encoding="utf-8"))
    if obj.get("schema") != "next-aura-video-pipeline/1.0":
        raise ValueError("Unsupported manifest schema")
    return p, obj


def save_manifest(path, obj):
    path.write_text(json.dumps(obj, indent=2, ensure_ascii=False) + "\n",
                    encoding="utf-8")


def set_check(args):
    p, obj = load_manifest(args.manifest)
    stage, _, required = CHECKS[args.check_id]
    if args.status == "na" and required:
        raise ValueError("Mandatory check cannot be N/A")
    evidence = (args.evidence or "").strip()
    if args.status in ("pass", "fail", "na") and len(evidence) < 12:
        raise ValueError("Provide at least 12 characters of evidence / rationale")
    obj["checks"][args.check_id] = {"status": args.status, "evidence": evidence}
    obj["stage"] = stage
    save_manifest(p, obj)
    print(f"Recorded {args.check_id} = {args.status}; human assertion, NOT automatic proof")


def set_file(args):
    p, obj = load_manifest(args.manifest)
    if args.key not in obj["files"]:
        raise ValueError("Unknown file key")
    obj["files"][args.key] = args.path
    save_manifest(p, obj)
    print(f"Recorded {args.key}: {args.path}")


def check(args):
    path, obj = load_manifest(args.manifest)
    stage_limit = STAGES.index(args.stage)
    problems, passing = [], 0
    for key, (stage, desc, required) in CHECKS.items():
        if STAGES.index(stage) > stage_limit:
            continue
        row = obj.get("checks", {}).get(key, {})
        status, evidence = row.get("status", "pending"), row.get("evidence", "")
        valid = status == "pass" or (status == "na" and not required)
        if valid and len(evidence.strip()) >= 12:
            passing += 1
        else:
            problems.append(f"{stage}: {key}={status} ({desc})")
    for stage, keys in FILE_GATES.items():
        if STAGES.index(stage) > stage_limit:
            continue
        for key in keys:
            filename = obj.get("files", {}).get(key, "")
            file_path = Path(filename) if filename else None
            if file_path and not file_path.is_absolute():
                file_path = path.parent / file_path
            if not file_path or not file_path.is_file():
                problems.append(f"{stage}: file missing for {key}: {filename or '(none)'}")
    if stage_limit >= STAGES.index("qa"):
        meter = obj.get("audio_measurements", {})
        for key in ("integrated_lufs", "true_peak_dbtp", "method"):
            if meter.get(key) is None or meter.get(key) == "":
                problems.append(f"qa: missing actual audio_measurements.{key}")
    print(f"{obj['project_id']}: stage={args.stage}, passed_evidence={passing}, open={len(problems)}")
    for p in problems:
        print("BLOCKED: " + p)
    print("GATE: " + ("PASS (self-reported evidence, NOT proof of authenticity)"
                      if not problems else "BLOCKED"))
    return 0 if not problems else 2


def probe(args):
    if not shutil.which("ffprobe"):
        raise ValueError("ffprobe missing; install FFmpeg or do technical QA manually")
    path = Path(args.video).expanduser().resolve()
    if not path.is_file():
        raise ValueError(f"File not found: {path}")
    result = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries",
         "format=duration:stream=index,codec_type,codec_name,width,height,r_frame_rate",
         "-of", "json", str(path)],
        capture_output=True, text=True, check=True)
    info = json.loads(result.stdout)
    video = next((s for s in info.get("streams", [])
                  if s.get("codec_type") == "video"), None)
    audio = next((s for s in info.get("streams", [])
                  if s.get("codec_type") == "audio"), None)
    errors = []
    if not video:
        errors.append("Missing video stream")
    else:
        if (video.get("width"), video.get("height")) != (1080, 1920):
            errors.append("Not 1080x1920")
        try:
            numerator, denominator = map(float, video.get("r_frame_rate", "0/1").split("/"))
            fps = numerator / denominator
        except (ValueError, ZeroDivisionError):
            fps = 0
        if abs(fps - 30) > 0.03:
            errors.append(f"FPS not approximately 30: {fps}")
    if not audio:
        errors.append("Missing audio stream")
    try:
        duration = float(info.get("format", {}).get("duration", 0))
    except (TypeError, ValueError):
        duration = 0
    if duration <= 0:
        errors.append("Invalid duration")
    print(json.dumps({"file": str(path), "video": video, "audio": audio,
                      "duration": duration, "technical_issues": errors}, indent=2))
    print("NOT tested here: real audio listening, true peak/LUFS, full decode, word sync or media rights.")
    return 2 if errors else 0


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    sub = ap.add_subparsers(dest="command", required=True)
    p = sub.add_parser("init", help="Create project without overwriting existing")
    p.add_argument("project_id")
    p.add_argument("--title", default="")
    p.add_argument("--output-dir", default=".")
    p.set_defaults(handler=init)
    p = sub.add_parser("set-check", help="Record manual check and real evidence")
    p.add_argument("manifest")
    p.add_argument("check_id", choices=sorted(CHECKS))
    p.add_argument("--status", choices=("pending", "pass", "fail", "na"), required=True)
    p.add_argument("--evidence", default="")
    p.set_defaults(handler=set_check)
    p = sub.add_parser("set-file", help="Register local output file reference")
    p.add_argument("manifest")
    p.add_argument("key", choices=("vo_file", "shotlist_csv", "vo_cues_csv",
                                  "audio_cues_csv", "master_mp4", "qa_report",
                                  "tiktok_cover", "tiktok_pack_file", "youtube_pack_file"))
    p.add_argument("path")
    p.set_defaults(handler=set_file)
    p = sub.add_parser("check", help="Block release until checks and deliverables exist")
    p.add_argument("manifest")
    p.add_argument("--stage", choices=STAGES, default="qa")
    p.set_defaults(handler=check)
    p = sub.add_parser("probe", help="ffprobe 1080x1920/30fps video/audio properties")
    p.add_argument("video")
    p.set_defaults(handler=probe)
    args = ap.parse_args()
    try:
        return args.handler(args) or 0
    except (OSError, ValueError, json.JSONDecodeError, subprocess.CalledProcessError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    sys.exit(main())
