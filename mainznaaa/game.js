let mini = [];
let otvoreno = [];

function writeText(font, style, text, x, y) {
    context.font = font
    context.fillStyle = style
    context.fillText(text, x, y)
}
function vutreLiUPoletoSym(kol,red) {
    if(kol < 0 || kol > 9 || red < 0 || red > 9) { return false; }
    return true
}
function broiMiniDoMen(kol,red) {
    // ej shmatka kolenichi kak gi pravi batkoti vyv teradkite zapishi
    let broi = 0;
    // if(vutreLiUPoletoSym(kol,red) && mini[kol][red]) { broi++; }
    if(vutreLiUPoletoSym(kol+1,red) && mini[kol+1][red]) { broi++; } //              Надясно | Същ ред
    if(vutreLiUPoletoSym(kol-1,red) && mini[kol-1][red]) { broi++; } //               Наляво | Същ ред
    if(vutreLiUPoletoSym(kol,red+1) && mini[kol][red+1]) { broi++; } //            На никъде | Нагоре
    if(vutreLiUPoletoSym(kol,red-1) && mini[kol][red-1]) { broi++; } //            На никъде | Надолу
    if(vutreLiUPoletoSym(kol+1,red+1) && mini[kol+1][red+1]) { broi++; } //      Надясно | Нагоре
    if(vutreLiUPoletoSym(kol+1,red-1) && mini[kol+1][red-1]) { broi++; } //      Надясно | Надолу
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
            mini[i][j] = randomInteger(2);
            otvoreno[i][j] = false;
        }
    }
}
function update() {
}
function draw() {
    context.fillStyle = "black";
    context.fillRect(0, 0, 800, 600);
    context.fillStyle = "green";
    for (let kolona = 0; kolona < 10; kolona++) {
        for (let red = 0; red < 10; red++) {
            if (otvoreno[kolona][red]) {
                if (mini[kolona][red]) {
                    context.fillStyle = "#F00";
                } else {
                    context.fillStyle = "#0F0";
                }
            } else {
                context.fillStyle = "#FFF";
            }
            let hexX,hexY;
            let visochina = Math.cos(Math.PI / 6);
            if (red % 2 === 0) {
                hexX = 100 + kolona * visochina * 30 * 2;
                hexY = 100 + red * 30 * 1.5;
                drawHexagon(
                    hexX,
                    hexY,
                    29
                );
                writeText("30px Tahoma", "Black",broiMiniDoMen(kolona, red),hexX-10,hexY-10)
            } else {
                hexX = 100 + kolona * visochina * 30 * 2 + Math.cos(Math.PI / 6) * 30
                hexY = 100 + red * 30 * 1.5
                drawHexagon(
                    hexX,
                    hexY,
                    29
                );
                writeText("30px Tahoma", "Black", broiMiniDoMen(kolona,red), hexX-10, hexY-10)
            }
        }
    }
    // Tuk naprogramirai kakvo da se risuva

}
function mouseup() {
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
            if (dist < Math.cos(Math.PI / 6) * 30 && red % 2 === 0) {
                otvoreno[kolona][red] = true;
                otvoreno[kolona + 1][red] = true;
                otvoreno[kolona - 1][red] = true;
                otvoreno[kolona][red + 1] = true;
                otvoreno[kolona][red - 1] = true;
                otvoreno[kolona ][red + 1] = true;
                otvoreno[kolona][red - 1] = true;
                otvoreno[kolona - 1][red + 1] = true;
                otvoreno[kolona - 1][red - 1] = true;


            }
            if (dist < Math.cos(Math.PI / 6) * 30 && red % 2 === 1) {
                otvoreno[kolona][red] = true;
                otvoreno[kolona + 1][red] = true;
                otvoreno[kolona - 1][red] = true;
                otvoreno[kolona + 1][red + 1] = true;
                otvoreno[kolona + 1][red - 1] = true;
                otvoreno[kolona][red + 1] = true;
                otvoreno[kolona][red - 1] = true;
            }
        }
    }
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}
