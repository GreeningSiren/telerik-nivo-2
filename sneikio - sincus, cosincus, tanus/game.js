// import nigga;
// Suzdavame promenlivi
let myX, myY;
// let s = 2
let predishenX = [], predishenY = [], brPredishni = 0;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    // posoka = 0
    ugulche = 0

    x=0
    y=0
    brPokaji = 20
    appleX = randomInteger(800-50)
    appleY = randomInteger(600-50)
}
// let dX = [0,s,s,s,0,-s,-s,-s], dY = [-s,-s,0,s,s,s,0,-s]
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    // myX = myX + (mouseX - myX) / 10;
    // myY = myY + (mouseY - myY) / 10;
    // x = Math.cos(ugulche)
    // y = Math.sin(ugulche)
    // if(dvijenelqvo) {
    //     ugulche-=1
    // }
    // if(dvijenedqsno){
    //     ugulche+=1
    // }
    if(isKeyPressed[68]) {
        ugulche+=0.05
    }
    if(isKeyPressed[65]) {
        ugulche-=0.05
    }
    if(isKeyPressed[87]) {
        x = 2*Math.cos(ugulche)
        y = 2*Math.sin(ugulche)
        // z = 2*Math.tan(ugulche)
        myX+=x
        myY+=y
        // myZ+=z
    predishenX.push(myX)
    predishenY.push(myY)
    }

    // brPredishni++
    //Zapazvame myX,myY v predishenX,predishenY
    // brPredishni++
    if(predishenX.length>brPokaji) {
        predishenX.shift()
        predishenY.shift()
        brPredishni--
    }
    // for(let i=0;i<brPokaji;i++){
    if(areColliding(myX, myY, 60, 80,appleX,appleY,50,50)/* || areColliding(predishenX[i],predishenY[i]+20,50,50,appleX,appleY,50,50)*/){
        appleX = randomInteger(800-50)
        appleY = randomInteger(600-50)
        brPokaji+=10
    // }
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    for(let i=0;i<brPokaji;i++){
        // predishenX[i] = myX
        // predishenY[i] = myY
        drawImage(femaleAction,predishenX[i],predishenY[i],60,80)
        // predishenX.shift()
        // predishenY.shift()
    }
    drawImage(femaleAction, myX, myY, 60, 80);
    context.font = "30px Tahoma"
    context.fillStyle = "rgb(221, 157, 184)"
    context.fillText(ugulche,0,0)

    drawImage(cherry,appleX,appleY,50,50)
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    // if(key==69) {
    //     brPredishni++
        }

// def(drawImage) = нарисувайРисунка

// function draw() {
//     нарисувайРисунка(femaleAction,myX,myY,80,80)

// }