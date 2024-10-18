// Suzdavame promenlivi
var fireintheholesfx = new Audio('./extra/fireinthehole.mp3')
var metalpipesfx = new Audio('./extra/metalpipe.mp3')
var coincollectsfx = new Audio('./extra/coincollect.mp3')
var startsfx = new Audio('./extra/start.mp3')
let myX, myY;
// var loading = new Image()
// const loadingimg = document.getElementById("loading")
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 65;
    myY = 600 - 80;
    mestqlisenalqvo = false
    mestqlisenadqsno = false
    dX = 0;
    dY = 9.800
    skoknat = 0
    level = 0
    kotiqX = []
    kotiqY = []
    coinX = []
    coinY = []
    brKotii = 0
    brKoini = 5
    brSkokPlati = 0
    coinCollected = []
    lk = 0
    strelSila = -6
    kaduramog = 1
    prevlvl = 0
    loadupt = 0
    nextlvl = 0.5
    celX = -500
    celY = -500
    coincollect = 0
    jumpPadX = []
    jumpPadY = []
    moveTriggerX = []
    moveTriggerY = []
    moveplaceX = []
    moveplaceY = []
    for (let i = 0; i < brKoini; i++) {
        coinCollected[i] = false
    }

    // startTime = new Date()
    currentTime = new Date()
    isActiveTimer = false

    // pratiloadupt500 = false
    // loading.src = "loading.gif"
}
function naZemqtaLiSum(Y) {
    if (Y >= 600 - 80 || areColliding(myX, myY + 80, 60, 1, kotiqX[i], kotiqY[i], 100, 1)) {
        return true
    } else {
        return false
    }
}
function coinoutof() {
    coincollect = 0
    if (coinCollected[0] == true) {
        coincollect++
    }
    if (coinCollected[1] == true) {
        coincollect++
    }
    if (coinCollected[2] == true) {
        coincollect++
    }
    if (coinCollected[3] == true) {
        coincollect++
    }
    if (coinCollected[4] == true) {
        coincollect++
    }
    return coincollect
}
function writeText(font, style, text, x, y) {
    context.font = font
    context.fillStyle = style
    context.fillText(text, x, y)
}
function getTimeSigma() {
    return (currentTime.getTime() - startTime.getTime()) / 1000
}
function writeTimer() {
    context.font = "20px Tahoma"
    context.fillStyle = "White"
    context.fillText((getTimeSigma()), 0, 0)
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    if (mestqlisenalqvo) {
        dX -= 0.25;
        kaduramog = 2
    }
    if (mestqlisenadqsno) {
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

    if (myY >= 600 - 80) {
        dY = 0;
        myY = 600 - 80;
    }
    for (i = 0; i < brKotii; i++) {
        if (areColliding(myX, myY + 80 - 10, 60, 1 + 9, kotiqX[i], kotiqY[i], 100, 1 + 9) && level - prevlvl == 1) {
            // console.log(myX , myY)
            myY = kotiqY[i] - 80
            // console.log(myX , myY)
            // console.log("stupi na kotiq", i)
            dY = 0

        }
    }
    if (loadupt > 0) {
        loadupt--
    }
    // if(pratiloadupt500) {
    //     loadupt = 500
    //     pratiloadupt500 = false
    // }

    if (myX < 0) {
        myX = 0
    }
    if (myX > 800 - 60) {
        myX = 800 - 60
    }

    if (isActiveTimer) {
        currentTime = new Date()
    }
}

function draw() {
    // Tuk naprogramirai kakvo da se risuva
    context.fillStyle = "Black"
    context.fillRect(0, 0, 800, 600)
    // drawImage(backField, 0, 0, 800, 600);
    // drawImage(box,0,600,800,1)
    if (level == 0) {
        preloadTextures();
        context.font = "30px Tahoma"
        context.fillStyle = "White"
        context.fillText("Kolito Predstavq", 70, 120)
        context.font = "70px Comic Sans"
        context.fillStyle = "Red"
        context.fillText("AmogUS JUMP!", 50, 230)
        drawImage(powerupGreen, 310, 600 - 10, 100, 10)
        drawImage(pngegg, 590, 20, 170, 150)
        context.font = "27px Tahoma"
        context.fillStyle = "Gray"
        context.fillText("Movement", 600 + 14, 150 + 15)
        drawImage(spacebar, 590, 230, 170, 50)
        context.fillText("Jump", 640, 300)
        context.fillText("Press E to interact", 250, 563)
    }
    if (level - prevlvl == 0.5 && level != 8.5) { // 
        // console.log("NIIVO 1")
        // context.drawImage(loading,650,480,100,100)
        // writeTimer()
        context.font = "50px Tahoma"
        context.fillStyle = "White"
        nextlvl = level + 0.5
        resetboxes()
        context.fillText("Level " + nextlvl, 240, 200)
        lk++
        if (lk > 7) {
            lk = 0
        }
        drawImage(loading[lk], 650, 480, 100, 100)
        // "./images/loading.gif".draw(650,480)
        // pratiloadupt500 = true
        if (loadupt == 0) {
            // prevlvl = level
            initcoords(nextlvl)
            level = level + 0.5
            nextlvl = level + 0.5
            // console.log("level + 0.5 kum 1")
        }
        writeTimer()

    }
    if (level == 8.5) { // Posledno Nivo
        // coinoutof()
        isActiveTimer = false
        // writeTimer()
        writeText("30px Tahoma", "White", "Congrats! You completed the game!", 170, 150)
        writeText("40px Tahoma", "Yellow", coinoutof() + "/5 SPECIAL coins collected", 150, 280)
        if (coincollect >= 5) {
            writeText("40px Tahoma", "rgb(202, 162, 253)", "ALL SPECIAL COINS!", 165, 320)
        }
        if (coincollect == 0) {
            writeText("40px Tahoma", "Cyan", "Going for Any%?", 255, 350)
        }
        writeText("30px Tahoma", "Red", "Kolio 4ao", 460, 500)
        writeText("30px Tahoma", "White", "Time: ", 150, 45)
        writeText("30px Tahoma", "White", getTimeSigma(), 230, 45)

    }
    if (level % 1 == 0) {  // Ako nivo e 1,2,3...
        for (i = 0; i < brKotii; i++) {
            drawImage(box, kotiqX[i], kotiqY[i], 100, 50)
        }
        if (areColliding(myX, myY, 60, 80, 0, 0, 1, 1)) {
            loadupt = 100
            prevlvl = level
            level = level + 0.5
            // console.log("level + 0.5 kum 0.5")
        }
        if (areColliding(celX, celY, 60, 60, myX, myY, 60, 80) && isKeyPressed[69]) {
            fireintheholesfx.currentTime = 0
            fireintheholesfx.play()
            loadupt = 100
            prevlvl = level
            level = level + 0.5
            nextlvl = level + 0.5


        }
        for (let i = 0; i < brSkokPlati; i++) {


            if (areColliding(myX, myY, 60, 80, jumpPadX[i], jumpPadY[i], 50, 50) && isKeyPressed[69]) {
                metalpipesfx.volume = 0.3
                metalpipesfx.currentTime = 0
                metalpipesfx.play()
                myY = myY - 10
                dY = strelSila
                console.log("hvruk")
            }
            if (areColliding(myX, myY, 60, 80, moveTriggerX[i], moveTriggerY[i], 50, 50) && isKeyPressed[69]) {
                jumpPadX[i] = moveplaceX[i]
                jumpPadY[i] = moveplaceY[i]
            }
        }
        for (let i = 0; i < brKoini; i++) {
            if (areColliding(myX, myY, 60, 80, coinX[i], coinY[i], 50, 50) && coinCollected[i] == false && isKeyPressed[69]) {
                coincollectsfx.currentTime = 0
                coincollectsfx.volume = 0.4
                coincollectsfx.play()
                coinX[i] = Infinity
                coinY[i] = Infinity
                coinCollected[i] = true
            }
        }

        if (level == 2) {
            // if (coinCollected[0] == false) {
            writeText("25px Tahoma", "white", "This is a SPECIAL Coin!", 70, 145)
            writeText("25px Tahoma", "white", "Make sure to collect it", 70, 175)
            // }
        }
        if (level == 1) {
            writeText("25px Tahoma", "White", "Interact with the weird green guy", 385, 50)
            writeText("25px Tahoma", "White", "to go to the next level", 385, 75)
        }
        if (level == 4) {
            writeText("30px Tahoma", "white", "Interact with a 'Jump Pad'", 400, 435)
            writeText("30px Tahoma", "white", "to get thrown in the air", 475, 465)

        }
        if (level == 6) {
            writeText("30px Tahoma", "white", "Press 'R'", 460, 90)
            writeText("30px Tahoma", "white", "to reset the level", 460, 120)
        }
        if (level == 7) {
            writeText("30px Tahoma", "white", "Interact with the 'Move Trigger'", 40, 50)
            writeText("30px Tahoma", "white", "to move its connected 'Jump Pad'", 40, 80)
        }
        if (level == 8) {
            writeText("30px Tahoma", "white", "There's a SECRET Coin", 430, 440)
            writeText("30px Tahoma", "white", "hidden above the level", 430, 470)
        }
        writeText("30px Tahoma", "white", "Placeholder", -100, -100)
        if (level != 0) {
            writeTimer()
        }
    }
    if (level - prevlvl != 0.5) { // Ako nivo e 0.5,1.5,2.5...
        drawImage(fireinthehole, celX, celY, 60, 60)
        for (let i = 0; i < brSkokPlati; i++) {
            drawImage(powerupBlue, jumpPadX[i], jumpPadY[i], 50, 50)
            drawImage(moveTrigger, moveTriggerX[i], moveTriggerY[i], 50, 50)
        }
        drawImage(femaleAction[kaduramog], myX, myY, 60, 80);
    }
    for (let i = 0; i < brKoini; i++) {
        drawImage(negacoin, coinX[i], coinY[i], 50, 50)
    }
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keydown(key) {
    if (key == 65 || key == 37) {
        mestqlisenalqvo = true

    }
    if (key == 68 || key == 39) {
        mestqlisenadqsno = true

    }

    if ((key == 32 || key == 87 || key == 38)) {
        // console.log(brKotii)
        if (myY >= 600 - 80) {
            // console.log("AAA")
            dY = - 4;
        }
        for (i = 0; i < brKotii; i++) {
            if ((areColliding(myX, myY + 80, 60, 1, kotiqX[i], kotiqY[i], 100, 1))) {
                // skoknat = 100
                // console.log("BBB")
                dY = - 4;
            }
        }
    }
    // if(key==69) {
    //     // fireintheholesfx.play()
    //     if()
    // }
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    if (key == 65 || key == 37) {
        mestqlisenalqvo = false
    }
    if (key == 68 || key == 39) {
        mestqlisenadqsno = false
    }
    if (level == 0 && areColliding(myX, myY, 60, 80, 310, 600 - 10, 100, 10) && key == 69) {
        // console.log("LOADING LVL1")
        startsfx.currentTime = 0
        startsfx.play()
        level = 0.5
        loadupt = 100
        startTime = new Date()
        isActiveTimer = true
        // brKotii = 3
    }
    //     if(key == 83) {
    //         dy=100
    //         console.log("i")
    //     }
    if (key == 82 && level - prevlvl != 0.5) {
        initcoords(level)
    }
}

