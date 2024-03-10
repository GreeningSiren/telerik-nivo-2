// Suzdavame promenlivi
let myX, myY, radius = 35, x1, x2, y1, y2, ugul = 5, br = 1, tx = [], ty = [], pt = [], y3 = 0, x3 = 0;
let vragx = [], vragy = [], navragx, navragy, vragrgb = [], dx = [], dy = [];
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 400;
    myY = 300;
    for (let iv = 0; iv < 5; iv++) {
        navragx = randomInteger(800 - 15);
        navragy = randomInteger(600 - 15);
        if (!areColliding(navragx, navragy, 20, 20, myX, myY, radius, radius)) {
            vragx[iv] = navragx;
            vragy[iv] = navragy;
        }
        dx[iv] = randomInteger(5) / 2 - 1.25;
        dy[iv] = randomInteger(5) / 2 - 1.25;
        vragrgb[iv] = "rgb(" + (randomInteger(150) + 20) + "," + (randomInteger(150) + 20) + "," + (randomInteger(150) + 20) + ")"
    }
}
function cyr(x1, y1, r1, x2, y2, r2) {
    if (Math.sqrt((y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1)) < r1 + r2) {
        return true;
    } else {
        return false;
    }
}
function update() {
    if (myX > 800 - radius / 2) {
        myX = 800 - radius / 2;
    }
    if (myX < 0 + radius / 2 + 10) {
        myX = 0 + radius / 2 + 10;
    }
    if (myY > 600 - radius / 2) {
        myY = 600 - radius / 2;
    }
    if (myY < 0 + radius / 2 + 10) {
        myY = 0 + radius / 2 + 10;
    }
    for (let iv = 0; iv < 5; iv++) {
        vragx[iv] = vragx[iv] + dx[iv];
        vragy[iv] = vragy[iv] + dy[iv];
        for (let i = 0; i < br; i++) {
            if (cyr(vragx[iv], vragy[iv], 15, tx[i], ty[i], radius - 25)) {
                navragx = randomInteger(800 - 15);
                navragy = randomInteger(600 - 15);
                if (!areColliding(navragx, navragy, 20, 20, myX, myY, radius, radius)) {
                    vragx[iv] = navragx;
                    vragy[iv] = navragy;
                }
                vragrgb[iv] = "rgb(" + (randomInteger(150) + 20) + "," + (randomInteger(150) + 20) + "," + (randomInteger(150) + 20) + ")"
            }
        }
        if (vragx[iv] > 800 - 7.5) {
            dx[iv] = randomInteger(2) / 2 - 1.25;
            dy[iv] = randomInteger(2) / 2 - 0.25;
        }
        if (vragx[iv] < 7.5) {
            dx[iv] = randomInteger(2) / 2 + 0.5;
            dy[iv] = randomInteger(2) / 2 - 0.25;
        }
        if (vragy[iv] > 600 - 7.5) {
            dx[iv] = randomInteger(2) / 2 - 0.25;
            dy[iv] = randomInteger(2) / 2 - 1.25;
        }
        if (vragy[iv] < 7.5) {
            dx[iv] = randomInteger(2) / 2 - 0.25;
            dy[iv] = randomInteger(2) / 2 + 0.5;
        }
    }
    if (isKeyPressed[87] || isKeyPressed[38]) {
        x3 = 2.5 * Math.cos(ugul);
        y3 = 2.5 * Math.sin(ugul);
        myX += x3;
        myY += y3;
    }
    if (isKeyPressed[83] || isKeyPressed[40]) {
        x3 = 2.5 * Math.cos(ugul);
        y3 = 2.5 * Math.sin(ugul);
        myX -= x3;
        myY -= y3;
    }
    if (isKeyPressed[68] || isKeyPressed[39]) {
        ugul += 0.07;
    }
    if (isKeyPressed[65] || isKeyPressed[37]) {
        ugul -= 0.07;
    }
    for (let i = 0; i < br; i++) {
        tx[i] += (6) * Math.cos(pt[i]);
        ty[i] += (6) * Math.sin(pt[i]);
    }
}
function draw() {
    for (let iv = 0; iv < 5; iv++) {
        context.beginPath();
        context.fillStyle = vragrgb[iv];
        context.lineWidth = 0;
        context.arc(vragx[iv], vragy[iv], 15, 0, 2 * Math.PI);
        context.fill();
    }
    for (let i = 0; i < br; i++) {
        context.beginPath();
        context.fillStyle = "black";
        context.lineWidth = 0;
        context.arc(tx[i], ty[i], radius - 25, 0, 2 * Math.PI);
        context.fill();
    }
    context.beginPath();
    context.arc(myX, myY, radius, 0, 2 * Math.PI);
    context.fill();
    context.strokeStyle = "red";
    context.lineWidth = 10;
    context.moveTo(myX, myY);
    context.lineTo(myX + (radius + 50) * Math.cos(ugul), myY + (radius + 50) * Math.sin(ugul));
    context.stroke();

}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    if (key == 32) {
        tx[br] = myX + (radius + 50) * Math.cos(ugul);
        ty[br] = myY + (radius + 50) * Math.sin(ugul);
        pt[br] = ugul;
        br++;
    }
}