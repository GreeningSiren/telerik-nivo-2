// `Suzdavame promenlivi
let myX, myY;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    platformaX = []
    platformaZ = []
    brPlatformi = 10
    for (i = 1; i < brPlatformi; i++) {
        for (let dulgost = 0; dulgost < 800; dulgost += 50) {
            platformaX[i] = randomInteger(800)-400
            platformaZ[i] = i * 2 + 5;
        }
    }
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myX = mouseX
    myY = mouseY
    platformaX[0] = mouseX - 400 - 100
    platformaZ[0] = 1
    // platformaZ[0] = 
    for (i = 1; i < brPlatformi; i++) {
        platformaZ[i] -= 0.01
        // for (let dulgost = 0; dulgost < 800; dulgost += 50) {
            if (platformaZ[i] < 1) {
                platformaX[i] = platformaX[brPlatformi - 1]
                platformaZ[i] = platformaZ[brPlatformi - 1]
                platformaX[i] = randomInteger(800) - 400
                platformaZ[i] = i * 2 + 5

            }
        // }
    }

}
function narisuvai4ugalnik(x1, y1, x2, y2, x3, y3, x4, y4) {
    // context.fillStyle = "#f45f45"
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.lineTo(x3, y3)
    context.lineTo(x4, y4)
    // context.lineTo(x1,y1)
    context.closePath()
    context.fill()



}
function svetloeX(x, y, z) {
    y = y
    return x / z + 400;
}
function svetloeY(x, y, z) {
    x = x
    return y / z + 300;
}
function svetloeZkumrazmeri(razmer, z) {
    return razmer / z
}
function nraisuvPlatforma(x, y, z, rX, rZ) {
    narisuvai4ugalnik(
        svetloeX(x, y, z), svetloeY(x, y, z), // задноляв
        svetloeX(x + rX, y, z), svetloeY(x + rX, y, z), // заднодесен
        svetloeX(x + rX, y, z - rZ), svetloeY(x + rX, y, z - rZ), // преднодесен
        svetloeX(x, y, z - rZ), svetloeY(x, y, z - rZ) // предноляв
    );
}
function narisuvLqvaStena(x, y, z, ry, rz) {
    narisuvai4ugalnik(//leva
        svetloeX(x, y, z), svetloeY(x, y, z), // goren zadnolqv
        svetloeX(x, y + ry, z), svetloeY(x, y + ry, z), // goren zadnodensne
        svetloeX(x, y + ry, z - rz), svetloeY(x, y + ry, z - rz), //preden desen
        svetloeX(x, y, z - rz), svetloeY(x, y, z - rz) // preden levo
    );
    context.stroke()
}
function narisuvaiGornaStena(x, y, z, rx, rz) {
    narisuvai4ugalnik( //gorna
        svetloeX(x, y, z), svetloeY(x, y, z), // goren zadnolqv
        svetloeX(x + rx, y, z), svetloeY(x + rx, y, z), // goren zadnodensne
        svetloeX(x + rx, y, z - rz), svetloeY(x + rx, y, z - rz), //preden desen
        svetloeX(x, y, z - rz), svetloeY(x, y, z - rz) // preden levo
    );
    context.stroke()
}
function narisuvaiDolnaStena(x, y, z, rx, ry, rz) {
    narisuvai4ugalnik( //dolno
        svetloeX(x, y + ry, z), svetloeY(x, y + ry, z), // goren zadnolqv
        svetloeX(x + rx, y + ry, z), svetloeY(x + rx, y + ry, z), // goren zadnodensne
        svetloeX(x + rx, y + ry, z - rz), svetloeY(x + rx, y + ry, z - rz), //preden desen
        svetloeX(x, y + ry, z - rz), svetloeY(x, y + ry, z - rz) // preden levo
    );
    context.stroke()
}
function narisuvaiDqsnaStana(x, y, z, rx, ry, rz) {
    narisuvai4ugalnik(//leva
        svetloeX(x + rx, y, z), svetloeY(x + rx, y, z), // goren zadnolqv
        svetloeX(x + rx, y + ry, z), svetloeY(x + rx, y + ry, z), // goren zadnodensne
        svetloeX(x + rx, y + ry, z - rz), svetloeY(x + rx, y + ry, z - rz), //preden desen
        svetloeX(x + rx, y, z - rz), svetloeY(x + rx, y, z - rz) // preden levo
    );
    context.stroke()
}
function tretatazacha(x, y, z, rx, ry, rz) {
    // for (i = 0; i < brPlatformi; i++) {
    if (x < 0) {
        narisuvaiDolnaStena(x, y, z, rx, ry, rz)
        narisuvLqvaStena(x, y, z, ry, rz)
        narisuvLqvaStena(x + rx, y, z, ry, rz)
        // narisuvaiGornaStena(x, y, z, rx, rz)
    } else {
        narisuvaiDolnaStena(x, y, z, rx, ry, rz)
        narisuvLqvaStena(x + rx, y, z, ry, rz)
        narisuvLqvaStena(x, y, z, ry, rz)
        // narisuvaiGornaStena(x, y, z, rx, rz)
    }
    // }
}
// function tretatazacha2(x, y, z, rx, rz) {
//     narisuvai4ugalnik(
//         svetloeX(x, y, z), svetloeY(x, y, z), // goren zadnolqv
//         svetloeX(x + rx, y, z), svetloeY(x + rx, y, z), // goren zadnodensne
//         svetloeX(x+rx, y, z-rz), svetloeY(x+rx, y, z-rz), //preden desen
//         svetloeX(x, y, z-rz), svetloeY(x, y, z-rz) // preden levo
//     );

// }
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    // drawImage(b, 0, 0, 800, 600);
    // drawImage(kufte,svetloeX(myX,myY,myZ),svetloeY(myX,myY,myZ),svetloeZkumrazmeri(100,myZ),svetloeZkumrazmeri(100,myZ))
    context.fillStyle = "#f45f45"
    // tretatazacha(-300,300,10,11,600,9)
    for (i = 0; i < brPlatformi; i++) {
        context.fillStyle = "red"
        tretatazacha(platformaX[i], 100, platformaZ[i], 200, 50, 1)
        // tretatazacha()
    }
    // console.log(svetloeX(100, 100, 1), svetloeY(100, 100, 1), svetloeX(-100, 100, 1), svetloeY(-100, 100, 1), svetloeX(-100, 100, 3), svetloeY(-100, 100, 3), svetloeX(100, 100, 3), svetloeY(-100, 100, 3))
    // narisuvai4ugalnik(
    //     svetloeX(100, 100, 1), svetloeY(100, 100, 1),
    //     svetloeX(-100, 100, 1), svetloeY(-100, 100, 1),
    //     svetloeX(-100, 100, 3), svetloeY(-100, 100, 3),
    //     svetloeX(100, 100, 3), svetloeY(-100, 100, 3)
    // );
    context.fillStyle = "white"
    nraisuvPlatforma(-400, 100, 1, 1, 800, 1)
    drawImage(robot, myX, myY, 60, 80);
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

