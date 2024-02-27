// Suzdavame promenlivi
let myX, myY, wutre = [], r = false, timer = 0;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    canvas.height = 1000;
    canvas.width = 1000;
    for (let i = 0; i < 7; i++) {
        wutre[i] = [];
        for (let iw = 0; iw < 5; iw++) {
            wutre[i][iw] = false
        }
    }
    for (let i = 0; i < 5; i++) {
        RandomHod();
    }
}
function RandomHod() {
    let randomX = randomInteger(250), randomY = randomInteger(250);
    if (Math.floor(randomX / 50) + 1 < 7)
        wutre[Math.floor(randomX / 50) + 1][Math.floor(randomY / 50)] = !wutre[Math.floor(randomX / 50) + 1][Math.floor(randomY / 50)];
    if (Math.floor(randomX / 50) < 7)
        wutre[Math.floor(randomX / 50)][Math.floor(randomY / 50)] = !wutre[Math.floor(randomX / 50)][Math.floor(randomY / 50)];
    if (Math.floor(randomX / 50) - 1 >= 0)
        wutre[Math.floor(randomX / 50) - 1][Math.floor(randomY / 50)] = !wutre[Math.floor(randomX / 50) - 1][Math.floor(randomY / 50)];
    if (Math.floor(randomY / 50) - 1 >= 0)
        wutre[Math.floor(randomX / 50)][Math.floor(randomY / 50) - 1] = !wutre[Math.floor(randomX / 50)][Math.floor(randomY / 50) - 1];
    if (Math.floor(randomY / 50) + 1 < 7)
        wutre[Math.floor(randomX / 50)][Math.floor(randomY / 50) + 1] = !wutre[Math.floor(randomX / 50)][Math.floor(randomY / 50) + 1];
}
function update() {
    if (!r) {
        timer++;
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    for (let il = 0; il < 8; il++) {
        context.beginPath();
        context.moveTo(50 + il * 50, 50);
        context.lineTo(50 + il * 50, 400);
        context.stroke();
        context.beginPath();
        context.moveTo(50, 50 + il * 50);
        context.lineTo(400, 50 + il * 50);
        context.stroke();
    }
    for (let i = 0; i < 7; i++) {
        for (let iw = 0; iw < 7; iw++) {
            if (!wutre[i][iw]) {
                drawImage(lampGray, (i + 1) * 50, (iw + 1) * 50, 50, 50);
            } else {
                drawImage(lampYellow, (i + 1) * 50, (iw + 1) * 50, 50, 50);
            }
        }
    }
    if (!r && !wutre[1][1] && !wutre[1][2] && !wutre[1][3] && !wutre[1][4] && !wutre[1][0] && !wutre[2][1] && !wutre[2][2] && !wutre[2][3] && !wutre[2][4] && !wutre[2][0] && !wutre[3][1] && !wutre[3][2] && !wutre[3][3] && !wutre[3][4] && !wutre[3][0] && !wutre[4][1] && !wutre[4][2] && !wutre[4][3] && !wutre[4][4] && !wutre[4][0] && !wutre[0][1] && !wutre[0][2] && !wutre[0][3] && !wutre[0][4] && !wutre[0][0] && !wutre[5][0] && !wutre[5][1] && !wutre[5][2] && !wutre[5][3] && !wutre[5][4] && !wutre[5][5] && !wutre[5][6] && !wutre[6][0] && !wutre[6][1] && !wutre[6][2] && !wutre[6][3] && !wutre[6][4] && !wutre[6][5] && !wutre[6][6] && !wutre[0][5] && !wutre[0][6] && !wutre[1][5] && !wutre[1][6] && !wutre[2][5] && !wutre[2][6] && !wutre[3][5] && !wutre[3][6] && !wutre[4][5] && !wutre[4][6]) {
        alert("Ti pobedi!1!1!1!1!1!1!1!1!1!1!1!1!1!1!1!1!1!1!1!1!1!!1!1!1!1!1!1!1!1");
        r = true;
    }
    context.font = "50px Arial";
    context.fillStyle = "black";
    context.fillText(timer / 100 + " : timer (seconds)", 450, 100);
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
    for (let i = 0; i < 7; i++) {
        for (let iw = 0; iw < 7; iw++) {
            if (areColliding((i + 1) * 50, (iw + 1) * 50, 50, 50, mouseX, mouseY, 2, 2)) {
                //for () {
                if (!wutre[i][iw]) {
                    wutre[i][iw] = true
                } else if (wutre[i][iw]) {
                    wutre[i][iw] = false
                }
                if (i + 1 < 7) {
                    if (!wutre[i + 1][iw]) {
                        wutre[i + 1][iw] = true
                    } else if (wutre[i + 1][iw]) {
                        wutre[i + 1][iw] = false
                    }
                }
                if (!wutre[i][iw + 1]) {
                    wutre[i][iw + 1] = true
                } else if (wutre[i][iw + 1]) {
                    wutre[i][iw + 1] = false
                }
                if (i > 0) {
                    if (!wutre[i - 1][iw]) {
                        wutre[i - 1][iw] = true
                    } else if (wutre[i - 1][iw]) {
                        wutre[i - 1][iw] = false
                    }
                }
                if (!wutre[i][iw - 1]) {
                    wutre[i][iw - 1] = true
                } else if (wutre[i][iw - 1]) {
                    wutre[i][iw - 1] = false
                }
            }
        }
    }
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

