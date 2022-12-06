var catGif = document.getElementById("playingCat");
var WIDTH = 1080;
var HEIGHT = 750;
var PADDING = 50;
var xPos = 0, yPos = 0;
var xPre = 0, yPre = 0;

window.onload = function() {
    // load call back
    catPlaying();
};

// only for test
function catPlaying(){
    setInterval(function() {
        getNewPosition(WIDTH, HEIGHT);
        setNewPosition();
        setDirection();
        // move();
        setPrePosition();
    }, 2000);
}

function getDistance(ax, ay, zx, zy){
    var dis_x = ax - zx;
    var dix_y = ay - zy;
    dist = Math.sqrt( Math.abs( dis_x * dis_x ) + Math.abs( dix_y * dix_y ) );
    return dist;
}

function generateRandomPosition(padding, boundary){
    return padding + Math.floor(Math.random() * boundary - padding);
}

function getDirection(){
    if (xPre <= xPos)
        return -1;
    else
        return 1;
}

function setDirection(){
    catGif.style.transform = "scaleX("+getDirection()+")";
}

function getNewPosition(width, height){
    xPos = generateRandomPosition(PADDING, width);
    yPos = generateRandomPosition(PADDING, height);
    console.log("Distance : "+Math.round(getDistance(xPos, yPos, xPre, yPre)));
    console.log("X position : " + xPos);
    console.log("Y position : " + yPos);
}

function setNewPosition(){
    catGif.style.left = xPos + "px";
    catGif.style.top = yPos + "px";
}

function setPrePosition(){
    xPre = xPos;
    yPre = yPos;
}

function move(){
    // setInterval(() => console.log("test"), 20);
}