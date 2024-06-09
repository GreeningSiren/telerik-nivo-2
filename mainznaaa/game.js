let mini = [];
let otvoreno = [];
let crosshairBlue = tryToLoad("crosshairBlue","blue")
let gameOver = false
function writeText(font, style, text, x, y) {
    context.font = font
    context.fillStyle = style
    context.fillText(text, x, y)
}
function vutreLiUPoletoSym(kol,red) {
    return !(kol < 0 || kol > 9 || red < 0 || red > 9);
}
function broiMiniDoMen(kol,red) {
    // ej shmatka kolenichi kak gi pravi batkoti vyv teradkite zapishi
    let broi = 0;
    // if(vutreLiUPoletoSym(kol,red) && mini[kol][red]) { broi++; }
    if(red % 2 !== 0) {
        if (vutreLiUPoletoSym(kol + 1, red) && mini[kol + 1][red]) {broi++;} //               Надясно | Същ ред
        if (vutreLiUPoletoSym(kol - 1, red) && mini[kol - 1][red]) {broi++;} //                Наляво | Същ ред
        if (vutreLiUPoletoSym(kol, red + 1) && mini[kol][red + 1]) {broi++;} //             На никъде | Нагоре
        if (vutreLiUPoletoSym(kol, red - 1) && mini[kol][red - 1]) {broi++;} //             На никъде | Надолу
        if (vutreLiUPoletoSym(kol + 1, red + 1) && mini[kol + 1][red + 1]) {broi++;} //   Надясно | Нагоре
        if (vutreLiUPoletoSym(kol + 1, red - 1) && mini[kol + 1][red - 1]) {broi++;} //   Надясно | Надолу
    }else {
        if (vutreLiUPoletoSym(kol + 1, red) && mini[kol + 1][red]) {broi++;} //               Надясно | Същ ред
        if (vutreLiUPoletoSym(kol - 1, red) && mini[kol - 1][red]) {broi++;} //                Наляво | Същ ред
        if (vutreLiUPoletoSym(kol, red + 1) && mini[kol][red + 1]) {broi++;} //             На никъде | Нагоре
        if (vutreLiUPoletoSym(kol, red - 1) && mini[kol][red - 1]) {broi++;} //             На никъде | Надолу
        if (vutreLiUPoletoSym(kol - 1, red + 1) && mini[kol - 1][red + 1]) {broi++;} //   Наляво  | Нагоре
        if (vutreLiUPoletoSym(kol - 1, red - 1) && mini[kol - 1][red - 1]) {broi++;} //   Наляво  | Надолу
    }

    // if(vutreLiUPoletoSym(kol-1,red+1) && mini[kol-1][red+1]) { broi++; }
    // if(vutreLiUPoletoSym(kol-1,red-1) && mini[kol-1][red-1]) { broi++; }
    return broi;
}
function drawHexagon(x, y, radius) {
    context.moveTo(
        Math.cos(Math.PI / 6),
        -Math.sin(Math.PI / 6)
    );
    context.beginPath();
    for (let i = 1; i <= 6; i++) {
        let ugul = Math.PI / 6 + i * Math.PI / 3;
        context.lineTo(
            Math.cos(ugul) * radius + x,
            -Math.sin(ugul) * radius + y
        );
    }
    context.fill();
}

