// Suzdavame promenlivi
let myX, myY;
const RIZZMER = 20

function areKrugcheDokos(x1, y1, r1, x2, y2, r2) {
    let a = Math.abs(x1 - x2)
    let b = Math.abs(y1 - y2)

    return Math.sqrt(a * a + b * b) <= r1 + r2
}
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    pixel = []
    // pixel[0] = "Red" 
    resuvamLi = false
    for (let x = 0; x < 600 / RIZZMER; x++) {
        pixel[x] = []
        for (let y = 0; y < 600 / RIZZMER; y++) {
            pixel[x][y] = "White"
        }
    }
    SelectedColor = "Red"
    radius = 0
    // pixel[5] = "Green"
    centurX =mouseX
    centurY =mouseY

    // let centurX = 200
    // let centurY = 200
    // let radius = 100
    drawMode = "pixel"
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myX = myX + (mouseX - myX) / 10;
    myY = myY + (mouseY - myY) / 10;
    if (areColliding(mouseX, mouseY, 1, 1, 0, 0, 600, 600)) {
        if (resuvamLi && drawMode == "pixel") {
            let pixelX = Math.floor(mouseX / RIZZMER)
            let pixelY = Math.floor(mouseY / RIZZMER)
            pixel[pixelX][pixelY] = SelectedColor
        }
    }
    let a =Math.floor(centurX - mouseX)
    let b =Math.floor(centurY- mouseY)
    let radius = Math.sqrt(a*a + b*b)
    if (resuvamLi && drawMode == "circle") {
        for (let x = 0; x < 600 / RIZZMER; x++) {
            for (let y = 0; y < 600 / RIZZMER; y++) {
                if (areKrugcheDokos(centurX, centurY, radius, x * RIZZMER + RIZZMER / 2, y * RIZZMER + RIZZMER / 2, RIZZMER / 2)) {
                    pixel[x][y] = SelectedColor
                    // console.log("slei")
                }
            }
    
        }
    }


}
function drawPixel(context, x, y, color) {
    // for(pixel=0;pixel<400;pixel++) {
    var roundedX = Math.floor(x);//az kodq
    var roundedY = Math.floor(y);
    context.fillStyle = color
    context.fillRect(roundedX, roundedY, RIZZMER, RIZZMER);
    // }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    // drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
    for (let x = 0; x < 600 / RIZZMER; x++) {
        for (let y = 0; y < 600 / RIZZMER; y++) {
            drawPixel(context, x * RIZZMER, y * RIZZMER, pixel[x][y]);
            // if(pixel[x][y] == "Black") {
            //     context.fillStyle = "White"
            // }
            context.strokeRect(x * RIZZMER, y * RIZZMER, RIZZMER-1, RIZZMER-1)
            // context.fillStyle = "Black"
        }

    }
    context.fillStyle = "Red"
    context.fillRect(650, 20, 50, 50)
    context.fillStyle = "Green"
    context.fillRect(650, 80, 50, 50)
    context.fillStyle = "Blue"
    context.fillRect(650, 140, 50, 50)
    context.fillStyle = "Black"
    context.fillRect(650, 200, 50, 50)
    context.font = "30px Tahoma"
    context.fillText("PIXEL MOD" , 650,450)
    context.font = "30px Tahoma"
    context.fillText("CIRCL MOD" , 647,500)
    context.font = "30px Tahoma"
    context.fillText("LAIN MODe" , 647,550)
 
    
  

}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
    resuvamLi = false
    // for(i=0;i<Infinity;)
    if (areColliding(mouseX, mouseY, 1, 1, 650, 20, 50, 50)) {
        SelectedColor = "Red"
    }
    if (areColliding(mouseX, mouseY, 1, 1, 650, 80, 50, 50)) {
        SelectedColor = "Green"
    }
    if (areColliding(mouseX, mouseY, 1, 1, 650, 140, 50, 50)) {
        SelectedColor = "Blue"
    }
    if (areColliding(mouseX, mouseY, 1, 1, 650, 200, 50, 50)) {
        SelectedColor = "Black"
    }
    if (areColliding(mouseX, mouseY, 1, 1, 650, 450, 150, 20)) {
        drawMode = "pixel"
    }
    if (areColliding(mouseX, mouseY, 1, 1, 647, 500, 150, 20)) {
        drawMode = "circle"
    }
    if (areColliding(mouseX, mouseY, 1, 1, 647, 550, 150, 20)) {
        drawMode = "line"
    }
    let dx = mouseX - centurX
    let dy = mouseY - centurY
    let dL = Math.sqrt(dx*dx + dy*dy) 
    let otmestXza1 = dx/dL
    let otmestYza1 = dy/dL
    if(drawMode == "line") {
        for(let i=0; i<dL; i+=dL/20) {
            let x = centurX+otmestXza1*i
            let y = centurY+otmestYza1*i
            pixel[Math.floor(x/RIZZMER)][Math.floor(y/RIZZMER)]= SelectedColor
            // console.log("sa")
        }
    }


}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    if(key==87) {
        drawMode = "pixel"
    }
    if(key==69) {
        drawMode = "circle"
    }
}

function mousedown() {
    resuvamLi = true
    centurX =mouseX
    centurY =mouseY


}