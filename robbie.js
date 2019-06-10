let c=document.querySelector('canvas')
let ctx=c.getContext('2d')
c.width=window.innerWidth
c.height=window.innerHeight

let matkif_x=300
let matkif_y=1100

let matkif_dx=5
let matkif_dy=5

let defender_x=window.innerWidth-300
let defender_y=1100

let random
let defender_dx=Math.random()*8
let defender_dy=5





function draw_matkif(){
    ctx.beginPath()
ctx.fillRect(matkif_x,matkif_y,40,40)
    ctx.fill()
    ctx.closePath()


}
function draw_defender(){
    ctx.beginPath()
    ctx.fillRect(defender_x,defender_y,40,40)
    ctx.fill()
        ctx.closePath()
    
    
    }


function animate(){
ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
draw_defender()
draw_matkif()
defender_x-=defender_dx;
defender_y-=defender_dy;
matkif_x+=defender_dx;
matkif_y-=defender_dy;
if(defender_dx<5){
    defender_dx+=1
}



requestAnimationFrame(()=> animate())
}
draw_defender()
draw_matkif()
animate()