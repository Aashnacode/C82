canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var lastpositionofx, lastpositionofy;

color="black";
widthofline=1;

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
    color=document.getElementById("color").value;
    widthofline=document.getElementById("wol").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",mymouseup);

function mymouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e){
    currentpositionofmousex=e.clientX - canvas.offsetLeft;
    currentpositionofmousey=e.clientY - canvas.offsetTop;

    if(mouseEvent="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;

        console.log("last position of x and y coordinates are=x- "+lastpositionofx+" ,y- "+lastpositionofy);
        ctx.moveTo(lastpositionofx,lastpositionofy);

        console.log("current position of x and y coordinates are=x- "+currentpositionofmousex+" ,y- "+currentpositionofmousey);
        ctx.lineTo(currentpositionofmousex,currentpositionofmousey);
        ctx.stroke();

    }
    lastpositionofx=currentpositionofmousex;
    lastpositionofy=currentpositionofmousey;
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}