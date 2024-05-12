function drawMnogougulnik(x, y, radius, brStrani, style = "Black") {
    let ugul = 0
    context.strokeStyle = style
    context.lineWidth = 2;
    context.beginPath()
    context.moveTo(x + radius, y)
    for (let i = 0; i < brStrani; i++) {
        ugul += 2 * Math.PI / brStrani
        context.lineTo(x + (Math.cos(ugul) * radius), y + (Math.sin(ugul) * radius))
    }
    // context.fill();
    context.stroke();
}
function pythagorean(sideA, sideB){
    // Use the Pythagorean theorem to calculate the length of the hypotenuse.
    // return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    return Math.hypot(sideA,sideB)
}

// Suzdavame promenlivi
let myX, myY;
endlessCanvas = true;
const GRID_HEIGHT = window.innerHeight
const GRID_WIDTH = window.innerWidth
let x, y;

function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    radius = 25;
    x = radius;
    y = canvas.height ;
}

function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myX = myX + (mouseX - myX) / 10;
    myY = myY + (mouseY - myY) / 10;
}

function draw() {
    // Tuk naprogramirai kakvo da se risuva
    // context.fillStyle = "black"
    // context.fillRect(0, 0, GRID_HEIGHT, GRID_WIDTH)
    for (let i = 0; i <30; i++) {
        for (let j = 0; j < 30; j++) {
            let visochina = pythagorean(radius / 2, (Math.sqrt(3 / 4)* radius))
            let a = y - visochina - (j * (visochina - 2) * 2) - (i * visochina);

            drawMnogougulnik(
                (x + (3 / 2 * radius) *i),
                (a),
                radius, 6, "black")
            // x += (3 / 2 * radius);
            // console.log(x,y)
            // y -= Math.hypot( radius/2,Math.sqrt(3/4)*radius)
            //console.log(a);
            //console.log(y);
        }
    }
}

function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}
