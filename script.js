function burst(){
document.getElementById('msg').innerHTML='💖 You are my everything, Rupsona! 💖';
for(let i=0;i<25;i++){
 let s=document.createElement('div');
 s.textContent='❤️';
 s.style.position='fixed';
 s.style.left=(50+Math.random()*20-10)+'vw';
 s.style.top='55vh';
 s.style.fontSize=(18+Math.random()*24)+'px';
 s.style.transition='all 2s ease-out';
 document.body.appendChild(s);
 requestAnimationFrame(()=>{
  s.style.transform=`translate(${(Math.random()-0.5)*500}px,${-Math.random()*500}px)`;
  s.style.opacity='0';
 });
 setTimeout(()=>s.remove(),2000);
}
}