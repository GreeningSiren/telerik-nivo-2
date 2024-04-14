let BGFar, BGMedium, BGNear, FGNear, FGTree;
let farX = 0, mediumX = 0, nearX = 0, groundX = 0, groundY = 500, groundHeight = 100;
let cloudsWidth = 600, cloudsHeight = 300;
let treeWidth1 = 100, treeHeight1 = 200, treeWidth2 = 70, treeHeight2 = 300;
let treeX1 = 0, treeY1 = groundY - treeHeight1 + 20, treeX2 = 0, treeY2 = groundY - treeHeight2;

let myShir = 80, myVis = 150, myX = 80, myY = groundY - myVis, playerImg, dY = -10;
let pX= [], pY= [], pShir = [], pVis = [], pKartinka = [];
let isInAir = false

function updateImages() {
    farX    = farX - 0.3;
    mediumX = mediumX - 0.8;
    nearX   = nearX - 1.3;
    groundX -= 1.7;
    if(farX < -600)     {farX = 0}
    if(mediumX < -600)  {mediumX = 0}
    if(nearX < -600)    {nearX = 0}
    if(groundX < -600)   {groundX = 0;}

    treeX1 -= 1.7;
    treeX2 -= 1.5;
    if(treeX1 < -600) {
        treeX1 = 0;
    }
    if(treeX2 < -600) {
        treeX2 = 0;
    }
}
function drawBackground() {
    drawImage(BGFar, farX, 0, cloudsWidth + 1, cloudsHeight);
    drawImage(BGFar, farX + cloudsWidth, 0, cloudsWidth + 1, cloudsHeight);

    drawImage(BGMedium, mediumX, 0, cloudsWidth + 1, cloudsHeight);
    drawImage(BGMedium, mediumX + cloudsWidth, 0, cloudsWidth + 1, cloudsHeight);

    drawImage(BGNear, nearX, 0, cloudsWidth + 1, cloudsHeight);
    drawImage(BGNear, nearX + cloudsWidth, 0, cloudsWidth + 1, cloudsHeight);

    context.fillStyle = "black";
    context.fillRect(0, groundY, canvas.width, groundHeight);
    drawImage(FGNear, groundX,                  groundY, cloudsWidth + 1, groundHeight);
    drawImage(FGNear, groundX + cloudsWidth,    groundY, cloudsWidth + 1, groundHeight);

    for(let i = 0; i < 40; i++) {
        drawImage(FGTree, treeX2 + i*canvas.width/20, treeY2, treeWidth2, treeHeight2);
    }

    for(let i = 0; i < 20; i++) {
        drawImage(FGTree, treeX1 + i*canvas.width/8, treeY1, treeWidth1, treeHeight1);
    }
}
function init() {
    canvas.width = 600;
    canvas.height = 600;
    BGFar = tryToLoadWithFullPath("./background/far.png");
    BGMedium = tryToLoadWithFullPath("./background/medium.png");
    BGNear = tryToLoadWithFullPath("./background/near.png");

    FGNear = tryToLoadWithFullPath("./foreground/near.png");
    FGTree = tryToLoadWithFullPath("./props/tree.png");

    playerImg = tryToLoadWithFullPath("./props/playerImg.png")
    pKartinka = tryToLoadWithFullPath("./props/playerImg.png")
}
// Todo: Napravi trashaviq level editor ;)
function update() {
    updateImages()
    if(isInAir) {
        myY += dY
        dY += 0.1
    }
    if(areColliding(myX,myY,myShir,myVis,0,500,canvas.width,canvas.height)) { // Ako dokos pod
        isInAir = false
        dY  = 0
        myY = 350
    }
}
function draw() {
    drawBackground();
    drawImage(playerImg,myX,myY,myShir,myVis)
    drawImage(pKartinka,pX,pY,pShir,pVis)
}
function keydown(key) {
    if(!isInAir && key === 32) { // ako ne si vuv vuzdoh i cuknesh speis, HVRUK
        isInAir = true;
        dY = -6.5
    }
}
// function mouseup() {
//     console.log(mouseX, mouseY)
// }