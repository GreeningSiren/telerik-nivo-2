// Suzdavame promenlivi
let myX, myY;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    kucheX = 0
    kucheY = randomInteger(canvas.height - 100)
    kucheKadurTaimer = 0
    brUpdeti = 0
    duma = "KUHER"
    dumai = 1
    novaduma = ""
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myX = myX + (mouseX - myX) / 10;
    myY = myY + (mouseY - myY) / 10;
    brUpdeti++
    if (kucheKadurTaimer > 3) {
        kucheKadurTaimer = 0
    }
    if (brUpdeti == 30) {
        kucheKadurTaimer = kucheKadurTaimer + 1
        brUpdeti = 0
    }
    kucheX = kucheX + 1
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
    drawImage(dogWalk[kucheKadurTaimer], kucheX, kucheY, 100, 60)
    context.font = "50px Courier New"
    context.fillText(duma, kucheX, kucheY - 50)
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
    console.log(duma.charCodeAt(1))
    console.log((duma.length) - 1)
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", novaduma);
    for (dumai = 1; dumai <= duma.length - 1; dumai++) {
        novaduma = novaduma + duma[dumai]
        console.log(novaduma)

    }
    duma = novaduma
    novaduma = ""
    // if(key==75) {
    // duma = duma[1]+duma[2]+duma[3]+duma[4]
    // }
    // if(key==85) {
    // duma = duma[1]+duma[2]+duma[3]
    // }
    // if(key==72) {
    // duma = duma[1]+duma[2]
    // }
    // if(key==69) {
    // duma = duma[1]
    // }
    // if(key==82) {
    // duma = "slei besti" 
    // }
}