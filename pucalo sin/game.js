// Suzdavame promenlivi
let myX, myY;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    ugulche = 0
    radius = 20
    // Σ = 69 
    // π = 3.1415926
    Σradius = 40
    pX = []
    pY = []
    brPatron = 0
    posokaPatronX = []
    posokaPatronY = []
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    // myX = myX + (mouseX - myX) / 10;
    // myY = myY + (mouseY - myY) / 10;

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
    }
    if(isKeyPressed[83]) {
        x = 2*Math.cos(ugulche)
        y = 2*Math.sin(ugulche)
        myX-=x
        myY-=y
    }
    for(let i =0 ;i<brPatron;i++) {

        pX[i]+=posokaPatronX[i]
        pY[i]+=posokaPatronY[i]
    }


    if (/*key == 32*/isKeyPressed[32]) {
        // for(let i =0 ;i<brPatron;i++) {
        posokaPatronX[brPatron] = 4*Math.cos(ugulche)
        posokaPatronY[brPatron] = 4*Math.sin(ugulche)
        pX[brPatron] =  myX + (radius + 20) * Math.cos(ugulche);
        pY[brPatron] =  myY + (radius + 20) * Math.sin(ugulche);
        brPatron++
    }

    for(let i =0 ;i<brPatron;i++) {
        if(!areColliding(pX[i],pY[i],10,2,0,0,800,600)) {
            // console.log(i, " izleze")
            pX[i] = pX[brPatron]
            pX.pop()
            pY[i] = pY[brPatron]
            pY.pop()
            brPatron--
        }

    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    // drawImage(backField, 0, 0, 800, 600);
    // drawImage(femaleAction, myX, myY, 60, 80);
    context.fillStyle = "purple"
    context.fillRect(0,0,800,600)


    context.strokeStyle = "gray"
    context.lineWidth = 10
    context.beginPath()
    context.moveTo(myX,myY)
    context.lineTo(myX + Σradius*Math.cos(ugulche),myY + Σradius*Math.sin(ugulche))
    context.stroke() 
    context.closePath()

    context.fillStyle = "black"
    context.beginPath()
    context.arc(myX,myY,radius,0,2* Math.PI) 
    context.fill()
    context.closePath()
    for(let i = 0; i<brPatron;i++) {
        context.fillStyle = "#222222"
        context.lineWidth = 4
        context.beginPath()
        context.fillRect(pX[i],pY[i],10,2)
        context.stroke()
        context.closePath()
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

