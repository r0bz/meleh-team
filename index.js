let c=document.querySelector('canvas');
const s_d = 8
   const r1=20
let x1= 0, 
    y1=window.innerHeight-r1,
    vx1 = 80,
    vy1 = -35,
    ay1 = 0.2,
    pause1 = false
ay1 /= s_d
vx1 /= s_d
vy1 /= s_d

    const second_duration = s_d
   const r=r1
let x= x1, 
    y=y1,
    vx = vx1,
    vy = vy1,
    ay = ay1,
    pause = pause1
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
window.addEventListener("keypress",a=>{
    if((a.key=='r'||a.key=='R'||a.key=='ר')){
        console.log("restart");
        const second_duration = s_d;
        const r=r1;   
        x= x1;
        y=y1;
        vx = vx1;
        vy = vy1;
        ay = ay1;
        pause = pause1;
        ay /= second_duration;
        vx /= second_duration;
        vy /= second_duration;
    }
})