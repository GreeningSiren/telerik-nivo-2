planetImg = []
for (let i = 0; i < 12; i++) {
    planetImg[i] = tryToLoad("planet[" + i + "]", "white")
}
let cX = [], cY = [], brPlaneti;
let ugul, radius, myX, myY;
let dvijaLiSe;
let distance = 250;

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    brPlaneti = 1;
    for (let i = 0; i < brPlaneti; i++) {
        cX[i] = randomInteger(canvas.width);
        cY[i] = randomInteger(canvas.height);
    }
    while (brPlaneti < 12) {
        cX[brPlaneti] = randomInteger(canvas.width);
        cY[brPlaneti] = randomInteger(canvas.height);
        for (let n = 0; n < brPlaneti; n++) {
            if (Math.abs(cX[brPlaneti] - cX[n]) + Math.abs(cY[brPlaneti] - cY[n]) < distance) {
                cX[brPlaneti] = Infinity;
                cY[brPlaneti] = Infinity;

            }

        }
        if (cX[brPlaneti] != Infinity) {
            brPlaneti++;
        }
    }
    cX[0] = canvas.width / 2;
    cY[0] = canvas.height / 2;
    radius = 120;
    myRaz = 10;
    radCen = 50;
    ugul = 0;
    dvijaLiSe = false;
    ip = 0
}

function areCirclesColliding(x1, y1, r1, x2, y2, r2) {
    let dx = x2 - x1, dy = y2 - y1;
    return Math.sqrt(dy * dy + dx * dx) < r1 + r2;
}

function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    for (i = 0; i < brPlaneti; i++) {
        if (areCirclesColliding(cX[i], cY[i], radCen, myX, myY, myRaz)) {
            console.log("mnogo ti e zle koda")
            ip = i
            dvijaLiSe = false
            radius = 120
            // ugul  = Math.atan2(cY[i]-myX,cX[i]-myY)
        }
    }
    myX = Math.cos(ugul) * radius + cX[ip]
    myY = Math.sin(ugul) * radius + cY[ip]
    if (dvijaLiSe) {
        radius += 5;
    } else {
        ugul += 0.05;
    }
}

function drawCircle(x, y, r, style) {
    context.fillStyle = style
    context.beginPath()
    context.arc(x, y, r, 0, 2 * Math.PI,)
    context.closePath()
    context.fill()
}

function draw() {
    // Tuk naprogramirai kakvo da se risuva
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawImage(ballOrTree, myX - myRaz, myY - myRaz, myRaz * 2, myRaz * 2);
    for (let i = 0; i < brPlaneti; i++) {
        drawImage(planetImg[i], cX[i] - radCen, cY[i] - radCen, radCen * 2, radCen * 2);
    }
    context.fillStyle = "white"
    context.fillRect(cX[0], cY[0], 1, 1)
    context.fillRect(cX[0] - radCen / 2, cY[0] - radCen / 2, 1, 1)
}

function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
    dvijaLiSe = true
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    if (key == 32) {
        dvijaLiSe = true;
    }
}
