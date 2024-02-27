// Suzdavame promenlivi
let myX, myY;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    reklama = document.querySelector('.reklama');
    myX = canvas.width/2;
    myY = canvas.height/2;
    cameraX=0
    cameraY=0
    camSize=0
    pedalX= randomInteger(800-60)
    pedalY= randomInteger(600-60)
    brKufteta = 1000
    kufteX= []
    kufteY= []
    azRazmer=60
    kufteRazmer = 30
    zoom = 1
    for(ki=0;ki < brKufteta; ki++) {
        kufteX[ki] = randomInteger(4000)
        kufteY[ki] = randomInteger(4000)
    }
}
function areCircle(x1,y1,r1,x2,y2,r2) {
    let dx = x2-x1, dy = y2-y1;
    if(Math.sqrt(dy*dy + dx*dx) < r1+r2) {
        return true;
    } else {
        return false;
    }
} 
function update() {
    cameraX= myX*zoom -400
    cameraY= myY*zoom -300
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myX += (mouseX - canvas.width/2)/100
    myY += (mouseY - canvas.height/2)/100
    // pedalX = pedalX + (randomInteger(50) - 25) / 7;
    pedalX = pedalX + (myX - (pedalX - 60/2)) / 300;
    // pedalY = pedalY + (randomInteger(50) - 25) / 7;
    pedalY = pedalY + (myY - (pedalY - 60/2)) / 300;

    for(ki=0;ki < brKufteta; ki++) {
        if(areCircle(myX,myY,azRazmer/2,kufteX[ki],kufteY[ki],kufteRazmer/2)) {
            // console.log("dokos")
            kufteX[ki] = Infinity
            // kufteY[ki] = Infinity
            azRazmer = azRazmer + 10
        }
    }
    if(azRazmer == 200) {
        camSize= 200
    }
}
// let zoom = 1
function drawCircleWithCamera(imekartinka, x, y, radius) {
    drawImage(imekartinka, zoom*x - radius*zoom - cameraX, zoom*y - radius*zoom - cameraY, zoom*radius*2, zoom*radius*2);
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    // drawImage(ballOrTree, myX - azRazmer/2 -cameraX, myY - azRazmer/2 -cameraY, azRazmer, azRazmer);
    drawCircleWithCamera(ballOrTree, myX, myY, azRazmer/2);
    drawImage(boxAlienGreenSuit,pedalX -cameraX,pedalY -cameraY,60,60)
    for(ki=0;ki < brKufteta; ki++) {
        drawImage(kufte,kufteX[ki] - kufteRazmer/2 -cameraX,kufteY[ki] - kufteRazmer/2 -cameraY ,kufteRazmer,kufteRazmer)
    }

}
function mouseup() {
    reklama.addEventListener('click', function() {
        console.log("reklama")
        var url = 'https://pepco.bg/';
        window.open(url, "_self");
    });
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