function init() {
    for (let i = 0; i < 10; i++) {
        mini[i] = [];
        otvoreno[i] = [];
        for (let j = 0; j < 10; j++) {
            mini[i][j] = randomInteger(1.4);
            otvoreno[i][j] = 0;
        }
    }
}
function update() {
}
function draw() {
    context.fillStyle = "black";
    context.fillRect(0, 0, 800, 600);
    if(!gameOver) {
        //context.fillStyle = "green";
        for (let kolona = 0; kolona < 10; kolona++) {
            for (let red = 0; red < 10; red++) {
                if (otvoreno[kolona][red] === 1) {
                    if (mini[kolona][red]) {
                        context.fillStyle = "#F00";
                        gameOver = true
                    } else {
                        context.fillStyle = "#0F0";
                    }
                } else if (otvoreno[kolona][red] === 0) {
                    context.fillStyle = "#FFF";
                } else {
                    context.fillStyle = "#FFF";
                }
                let hexX, hexY;
                let visochina = Math.cos(Math.PI / 6);
                if (red % 2 === 0) {
                    hexX = 100 + kolona * visochina * 30 * 2;
                    hexY = 100 + red * 30 * 1.5;
                    drawHexagon(
                        hexX,
                        hexY,
                        29
                    );
                } else {
                    hexX = 100 + kolona * visochina * 30 * 2 + Math.cos(Math.PI / 6) * 30
                    hexY = 100 + red * 30 * 1.5
                    drawHexagon(
                        hexX,
                        hexY,
                        29
                    );
                }
                if (otvoreno[kolona][red] === 1) {
                    if (mini[kolona][red]) {
                        writeText("12px Tahoma", "Black", "BOMBA", hexX - 18, hexY - 5)
                    } else {
                        writeText("30px Tahoma", "Black", broiMiniDoMen(kolona, red), hexX - 10, hexY - 10)
                    }
                } else if (otvoreno[kolona][red] === 2) {
                    let hexX, hexY;
                    let visochina = Math.cos(Math.PI / 6);
                    if (red % 2 === 0) {
                        hexX = 100 + kolona * visochina * 30 * 2;
                        hexY = 100 + red * 30 * 1.5;
                    } else {
                        hexX = 100 + kolona * visochina * 30 * 2 + Math.cos(Math.PI / 6) * 30;
                        hexY = 100 + red * 30 * 1.5
                    }
                    drawImage(crosshairBlue, hexX - 10, hexY - 10, 20, 20)
                }
            }
        }
        // Tuk naprogramirai kakvo da se risuva
    }else{
        writeText("50px Tahoma", "WHITE", "GAME OVER!!!",200,200)
        writeText("50px Tahoma", "WHITE", "KYS",200,250)
    }
}
function mouseup() {
    if(!gameOver) {
        // Pri klik s lqv buton - pokaji koordinatite na mishkata
        console.log("Mouse clicked at", mouseX, mouseY);
        for (let red = 0; red < 10; red++) {
            for (let kolona = 0; kolona < 10; kolona++) {
                let centurX;
                let centurY = 100 + red * 30 * 1.5;
                if (red % 2 === 1) {
                    centurX = 100 + kolona * (Math.cos(Math.PI / 6)) * 30 * 2 + Math.cos(Math.PI / 6) * 30;
                } else {
                    centurX = 100 + kolona * (Math.cos(Math.PI / 6)) * 30 * 2;
                }
                let dist = Math.sqrt((mouseY - centurY) * (mouseY - centurY) +
                    (mouseX - centurX) * (mouseX - centurX));
                if (otvoreno[kolona][red] === 0) {
                    if (dist < Math.cos(Math.PI / 6) * 30 && red % 2 === 0) {
                        otvoreno[kolona][red] = 1;
                    }
                    if (dist < Math.cos(Math.PI / 6) * 30 && red % 2 === 1) {
                        otvoreno[kolona][red] = 1;
                    }
                }
            }
        }
    }
}
function keyup(key) {
    if(!gameOver) {
        // Pechatai koda na natisnatiq klavish
        if (key === 32) {
            for (let red = 0; red < 10; red++) {
                for (let kolona = 0; kolona < 10; kolona++) {
                    let centurX;
                    let centurY = 100 + red * 30 * 1.5;
                    if (red % 2 === 1) {
                        centurX = 100 + kolona * (Math.cos(Math.PI / 6)) * 30 * 2 + Math.cos(Math.PI / 6) * 30;
                    } else {
                        centurX = 100 + kolona * (Math.cos(Math.PI / 6)) * 30 * 2;
                    }
                    let dist = Math.sqrt((mouseY - centurY) * (mouseY - centurY) +
                        (mouseX - centurX) * (mouseX - centurX));
                    if (otvoreno[kolona][red] === 0) {
                        if (dist < Math.cos(Math.PI / 6) * 30 && red % 2 === 0) {
                            otvoreno[kolona][red] = 2;
                        }
                        if (dist < Math.cos(Math.PI / 6) * 30 && red % 2 === 1) {
                            otvoreno[kolona][red] = 2;
                        }
                    } else if (otvoreno[kolona][red] === 2) {
                        if (dist < Math.cos(Math.PI / 6) * 30 && red % 2 === 0) {
                            otvoreno[kolona][red] = 0;
                        }
                        if (dist < Math.cos(Math.PI / 6) * 30 && red % 2 === 1) {
                            otvoreno[kolona][red] = 0;
                        }
                    }
                }
            }
        }
    }else{
        if(key===82) {
            location.reload()
        }
    }
}

