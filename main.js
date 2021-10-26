canvas=document.getElementById("my_canvas");
colour="red"
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="blue"
ctx.LineWidth="3"
ctx.arc(190,300,100,0,360);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(m){
    mousex=m.clientX-canvas.offsetLeft;
    mouseY=m.clientY-canvas.offsetTop;
console.log("x="+mousex+"  y="+mouseY);
circle(mousex,mouseY)
}
function circle( mousex,mouseY){
    ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="blue"
ctx.LineWidth="3"
ctx.arc(180,360,50,0,360);
ctx.stroke();
}