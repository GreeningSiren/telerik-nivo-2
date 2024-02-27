// Suzdavame promenlivi
let myX, myY;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 65;
    myY = 600-80;
    mestqlisenalqvo = false
    mestqlisenadqsno = false
    dX = 0;
    dY = 9.800
    skoknat = 0
    level = 0
    kotiqX = []
    kotiqY = []
    brKotii=0

    kotiqX[0] = 69
    kotiqY[0] = 450
    kotiqX[1] =260
    kotiqY[1] =300
    kaduramog=1
}
function naZemqtaLiSum(Y) {
    if(Y>=600-80 || areColliding(myX, myY+80, 60, 1,kotiqX[i],kotiqY[i],100,1)) {
        return true
    }else{
        return false
    }
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    if(mestqlisenalqvo) {
        dX-= 0.25;
        kaduramog = 2
    }
    if(mestqlisenadqsno) {
        dX += 0.25; 
        kaduramog = 1
    }
    // if(naZemqtaLiSum(myY)==false && skoknat<=0) {
    // myY = myY + dy
    // }
    // if(skoknat>0) {
    //     dy =  -19.600
    //     skoknat = skoknat -1
    // }
    // if(skoknat <= 0 ) {
    //     dy = 9.800
    // }
    myX += dX;
    myY += dY;
    dY += 0.05;
    dX = dX / 1.1;
    if(myY >=600-80) {
        dY =0;
        myY = 600-80;
    }
    for(i=0;i<brKotii;i++) {
    if(areColliding(myX, myY+80, 60, 1,kotiqX[i],kotiqY[i],100,1)) {
        console.log("stupi na kotiq", i)
        dY= 0

    }
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    context.fillStyle = "Black"
    context.fillRect(0,0,800,600)
    // drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction[kaduramog], myX, myY, 60, 80);
    // drawImage(box,0,600,800,1)
    if(level==0) {
        context.font = "30px Tahoma"
        context.fillStyle = "White"
        context.fillText("Kolito Predstavq", 70,120)
        context.font = "70px Comic Sans"
        context.fillStyle = "Red"
        context.fillText("AmonUS JUMP!",50,230)
        drawImage(jelly[4],310,600-10,100,10)
        drawImage(pngegg,590,20,170,150)
        context.font = "27px Tahoma"
        context.fillStyle = "Gray"
        context.fillText("Movement",600+14,150+15)
        drawImage(spacebar,590,230,170,50)
        context.fillText("Jump",640,300)
        context.fillText("jump",330,563)
    }
    if(level==1) {
        for(i=0;i<brKotii;i++) {
            drawImage(box,kotiqX[i],kotiqY[i],100,50)
        }
    }
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keydown(key) {
    if(key==65 || key==37) {
        mestqlisenalqvo=true

    }
    if(key==68 || key==39) {
        mestqlisenadqsno=true
        
    }
    for(i=0;i<brKotii;i++) {
    if((key==32 || key == 87 || key==38) && level!=0 && (myY>=600-80 || areColliding(myX, myY+80, 60, 1,kotiqX[i],kotiqY[i],100,1))) {
        // skoknat = 100
        dY = - 4;
    }
}
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    if(key==65 || key==37) {
        mestqlisenalqvo=false
    }
    if(key==68 || key==39) {
        mestqlisenadqsno=false
    }
    if(level==0 && areColliding(myX, myY, 60, 80,310,600-10,100,10) && ((key==32 || key == 87 || key==38))) {
        console.log("LEVEL 1")

        level = 1

        brKotii = 2
    }
//     if(key == 83) {
//         dy=100
//         console.log("i")
//     }
}

