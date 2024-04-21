// Suzdavame promenlivi
let myX, myY;
function generateMaze(rows, cols) {
    // Create a 2D array to represent the maze
    let maze = [];
    for (let i = 0; i < rows; i++) {
        maze.push(new Array(cols).fill(1)); // Fill maze with walls
    }

    // Helper function to check if a cell is within the maze bounds
    function isValidCell(row, col) {
        return row >= 0 && row < rows && col >= 0 && col < cols;
    }

    // Depth-first search function to generate the maze
    function dfs(row, col) {
        maze[row][col] = 0; // Mark the current cell as empty

        // Define the four possible directions: up, down, left, right
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        // Shuffle the directions array randomly
        directions.sort(() => Math.random() - 0.5);

        // Iterate through each direction
        for (const [dx, dy] of directions) {
            const newRow = row + 2 * dx; // Jump over one cell
            const newCol = col + 2 * dy; // Jump over one cell

            // Check if the new cell is within the maze bounds
            if (
                isValidCell(newRow, newCol) &&
                (maze[newRow][newCol] === 1 || Math.random() < 0.1)
            ) {
                // Mark the cell between the current and new cell as empty
                maze[row + dx][col + dy] = 0;
                dfs(newRow, newCol); // Recursively call dfs for the new cell
            }
        }
    }

    // Start generating the maze from the top-left corner (0, 0)
    dfs(0, 0);

    maze.unshift(new Array(cols).fill(1));
    maze.push(new Array(cols).fill(1));
    for (let i = 0; i < rows + 2; i++) {
        maze[i].unshift(1);
        maze[i].push(1);
    }
    maze[1][1] = 3;
    return maze;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let brKletki = 24
maze = generateMaze(brKletki-2, brKletki-2);

function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    console.log(maze)
}

function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myX = myX + (mouseX - myX) / 10;
    myY = myY + (mouseY - myY) / 10;
}

function draw() {
    // Tuk naprogramirai kakvo da se risuva
    // drawImage(backField, 0, 0, 800, 600);
    // drawImage(femaleAction, myX, myY, 60, 80);
    for (let i = 0; i < brKletki; i++) {
        for (let j = 0; j < brKletki; j++) {
            if (maze[i][j] === 1) {
                drawImage(barrelGrey, i * brKletki, j * brKletki, brKletki, brKletki)
            }else if(maze[i][j] === 3) {
                drawImage(femaleAction,i*brKletki, j * brKletki, brKletki, brKletki)
            }else if(maze[i][j] === 0) {
                drawImage(paddle,i*brKletki, j * brKletki, brKletki, brKletki)
            }
        }
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

