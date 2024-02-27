// Suzdavame promenlivi
let myX, myY;
let s = 2
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    posoka = 0
}
let dX = [0,s,s,s,0,-s,-s,-s], dY = [-s,-s,0,s,s,s,0,-s]
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    // myX = myX + (mouseX - myX) / 10;
    // myY = myY + (mouseY - myY) / 10;
    if (isKeyPressed[87]) {
        myX += dX[posoka]
        myY += dY[posoka]
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    if (key == 68) {
        posoka = (posoka+1)%8
    }
    if (key == 65) {
        posoka = (posoka-1+8)%8
    }
}

