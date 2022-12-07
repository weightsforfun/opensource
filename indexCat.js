var catGif = document.getElementById("playingCat");
var WIDTH = 1080;
var HEIGHT = 750;
var PADDING = 50;
var xPos = 0, yPos = 0;
var xPosInit = 0, yPosInit = 0;
var arrived = true;
var amount = 1;
var ms = 30;

window.onload = function() {
    initializeCat();
    catPlaying();
};

function initializeCat(){
    // choice random cat
    // var randomCat = Math.round(Math.random() * 2);
    // console.log(randomCat);
    // switch(randomCat){
    //     case 0:
    //         catGif.src = "./picture/cat_gif.gif";
    //         break;
    //     case 1:
    //         catGif.src = "./picture/cat_gif2.gif";
    //         break;
    //     default:
    //         catGif.src = "./picture/cat_gif_ref.gif";
    //         break;
    // }

    xPosInit = generateRandomPosition(PADDING, WIDTH);
    yPosInit = generateRandomPosition(PADDING, HEIGHT);
    catGif.style.left = xPosInit + "px";
    catGif.style.top = yPosInit + "px";
    console.log("init pos : (" + xPosInit + ", " + yPosInit + ")");
}

// 20ms마다 고양이 방향, 위치 갱신
function catPlaying(){
    var catWalk = setInterval(() => move(amount), ms);
}

function move(amount){
    if(arrived){
        getNewPosition(WIDTH, HEIGHT);  // 목적지
        setDirection();                 // 방향
        arrived = false;
    }
    // console.log("currnct coordinate : (" + getNowPosX() + ", " + getNowPosY() + ")");
    // 이동
    if(getNowPosX() < xPos) catGif.style.left = getNowPosX() + amount + "px";
    else if(getNowPosX() > xPos) catGif.style.left = getNowPosX() - amount + "px";
    if(getNowPosY() < yPos) catGif.style.top = getNowPosY() + amount + "px";
    else if(getNowPosY() > yPos) catGif.style.top = getNowPosY() - amount + "px";
    if(getNowPosX() == xPos && getNowPosY() == yPos) arrived = true;
}

function getDistance(ax, ay, zx, zy){
    var dis_x = ax - zx;
    var dix_y = ay - zy;
    dist = Math.sqrt( Math.abs( dis_x * dis_x ) + Math.abs( dix_y * dix_y ) );
    return dist;
}

function generateRandomPosition(padding, boundary){
    return padding + Math.floor(Math.random() * boundary);
}

function getDirection(){
    if (getNowPosX() <= xPos)
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
    console.log("New Position : (" + xPos + ", " + yPos + ")");
}

function setNewPosition(){
    catGif.style.left = xPos + "px";
    catGif.style.top = yPos + "px";
}

function getNowPosX(){
    return parseInt(catGif.style.left.replace('px', ''));
}

function getNowPosY(){
    return parseInt(catGif.style.top.replace('px', ''))
}