// Suzdavame promenlivi
let myX, myY, brMuhi;
let bumNach = -42
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    muhaX = [];
    muhaY = [];
    mi = [];
    // padashtaMusha
    padashtaMusha = []
    bumRazmer = 100;
    brMuhi = 50;
    brUpdeti = 0;
    // bum = false;
    lives = 500;  // nema davam inf che mn she e op
    pyortokalY = 250;
    pyortokalX = 350;
    bumX = 4242;
    bumY = bumX;
    bumNach = -42;
    nachalo = true
    for (mi = 0; mi <= brMuhi; mi = mi + 1) {
        muhaX[mi] = randomInteger(800 - 50);
        muhaY[mi] = randomInteger(600 - 50);
        if (areColliding(muhaX[mi], muhaY[mi], pyortokalX, pyortokalY)) {
            // muhaX[mi] = randomInteger(800 - 50);
            // muhaY[mi] = randomInteger(600 - 50);
        }
        while (areColliding(muhaX[mi], muhaY[mi], 50, 50, pyortokalX - 100, pyortokalY - 100, 100 + 200, 100 + 200)) {
            muhaX[mi] = randomInteger(800);
            muhaY[mi] = randomInteger(600);
        }
    }

}
function update() {
    if (!nachalo) {
        // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
        // myX = myX + (mouseX - myX) / 10;
        // myY = myY + (mouseY - myY) / 10;
        myX = mouseX
        myY = mouseY
        // for (mi = 0; mi < brMuhi; mi = mi + 1) {
        //     muhaX[mi] = muhaX[mi] + (mouseX - muhaX[mi]) / 250;
        //     muhaY[mi] = muhaY[mi] + (mouseY - muhaY[mi]) / 250;
        // }
        // brMuhi = brMuhi + 1
        for (mi = 0; mi <= brMuhi; mi = mi + 1) {
            muhaX[mi] = muhaX[mi] + (randomInteger(50) - 25) / 7;
            muhaX[mi] = muhaX[mi] + (pyortokalX - (muhaX[mi] - 50)) / 250;
            muhaY[mi] = muhaY[mi] + (randomInteger(50) - 25) / 7;
            muhaY[mi] = muhaY[mi] + (pyortokalY - (muhaY[mi] - 50)) / 250;
            if (areColliding(muhaX[mi], muhaY[mi], 50, 50, pyortokalX, pyortokalY, 100, 100)) {
                // console.log("dokos");
                muhaX[mi] = muhaX[brMuhi - 1];
                muhaY[mi] = muhaY[brMuhi - 1];
                brMuhi--;
                lives--;
            }
            if (padashtaMusha[mi]) {
                muhaY[mi] = muhaY[mi] + 1
            }
        }
        if (brUpdeti % 2 == 0) {
            // brUpdeti = 0;
            muhaX[brMuhi] = randomInteger(800);
            muhaY[brMuhi] = randomInteger(600);

            brMuhi++;
            while (areColliding(muhaX[brMuhi], muhaY[brMuhi], 50, 50, pyortokalX - 100, pyortokalY - 100, 100 + 200, 100 + 200)) {
                muhaX[brMuhi] = randomInteger(800);
                muhaY[brMuhi] = randomInteger(600);
            }
        }

        if (brUpdeti - bumNach > 5) {
            bumX = 4242;
        }
        brUpdeti++;

        if (lives <= 0) {
            alert("umreeeeeeeee")
            nachalo
            init()
        }
        if (muhaY[mi] > 600 && padashtaMusha[mi]) {
            muhaX[mi] = muhaX[brMuhi - 1];
            muhaY[mi] = muhaY[brMuhi - 1];
            brMuhi--;
        }
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    if (!nachalo) {
        drawImage(pyortokal, pyortokalX, pyortokalY, 100, 100);
        for (mi = 0; mi <= brMuhi; mi = mi + 1) {
            drawImage(mushichka, muhaX[mi], muhaY[mi], 50, 50);
        }
        drawImage(ishowspeed, myX, myY, 60, 80);
        // if (bum) {
        //     drawImage(explosion2, myX, myY, 60, 60);
        //     bum = false;
        // }
        drawImage(explosion2, bumX, bumY, bumRazmer, bumRazmer);

        context.font = "42px Tahoma"
        context.fillStyle = "darkred"
        context.fillText("Jivoti:" + lives, 10, 600 - 50)

    } else {
        context.font = "42px Tahoma"
        context.fillStyle = "red"
        context.fillText("Natishni G", 300, 300)
    }
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    // console.log("Mouse clicked at", mouseX, mouseY);
    // nachalo=false
    if (!nachalo) {
        bumX = mouseX - bumRazmer / 2;
        bumY = mouseY - bumRazmer / 2;
        bumNach = brUpdeti;
        for (mi = 0; mi <= brMuhi; mi = mi + 1) {
            if (areColliding(mouseX - bumRazmer / 2, mouseY - bumRazmer / 2, 80, 80, muhaX[mi], muhaY[mi], 50, 50)) {
                // smurt ama nz kak;
                // console.log("muh " + mi + " umre");
                padashtaMusha[mi] = true

            }
        }
    }
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    // console.log("Pressed", key);
    if (key == 71) {
        nachalo = false
    }
}
