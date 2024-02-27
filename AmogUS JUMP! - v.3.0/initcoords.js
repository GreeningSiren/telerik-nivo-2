
function resetboxes() {
    dX = 0
    for (let i = 0; i < 15; i++) {
        kotiqX[i] = Infinity
        kotiqY[i] = Infinity
    }
    for (let i = 0; i < brKoini; i++) {
        coinX[i] = Infinity
        coinY[i] = Infinity
    }
}
function initcoords(level) {
    if (level == 1) {
        dX = 0
        myX = 290.5
        myY = 520
        kaduramog = 2
        brKotii = 4
        kotiqX[0] = 69
        kotiqY[0] = 450
        kotiqX[1] = 260
        kotiqY[1] = 300
        kotiqX[2] = 515
        kotiqY[2] = 200
        kotiqX[3] = 165
        kotiqY[3] = 100
        celX = 180
        celY = 35
    }
    if (level == 2) {
        dX = 0
        myX = 29.5
        myY = 520
        kaduramog = 1
        brKotii = 5
        kotiqX[0] = 188
        kotiqY[0] = 445
        kotiqX[1] = 15
        kotiqY[1] = 350
        kotiqX[2] = 340
        kotiqY[2] = 290
        kotiqX[3] = 470
        kotiqY[3] = 150
        kotiqX[4] = 700
        kotiqY[4] = 75
        celX = 715
        celY = 5
        if (coinCollected[0] == false) {
            coinX[0] = 45
            coinY[0] = 290
        }
    }
    if (level == 3) {
        dX = 0
        myX = 240
        myY = 520
        kaduramog = 1
        brKotii = 5
        kotiqX[0] = 300
        kotiqY[0] = 510
        kotiqX[1] = 485
        kotiqY[1] = 360
        kotiqX[2] = 275
        kotiqY[2] = 280
        kotiqX[3] = 465
        kotiqY[3] = 170
        kotiqX[4] = 90
        kotiqY[4] = 125
        celX = 110
        celY = 65
    }
    if (level == 4) {
        dX = 0
        myX = 60
        myY = 520
        resetboxes()
        brKotii = 1
        brSkokPlati = 1
        kotiqX[0] = 530
        kotiqY[0] = 200
        jumpPadX[0] = 310
        jumpPadY[0] = 550
        if (coinCollected[1] == false) {
            coinX[1] = 110
            coinY[1] = 65
        }
        celX = 550
        celY = 130
    }
    if (level == 5) {
        dX = 0
        myX = 65
        myY = 520
        resetboxes()
        brSkokPlati = 2
        strelSila = -4.5
        brKotii = 2
        jumpPadX[0] = 230
        jumpPadY[0] = 500
        kotiqX[0] = 495
        kotiqY[0] = 315
        jumpPadX[1] = 280
        jumpPadY[1] = 210
        kotiqX[1] = 60
        kotiqY[1] = 100
        celX = 80
        celY = 35
    }
    if(level == 6 ){
        dX = 0
        myX = 65
        myY = 520
        resetboxes() 
        brKotii = 3
        brSkokPlati = 2 
        strelSila = -4.5
        kotiqX[0] = 190
        kotiqY[0] = 500
        jumpPadX[0] = 340
        jumpPadY[0] = 420
        kotiqX[1] = 600
        kotiqY[1] = 285
        jumpPadX[1] = 440
        jumpPadY[1] = 210
        kotiqX[2] = 80
        kotiqY[2] = 150
        celX = 90
        celY = 90
        if (coinCollected[2] == false) {
            coinX[2] = 690
            coinY[2] = 510
        }
    }
    if (level == 7) {
        dX = 0
        myX = 65
        myY = 520
        resetboxes()
        brKotii = 2
        brSkokPlati = 1
        strelSila = -4
        jumpPadX[0] = 230
        jumpPadY[0] = 500
        kotiqX[0] = 30
        kotiqY[0] = 360
        moveTriggerX[0] = 50
        moveTriggerY[0] = 295
        moveplaceX[0] = 235
        moveplaceY[0] = 150
        kotiqX[1] = 510
        kotiqY[1] = 180
        celX = 525
        celY = 120
        if (coinCollected[3] == false) {
            coinX[3] = 480
            coinY[3] = 275
        }
    }
    if(level == 8) {
        coincollect = 0
        dX = 0
        myX = 65
        myY = 520
        resetboxes()
        brKotii = 4
        brSkokPlati = 1
        strelSila = -4.5
        kotiqX[0] = 120
        kotiqY[0] = 430
        kotiqX[1] = 315
        kotiqY[1] = 290
        kotiqX[2] = 590
        kotiqY[2] = 166
        kotiqX[3] = 100
        kotiqY[3] = 140
        jumpPadX[0] = 350
        jumpPadY[0] = 10
        moveTriggerX[0] = 625
        moveTriggerY[0] = 120
        moveplaceX[0] = 350
        moveplaceY[0] = 170
        celX = 110
        celY = 80
        if (coinCollected[4] == false) {
            coinX[4] = 345
            coinY[4] = -70
        }
    }
}