const GRID_SIZE = 10
let myX, myY;
let target = tryToLoad("target", "red");
let targetBox = tryToLoad("targetBox", "black");
let zaSlagane = 1

function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    maze = []
    for (let i = 0; i < GRID_SIZE; i++) {
        maze[i] = []
        for (let j = 0; j < GRID_SIZE; j++) {
            maze[i][j] = 0
        }
    }
}

function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myX = myX + (mouseX - myX) / 10;
    myY = myY + (mouseY - myY) / 10;
}

function draw() {
    // Tuk naprogramirai kakvo da se risuva
    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            if (maze[j][i] === 1) { // Stena
                drawImage(barrelGrey, i * 50, j * 50, 50, 50);
            } else if (maze[j][i] === 0) { // poda
                drawImage(paddle, i * 50, j * 50, 50, 50);
            } else if (maze[j][i] === 2) {
                drawImage(box, i * 50, j * 50, 50, 50);
            } else if (maze[j][i] === 3) {
                drawImage(femaleAction, i * 50, j * 50, 50, 50)
            } else if (maze[j][i] === 4) { // target
                drawImage(target, i * 50, j * 50, 50, 50);
            } else if (maze[j][i] === 5) {// target s kotiq
                drawImage(targetBox, i * 50, j * 50, 50, 50);
            }
        }
    }
}

function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    if (mouseX < 500 && mouseY < 500) {
        let cellX = Math.floor(mouseX / 50)
        let cellY = Math.floor(mouseY / 50)
        console.log("Mouse clicked at", mouseX, mouseY, cellX, cellY,zaSlagane);
        for(let i=0;i<GRID_SIZE;i++) {
            for(let j=0;j<GRID_SIZE;j++) {
                if(maze[i][j] === 3 && zaSlagane === 3) {
                    maze[i][j] = 0
                }
            }
        }
        maze[cellY][cellX] = zaSlagane
    }
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    if (key === 32) {
        console.log("'" + JSON.stringify(maze) + "'")
    }
    for (let i = 0; i < 6; i++) {
        if (key === i + 48) {
            zaSlagane = i
        }
    }
}

