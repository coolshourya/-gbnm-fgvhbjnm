var canvas=document.getElementById("Mycanvas");
ctx=canvas.getContext("2d");
color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(230,210,40,0,2*Math.PI);
ctx.stroke();


color="Black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(330,210,40,0,2*Math.PI);
ctx.stroke();



color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(430,210,40,0,2*Math.PI);
ctx.stroke();


color="Yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(380,250,40,0,2*Math.PI);
ctx.stroke();


color="Green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(280,250,40,0,2*Math.PI);
ctx.stroke();




function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke(); 
}

function myMouseDown(e){
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;
    circle(x,y);

}