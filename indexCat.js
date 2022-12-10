
//객체 1,2,3 생성
const cat1 = {
    catGif : document.getElementById("playingCat"),
     WIDTH : 1080,
 HEIGHT : 750,
 PADDING : 50,
 xPos : 0, yPos : 0,
 xPosInit : 100, yPosInit : 100,
 arrived : true,
 amount : 1,
 ms : 30
}
const cat2 = {
    catGif : document.getElementById("playingCat2"),
     WIDTH : 1080,
 HEIGHT : 750,
 PADDING : 50,
 xPos : 0, yPos : 0,
 xPosInit : 200, yPosInit : 200,
 arrived : true,
 amount : 1,
 ms : 30
}

window.onload = function() {
    //만든 객체들 각각 실행
    initializeCat(cat1);
    catPlaying(cat1);
    initializeCat(cat2);
    catPlaying(cat2);
    
    
};

//모든 함수에 객체를 전달시켜, 객체내의 변수에 접근 가능하게함
function initializeCat(cat){
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

    cat.xPosInit = generateRandomPosition(cat.PADDING, cat.WIDTH);
    cat.yPosInit = generateRandomPosition(cat.PADDING, cat.HEIGHT);
    cat.catGif.style.left = cat.xPosInit + "px";
    cat.catGif.style.top = cat.yPosInit + "px";
    //console.log("init pos : (" + xPosInit + ", " + yPosInit + ")");
}

// 20ms마다 고양이 방향, 위치 갱신
function catPlaying(cat){
    var catWalk = setInterval(() => move(cat), cat.ms);
}

function move(cat){
    if(cat.arrived){
        getNewPosition(cat);  // 목적지
        setDirection(cat);                 // 방향
        cat.arrived = false;
    }
    // console.log("currnct coordinate : (" + getNowPosX() + ", " + getNowPosY() + ")");
    // 이동
    if(getNowPosX(cat) < cat.xPos) cat.catGif.style.left = getNowPosX(cat) + cat.amount + "px";
    else if(getNowPosX(cat) > cat.xPos) cat.catGif.style.left = getNowPosX(cat) - cat.amount + "px";
    if(getNowPosY(cat) < cat.yPos) cat.catGif.style.top = getNowPosY(cat) + cat.amount + "px";
    else if(getNowPosY(cat) > cat.yPos) cat.catGif.style.top = getNowPosY(cat) - cat.amount + "px";
    if(getNowPosX(cat) == cat.xPos && getNowPosY(cat) == cat.yPos) cat.arrived = true;
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

function getDirection(cat){
    if (getNowPosX(cat) <= cat.xPos)
        return -1;
    else
        return 1;
}

function setDirection(cat){
    cat.catGif.style.transform = "scaleX("+getDirection(cat)+")";
}

function getNewPosition(cat){
    cat.xPos = generateRandomPosition(cat.PADDING, cat.WIDTH);
    cat.yPos = generateRandomPosition(cat.PADDING, cat.HEIGHT);
    console.log("New Position : (" + cat.xPos + ", " + cat.yPos + ")");
}

function setNewPosition(cat){
    cat.catGif.style.left = cat.xPos + "px";
    cat.catGif.style.top = cat.yPos + "px";
}

function getNowPosX(cat){
    return parseInt(cat.catGif.style.left.replace('px', ''));
}

function getNowPosY(cat){
    return parseInt(cat.catGif.style.top.replace('px', ''))
}