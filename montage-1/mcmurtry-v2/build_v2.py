from pathlib import Path
import subprocess as sp,json
import numpy as np
from scipy.signal import butter,sosfilt
P=Path(__file__).resolve().parent;A=P;O=P/'v2';O.mkdir(exist_ok=True);(O/'segments').mkdir(exist_ok=True)
FPS=30;SR=48000;D=29.8
raw=[
(0,'proof',4.48,.95,(290,100,1580,940),(250,110),(1.,1.06),'Side angle inverted hook'),
(1.133333,'proof',58.5,1,(560,170,1260,910),(470,170),(1.,1.13),'Push in and follow inverted car'),
(3.666667,'hero',39.5,1,(220,40,1480,1000),(300,65),(1.,1.12),'Overhead reveal'),
(4.866667,'hero',12.,1,(220,0,1480,1080),(220,0),(1.12,1.),'Front hero pull out'),
(6.,'fan',7.,1,(430,100,1040,880),(480,90),(1.,1.16),'Fan macro push in'),
(7.066667,'animation',18.9,1,(600,150,1120,850),(780,150),(1.,1.10),'Track airflow toward fan'),
(10.266667,'animation',22.2,.74,(50,100,1840,880),(50,100),(1.06,1.),'Pull back pressure explanation'),
(13.7,'proof_alt',67.,1,(620,0,700,324),(642,0),(1.,1.10),'Alternate side camera: attached at rest'),
(15.866667,'proof',1.8,1.4,(240,50,1450,1020),(200,50),(1.,1.08),'Rear view platform rotation'),
(17.2,'proof',39.,5.5,(390,100,1490,960),(350,100),(1.,1.06),'Side rotation continuation'),
(20.1,'proof',61.6,1,(470,180,1390,880),(330,180),(1.02,1.09),'Original speed movement, follow forward travel'),
(23.033333,'proof',108.,1,(160,70,1720,990),(0,70),(1.,1.06),'Side driving, leftward follow'),
(24.966667,'track',13.38,.62,(220,132,1500,816),(350,132),(1.,1.10),'Track grip context'),
(26.933333,'track',23.78,1,(300,132,1500,816),(160,132),(1.06,1.),'Approach and pass, tracking pull out'),
(28.,'proof',114.9,1,(190,80,1640,960),(260,90),(1.,1.10),'Rear departure under CTA')]
shots=[]
for i,(st,src,ss,rate,crop,pan,zoom,role) in enumerate(raw):
 a=round(st*FPS);b=round(raw[i+1][0]*FPS) if i+1<len(raw) else round(D*FPS)
 shots.append(dict(i=i,start=a/FPS,end=b/FPS,frames=b-a,source=src,source_in=ss,source_out=ss+(b-a)/FPS*rate,rate=rate,crop=crop,pan_end=pan,zoom=zoom,role=role))
