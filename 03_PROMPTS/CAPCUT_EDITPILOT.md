# CapCut / EditPilot — Canonical Usage

## What we use EditPilot for
- rough structural changes
- trimming
- simple transitions
- first-pass timeline work

## What we do NOT trust it to do automatically
Custom imported SFX selection.

In testing, it repeatedly substituted sounds from the CapCut library even when imported files were specified.

## Custom SFX rule
If specific SFX matter:
- place them manually
- use very few
- trim manually
- keep VO dominant

## Transition rule
Give exact timing and duration.

Preferred:
- hard cut
- simple push
- simple zoom
- very short blur

Do not ask for a transition on every clip.

## Example instruction format
`00:37.880 — Hardware → AI/software — short push/blur — 0.18s`

## Horizontal footage
Inside CapCut:
- crop intelligently to 9:16 when safe
- if full crop destroys information, use a light/static background treatment
- use a few manual keyframes
- avoid heavy tracking and moving blur

## Lesson from failed renders
Heavy tracking + moving blur caused:
- lag
- glitches
- freezes
- quality loss

Do not repeat that workflow.
