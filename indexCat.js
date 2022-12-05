// window.addEventListener('resize', resizeCanvas, false);
// function resizeCanvas() {
//     myCanvas.width = document.body.clientWidth;
//     myCanvas.height = document.body.clientHeight;

//     /**
//      * Your drawings need to be inside this function otherwise they will be reset when
//      * you resize the browser window and the canvas goes will be cleared.
//      */
//     // drawStuff();
// }

var myCanvas = document.getElementById("catCanvas");
var ctx = myCanvas.getContext("2d");
var WIDTH = 1080;
var HEIGHT = 750;
var PADDING = 50;
myCanvas.width = WIDTH;
myCanvas.height = HEIGHT;

var xPos = 0, yPos = 0;
var xPre = 0, yPre = 0;

window.onload = function() {
    // load call back
    Test();
};

// only for test
function Test(){
    setInterval(function() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        setNewPosition(WIDTH, HEIGHT);
    }, 2000);    
}

function getDistance(ax, ay, zx, zy){
    var dis_x = ax - zx;
    var dix_y = ay - zy;
    dist = Math.sqrt( Math.abs( dis_x * dis_x ) + Math.abs( dix_y * dix_y ) );
    return dist;
}

function randomPosition(padding, boundary){
    return padding + Math.floor(Math.random() * boundary - padding);
}

function setNewPosition(width, height){
    xPos = randomPosition(PADDING, width);
    yPos = randomPosition(PADDING, height);
    console.log("Distance : "+Math.round(getDistance(xPos, yPos, xPre, yPre)));
    console.log("X position : " + xPos);
    console.log("Y position : " + yPos);
    // visualizePosition();
    xPre = xPos;
    yPre = yPos;
}

function visualizePosition(){
    ctx.beginPath();
    ctx.arc(xPos, yPos, 20, 0, 10);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.stroke();
}