(O/'edit_plan_v2.json').write_text(json.dumps({'duration':D,'fps':FPS,'shots':shots},indent=2))
for s in shots:
 out=O/'segments'/f"{s['i']:02}.mp4"
 if out.exists():continue
 x,y,w,h=s['crop'];xe,ye=s['pan_end'];z0,z1=s['zoom'];dur=s['frames']/FPS;fh=round(h/w*1080/2)*2
 ease=f'(1-cos(PI*min(t/{dur},1)))/2';cx=f'{x}+({xe-x})*{ease}';cy=f'{y}+({ye-y})*{ease}'
 ze=f'{z0}+({z1-z0})*(1-cos(PI*on/{max(1,s["frames"]-1)}))/2'
 fc=f"[0:v:0]setpts=(PTS-STARTPTS)/{s['rate']},fps=30,eq=brightness=0.02:contrast=1.035:gamma=1.025:saturation=1.04,split=2[b][f];[b]scale=216:384:force_original_aspect_ratio=increase,crop=216:384,gblur=sigma=13,eq=brightness=-0.13:saturation=0.72,scale=1080:1920[bg];[f]crop={w}:{h}:'{cx}':'{cy}',scale=2160:-2:flags=lanczos,zoompan=z='{ze}':x='iw/2-iw/(zoom*2)':y='ih/2-ih/(zoom*2)':d=1:s=1080x{fh}:fps=30[fg];[bg][fg]overlay=0:(H-h)/2,setsar=1"
 cmd=['ffmpeg','-v','error','-y','-threads','2','-ss',str(s['source_in']),'-i',str(P/'sources'/f"{s['source']}.mp4")]
 if s['i']==6:
  cmd+=['-loop','1','-i',str(A/'pressure_arrows.png')];fc+='[scene];[1:v]format=rgba,fade=t=in:st=0.3:d=0.25:alpha=1,fade=t=out:st=2.6:d=0.25:alpha=1[ar];[scene][ar]overlay=0:0:shortest=1'
 fc+='[v]';cmd+=['-filter_complex_threads','2','-filter_complex',fc,'-map','[v]','-an','-frames:v',str(s['frames']),'-c:v','libx264','-preset','fast','-crf','19','-pix_fmt','yuv420p','-threads','3','-movflags','+faststart',str(out)]
 sp.run(cmd,check=True);print('Rendered',s['i'],flush=True)
def pcm(p):return np.frombuffer(sp.check_output(['ffmpeg','-v','error','-i',str(p),'-vn','-ar',str(SR),'-ac','1','-f','f32le','-']),np.float32).copy()
voice=pcm(A/'voice_clean.wav');stem=np.zeros_like(voice);cues=[]
ids=[25,26,9,26,10,25,29,26,9,25,10,26,25,9,26]
for s,idx in zip(shots,ids):
 x=pcm(A/'sfx'/f'{idx}.audio');x=sosfilt(butter(2,100,'highpass',fs=SR,output='sos'),x);energy=np.convolve(x*x,np.ones(480)/480,'same');pk=int(np.argmax(energy));a=max(0,pk-int(.12*SR));x=x[a:a+int(.36*SR)];pk-=a
 db=-22 if idx!=29 else -25;x=x/(max(abs(x))+1e-9)*10**(db/20);n=min(300,len(x)//5);x[:n]*=np.linspace(0,1,n);n=min(2200,len(x)//4);x[-n:]*=np.linspace(1,0,n)
 beat=s['start'] if s['i']!=6 else s['start']+.4;pos=round(beat*SR)-pk
 if pos<0:x=x[-pos:];pos=0
 n=min(len(x),len(stem)-pos)
 if n>0:stem[pos:pos+n]+=x[:n]
 cues.append({'file_index':idx,'beat':beat,'level_dbfs':db})
env=np.sqrt(np.convolve(voice*voice,np.ones(960)/960,'same'));stem*=1-.35*np.clip(env/.10,0,1);mix=voice+stem
p=sp.Popen(['ffmpeg','-v','error','-y','-f','f32le','-ar',str(SR),'-ac','1','-i','-','-af','alimiter=limit=0.89:level=0','-c:a','pcm_s16le',str(O/'mix_v2.wav')],stdin=sp.PIPE);p.communicate(mix.astype(np.float32).tobytes());assert p.returncode==0
(O/'sfx_cues_v2.json').write_text(json.dumps(cues,indent=2));(O/'concat.txt').write_text(''.join(f"file 'segments/{s['i']:02}.mp4'\n" for s in shots))
sp.run(['ffmpeg','-v','error','-y','-f','concat','-safe','0','-i',str(O/'concat.txt'),'-i',str(O/'mix_v2.wav'),'-map','0:v:0','-map','1:a:0','-c:v','copy','-af','loudnorm=I=-16:TP=-1.5:LRA=7','-ar','48000','-c:a','aac','-b:a','192k','-t',str(D),'-movflags','+faststart',str(O/'NEXT_AURA_MCMURTRY_V2.mp4')],check=True);print('DONE',flush=True)
