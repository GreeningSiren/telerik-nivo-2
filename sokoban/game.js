// Suzdavame promenlivi
let myX, myY;
const GRID_SIZE = 10;
maze = [];
for (let i = 0; i < GRID_SIZE; i++) {
    maze[i] = [];
    for (let j = 0; j < GRID_SIZE; j++) {
        maze[i][j] = 1; // wall
    }
}
maze = [
    // 0 - pod
    // 1 - stena
    // 2 - kotiq
    // 3 - player
    // 4 - target
    // 5 - target i kotiq
    [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 0, 0, 0],
    [1, 4, 0, 2, 0, 0, 1, 0, 0, 0],
    [1, 1, 1, 0, 2, 4, 1, 0, 0, 0],
    [1, 4, 1, 1, 2, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 4, 0, 1, 1, 0, 0],
    [1, 2, 0, 5, 2, 2, 4, 1, 0, 0],
    [1, 0, 0, 0, 4, 0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
// maze = [
//     // 0 - pod
//     // 1 - stena
//     // 2 - kotiq
//     // 3 - player
//     // 4 - target
//     // 5 - target i kotiq
//     [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0, 1, 0, 0, 0],
//     [1, 4, 0, 2, 0, 0, 1, 0, 0, 0],
//     [1, 1, 1, 0, 2, 4, 1, 0, 0, 0],
//     [1, 4, 1, 1, 2, 0, 1, 0, 0, 0],
//     [1, 0, 1, 4, 4, 4, 1, 1, 0, 0],
//     [1, 2, 0, 5, 2, 2, 4, 1, 0, 0],
//     [1, 0, 0, 4, 4, 4, 0, 1, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];
let target = tryToLoad("target", "red");
let targetBox = tryToLoad("targetBox", "black");

function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 2;
    myY = 2;
}

function update() {}

function draw() {
    // Tuk naprogramirai kakvo da se risuva
    // drawImage(backField, 0, 0, 800, 600);
    // drawImage(femaleAction, myX, myY, 60, 80);
    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            if (maze[j][i] === 1) { // Stena
                drawImage(barrelGrey, i * 50, j * 50, 50, 50);
            } else if (maze[j][i] === 0) { // poda
                drawImage(paddle, i * 50, j * 50, 50, 50);
            } else if (maze[j][i] === 2) {
                drawImage(box, i * 50, j * 50, 50, 50);
            } else if (maze[j][i] === 4) { // target
                drawImage(target, i * 50, j * 50, 50, 50);
            } else if (maze[j][i] === 5) {// target s kotiq
                drawImage(targetBox, i * 50, j * 50, 50, 50);
            }
        }
    }
    drawImage(femaleAction, myX * 50, myY * 50, 50, 50);
}

function mouseup() {}

function keydown(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    // maze[myY][myX] = 0;
    // 0 - pod
    // 1 - stena
    // 2 - kotiq
    // 3 - player
    // 4 - target
    // 5 - target i kotiq
    if (key === 87 || key === 38) {  // ako key e W
        if (maze[myY - 1][myX] === 0 || maze[myY - 1][myX] === 4) {  // mini prez tezi
            myY--;
        } else if (maze[myY - 1][myX] === 2) { // inache ako e kotiq, butni q
            if (maze[myY - 2][myX] === 0) { // ako sled tova e pod davaj
                maze[myY - 2][myX] = 2;
                maze[myY - 1][myX] = 0;
                myY--;
            } else if (maze[myY - 2][myX] === 4) { // inache ako sled tova e target davaj i stani target i kotiq
                maze[myY - 2][myX] = 5;
                maze[myY - 1][myX] = 0;
                myY--;
            }
        } else if (maze[myY - 1][myX] === 5) { // ako e target i kotiq butni
            if (maze[myY - 2][myX] === 0) { // ako sledvashtoto e pod mini
                maze[myY - 2][myX] = 2;
                maze[myY - 1][myX] = 4;
                myY--;
            }else if(maze[myY-2][myX] === 4) {
                maze[myY-2][myX] = 5;
                maze[myY-1][myX] = 4;
                myY--;
            }
        }
    } else if (key === 68 || key === 39) {
        if (maze[myY][myX + 1] === 0 || maze[myY][myX + 1] === 4) {
            myX++;
        } else if (maze[myY][myX + 1] === 2) {
            if (maze[myY][myX + 2] === 0) {
                maze[myY][myX + 2] = 2;
                maze[myY][myX + 1] = 0;
                myX++;
            } else if (maze[myY][myX + 2] === 4) {
                maze[myY][myX + 2] = 5;
                maze[myY][myX + 1] = 0;
                myX++;
            }
        } else if (maze[myY][myX + 1] === 5) {
            if (maze[myY][myX + 2] === 0) {
                maze[myY][myX + 2] = 2;
                maze[myY][myX + 1] = 4;
                myX++;
            }else if(maze[myY][myX+2] === 4) {
                maze[myY][myX+2] = 5;
                maze[myY][myX+2] = 4;
                myX++;
            }
        }
    } else if (key === 83 || key === 40) {
        if (maze[myY + 1][myX] === 0 || maze[myY + 1][myX] === 4) {
            myY++;
        } else if (maze[myY + 1][myX] === 2) {
            if (maze[myY + 2][myX] === 0) {
                maze[myY + 2][myX] = 2;
                maze[myY + 1][myX] = 0;
                myY++;
            } else if (maze[myY + 2][myX] === 4) {
                maze[myY + 2][myX] = 5;
                maze[myY + 1][myX] = 0;
                myY++;
            }
        } else if (maze[myY + 1][myX] === 5) {
            if (maze[myY + 2][myX] === 0) {
                maze[myY + 2][myX] = 2;
                maze[myY + 1][myX] = 4;
                myY++;
            }else if(maze[myY+2][myX] === 4) {
                maze[myY+2][myX] = 5;
                maze[myY+1][myX] = 4;
                myY++;
            }
        }
    } else if (key === 65 || key === 37) {
        if (maze[myY][myX - 1] === 0 || maze[myY][myX - 1] === 4) {
            myX--;
        } else if (maze[myY][myX - 1] === 2) {
            if (maze[myY][myX - 2] === 0) {
                maze[myY][myX - 2] = 2;
                maze[myY][myX - 1] = 0;
                myX--;
            } else if (maze[myY][myX - 2] === 4) {
                maze[myY][myX - 2] = 5;
                maze[myY][myX - 1] = 0;
                myX--;
            }
        } else if (maze[myY][myX - 1] === 5) {
            if (maze[myY][myX - 2] === 0) {
                maze[myY][myX - 1] = 4;
                maze[myY][myX - 2] = 2;
                myX--;
            }else if(maze[myY][myX-2] === 4) {
                maze[myY][myX-2] = 5;
                maze[myY][myX-1] = 4;
                myX--;
            }
        }
    }
    // maze[myY][myX] = 3
}

