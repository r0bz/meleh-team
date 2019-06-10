let c=document.querySelector('canvas');








   const r1=20
let x1= 0, 
    y1=window.innerHeight-r1,
    vx1 = 9,
    vy1 = -8,
    ay1 =0.1,
    pause1 = false

    const t=-vy1/ay1
    const y0=y1+vy1*t+(1/2)*ay1*(t*t)-0.5*vy1
    const maxX=vx1*t
    const maxY=y0

   
   const r=r1
let x= x1, 
    y=y1,
    vx = vx1,
    vy = vy1,
    ay = ay1,
    d_x=window.innerWidth,
    d_y=window.innerHeight,
    d_vx = -vx1,
    d_vy = vy1,
    d_ay = ay1,
    pause = pause1



c.width=window.innerWidth
c.height=window.innerHeight


let ctx=c.getContext('2d')


function draw_rocket_attacker(x,y,r){
    ctx.beginPath()
    ctx.fillRect(x,y,40,40)
    ctx.fill()
    ctx.closePath()


}
function draw_rocket_defender(d_x,d_y,r){
    ctx.beginPath()
    ctx.fillRect(d_x,d_y,40,40)
    ctx.fill()
    ctx.closePath()
    
    
    }

    
    
let tt=0
function animate(){
    console.log("y="+y)
    console.log("x="+x)
    console.log("yyyyyy="+y0)
    // console.log("tttt="+t)
    // console.log("vy="+vy)
    // console.log("vx="+vx)
    // console.log("vy1="+vy1)
    // console.log("vx1="+vx1)
    // console.log("ay="+ay)
    // console.log("t="+tt)
    // if(y0==y||y>y0-1&&y<y0+1){
    //     pause=true;
    // }
    if(pause){
        return;
    }
    
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
    
    vy += ay
    // console.log(ay)
    y += vy
    x += vx
    draw_rocket_attacker(x,y,r)
    d_vy += d_ay
    d_y += d_vy
    d_x += d_vx
    draw_rocket_defender(d_x,d_y,r)
    tt++
    requestAnimationFrame(()=>animate())
}
// function d_animate(){
//     console.log("d_y="+d_y)
//     console.log("d_x="+d_x)
//     if(pause){
//         return;
//     }
    
//     ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
    
//     d_vy += d_ay
//     d_y += d_vy
//     d_x += d_vx
//     draw_rocket_defender(d_x,d_y,r)
    
//     requestAnimationFrame(()=>animate())
// }

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
        const r=r1;   
        x= x1;
        y=window.innerHeight-r1;
        vx = vx1;
        vy = vy1;
        ay = ay1;
        pause = pause1;
        d_x=window.innerWidth;
        d_y=window.innerHeight;
        d_vx = -vx1;
        d_vy = vy1;
        d_ay = ay1;

    }
})