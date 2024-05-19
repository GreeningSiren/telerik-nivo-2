function drawMnogougulnik(x, y, radius, brStrani, style = "White") {
    let ugul = 0
    context.strokeStyle = style
    context.lineWidth = 2;
    context.beginPath()
    context.moveTo(x + radius, y)
    for (let i = 0; i < brStrani; i++) {
        ugul += 2 * Math.PI / brStrani
        context.lineTo(x + (Math.cos(ugul) * radius), y + (Math.sin(ugul) * radius))
    }
    context.stroke();
}

function drawPlayer(x, y, radius, brStrani = 6, style = "White") {
    let ugul = 0
    context.strokeStyle = style
    context.fillStyle = style
    context.lineWidth = 1;
    context.beginPath()
    context.moveTo(x + radius, y)
    for (let i = 0; i < brStrani; i++) {
        ugul += 2 * Math.PI / brStrani
        context.lineTo(x + (Math.cos(ugul) * radius), y + (Math.sin(ugul) * radius))
    }
    // context.stroke()
    context.fill();
}

// Suzdavame promenlivi
let radius = 12;
let myX = 0, myY = radius;
const GRID_HEIGHT = window.innerHeight
const GRID_WIDTH = window.innerWidth
let x, y;
let visochina = (Math.sqrt(3 / 4) * radius);
let posoka = 0
let brUpdates = 0
let opashkaX = [], opashkaY =[];
let razmer = 5

function nadqsnoX(gridX) {
    return gridX * 1.5 * radius;
}

function nadqsnoY(gridY) {
    return -gridY * visochina;
}

function nadoluX() {
    return 0;
}

function nadoluY(gridY) {
    return 2 * visochina * gridY;
}


function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    x = radius;
    y = canvas.height;
}

function update() {
    brUpdates++;
    if (brUpdates % 10 === 0) {
        if (isKeyPressed[87]) {
            opashkaX.push(myX)
            opashkaY.push(myY)
            if(opashkaX.length>5) {
                opashkaX.shift()
                opashkaY.shift()
            }
            if (posoka === 0) {
                myX++;
            } else if (posoka === 1) {
                myX++;
                myY++;
            } else if (posoka === 2) {
                myY++;
            } else if (posoka === 3) {
                myX--;
            } else if (posoka === 4) {
                myX--;
                myY--;
            } else if (posoka === 5) {
                myY--;
            }
        }
        if (isKeyPressed[65]) {
            posoka--;
        }
        if (isKeyPressed[68]) {
            posoka++;
        }
        if (posoka > 5) {
            posoka = 0;
        }
        if (posoka < 0) {
            posoka = 5;
        }
    }
}

function draw() {
    // Tuk naprogramirai kakvo da se risuva
    context.fillStyle = "#1c1c1c"
    context.fillRect(0, 0, canvas.height, canvas.height)
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            // namira pitarogova teroramera na radius/2 i Math.sqrt ot 3/4 po radius
            drawMnogougulnik(
                radius + nadqsnoX(i) + nadoluX(j), radius + nadqsnoY(i) + nadoluY(j) + 127,
                radius, 6, "#f4f4f4")
        }
    }
    for(let n=0;n<opashkaX.length;n++) {
        drawPlayer(radius + nadqsnoX(opashkaX[n]) + nadoluX(opashkaY[n]), radius + nadqsnoY(opashkaX[n]) + nadoluY(opashkaY[n]) + 127, radius,6, "gold")
    }
    drawPlayer(radius+nadqsnoX(myX) + nadoluX(myY), radius + nadqsnoY(myX) + nadoluY(myY) + 127, radius, 6, "#2574a9")
}

function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}
