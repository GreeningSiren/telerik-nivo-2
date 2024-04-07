let cX = [], cY = [], brPlaneti;
let ugul, radius, myX, myY;
let dvijaLiSe;
function init() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    brPlaneti = 5
    for(let i = 0; i < brPlaneti; i++){
        cX[i] = randomInteger(canvas.width);
        cY[i] = randomInteger(canvas.height);
    }
    cX[0] = canvas.width/2
    cY[0] = canvas.height/2
    radius = 80
    radCen = 100
    ugul = 0
    dvijaLiSe = false
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myX = Math.cos(ugul) * radius + cX[0]
    myY = Math.sin(ugul) * radius + cY[0]
    if(!dvijaLiSe){
        ugul += 0.05
    }else{
        radius += 5
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    context.fillStyle = "black"
    context.fillRect(0,0,canvas.width,canvas.height)
    drawImage(ballOrTree, myX + radCen/2, myY + radCen/2, 20, 20);
    for(let i = 0; i < brPlaneti; i++){
        drawImage(ballOrTarget, cX[i], cY[i], radCen, radCen);
    }
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    if(key == 32){
        dvijaLiSe = true
    }
}