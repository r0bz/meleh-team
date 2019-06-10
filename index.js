let c=document.querySelector('canvas');
const second_duration = 8
   const r=20
let x= 0, 
    y=window.innerHeight-r,
    vx = 80,
    vy = -35,
    ay = 0.2,
    pause = false
ay /= second_duration
vx /= second_duration
vy /= second_duration


c.width=window.innerWidth
c.height=window.innerHeight


let ctx=c.getContext('2d')


    
    
    
    
    
function draw_rocket_attacker(x,y,r){
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2);
    ctx.fill()
    ctx.closePath();
}
    
function draw_rocket_defender(x,y,r){
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2);
    ctx.fill()
    ctx.closePath();
}

function animate(){
    console.log("y="+y)
    console.log("x="+x)
    if(pause){
        return;
    }
    
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
    
    vy += ay
    y += vy
    x += vx
    draw_rocket_attacker(x,y,r)
    
    requestAnimationFrame(()=>animate())
}
animate();
window.addEventListener("keypress",e=>{
    if((e.key=='p'||e.key=='P'||e.key=='פ')&&pause==false){
        pause = true;
    } else if((e.key=='p'||e.key=='P'||e.key=='פ')&&pause==true){
        pause = false;
        animate();
    }
})