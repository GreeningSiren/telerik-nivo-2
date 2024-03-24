// Копнато от чадджипити
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
function makeDvumerenMasiv(rows, cols) {
	let dvMasiv = [];
	for (let i = 0; i < rows; i++) {
		dvMasiv[i] = [];
		for (let j = 0; j < cols; j++) {
			dvMasiv[i][j] = randomInteger(4);
		}
	}
	return dvMasiv;
}
function makeDvumerenMasivOtMinusEdinici(rows, cols) {
	let dvMasiv = [];
	for (let i = 0; i < rows; i++) {
		dvMasiv[i] = [];
		for (let j = 0; j < cols; j++) {
			dvMasiv[i][j] = -1;
		}
	}
	return dvMasiv;
}
let brKletki = 20,
	kletkaShir;
let maze = generateMaze(brKletki - 2, brKletki - 2);
let posoka = makeDvumerenMasiv(brKletki, brKletki);

function init() {
	kletkaShir = canvas.height / brKletki;
	brVragove = 0;
	vragX = [];
	vragY = [];
	updeit = 0
	// BFS_Step() 
	// Напълва растояниеДо с числа :) //
	while (granichniKoloni.length > 0) {
		BFS_Step();
		// updateStrelki();
	}
	updateStrelki();
	posoka[1][1]= -1
}

function updateStrelki() {
    for (let i = 0; i < brKletki; i++) {
        for (let j = 0; j < brKletki; j++) {
            if (maze[i][j] == 0 /*&& razstoqnieDo[i][j] != -1*/) {
                // console.log("vlqzoh v na majkati updeutStrekjute")
                if (razstoqnieDo[i][j + 1] + 1  == razstoqnieDo[i][j]) {
                    // console.log("promenih ", posoka[i][j]);
                    // console.log(razstoqnieDo[i][j])
                    posoka[i][j] = 2;
                    // console.log("na ", posoka[i][j]);
                } else if (razstoqnieDo[i - 1][j] + 1  == razstoqnieDo[i][j]) {
                    posoka[i][j] = 3;
                } else if (razstoqnieDo[i][j - 1] + 1 == razstoqnieDo[i][j]) {
                    posoka[i][j] = 0;
                } else if (razstoqnieDo[i + 1][j] + 1  == razstoqnieDo[i][j]) {
                    posoka[i][j] = 1;
                }
            }
        }
    }
}
function update() {
	updeit++
	if (updeit % 50 == 0) {
		for (let i = 0; i < brVragove; i++) {
			// console.log(vragX[i], vragY[i])
			if (posoka[vragX[i]][vragY[i]] == 0) {
				vragY[i] -= 1
			} else if (posoka[vragX[i]][vragY[i]] == 1) {
				vragX[i] += 1
			} else if (posoka[vragX[i]][vragY[i]] == 2) {
				vragY[i] += 1
			} else if (posoka[vragX[i]][vragY[i]] == 3) {
				vragX[i] -= 1
			}
		}

	}
}
function draw() {
	for (let i = 0; i < brKletki; i++) {
		for (let j = 0; j < brKletki; j++) {
			if (maze[i][j] == 1) {
				drawImage(box, i * kletkaShir, j * kletkaShir, kletkaShir, kletkaShir);
			} else if (maze[i][j] == 3) {
				drawImage(cherry, i * kletkaShir, j * kletkaShir, kletkaShir, kletkaShir);
			} else {
				drawImage([arrowUp, arrowRight, arrowDown, arrowLeft][posoka[i][j]], i * kletkaShir, j * kletkaShir, kletkaShir, kletkaShir);
				context.font = "15px Courier New";
				context.fillText(razstoqnieDo[i][j], i * kletkaShir, j * kletkaShir);
			}
		}
	}
	for (let i = 0; i < brVragove; i++) {
		drawImage(zombie, vragX[i] * kletkaShir, vragY[i] * kletkaShir, kletkaShir, kletkaShir);
	}
}
function mouseup() {
	if (areColliding(mouseX, mouseY, 1, 1, 0, 0, 600, 600)) {
		if (maze[Math.floor(mouseX / kletkaShir)][Math.floor(mouseY / kletkaShir)] != 1) {
			let kliknataKolona = Math.floor(mouseX / kletkaShir),
				kliknatRed = Math.floor(mouseY / kletkaShir);
			vragX.push(kliknataKolona)
			vragY.push(kliknatRed)
			brVragove++
		}
	}
}
let razstoqnieDo = makeDvumerenMasivOtMinusEdinici(brKletki, brKletki);
// Избираме клетка с колона 1 и ред 1 като начална за BFS
let granichniKoloni = [1];
let granichniRedove = [1];
razstoqnieDo[1][1] = 0;

function BFS_Step() {
	// Взимаме най-първата клетка от граничните и я махам
	let tekKol = granichniKoloni.shift(),         // pop() за DFS
		tekRed = granichniRedove.shift();         // pop() за DFS

	// Ако  1. клетката нагоре от текущата не е обходена
	//      2. клетката нагоре от текущата не е стена
	if (razstoqnieDo[tekKol][tekRed - 1] < 0 && maze[tekKol][tekRed - 1] == 0) {
		// Обхождам клетката нагоре от текущата

		// Добавям горната клетка към граничните клетки
		granichniKoloni.push(tekKol);
		granichniRedove.push(tekRed - 1);

		// Смятам разстоянието до горната клетка
		razstoqnieDo[tekKol][tekRed - 1] = razstoqnieDo[tekKol][tekRed] + 1;
	}
	// Ако  1. клетката надолу от текущата не е обходена
	//      2. клетката надолу от текущата не е стена
	if (razstoqnieDo[tekKol][tekRed + 1] < 0 && maze[tekKol][tekRed + 1] == 0) {
		// Обхождам клетката надолу от текущата

		// Добавям долната клетка към граничните клетки
		granichniKoloni.push(tekKol);
		granichniRedove.push(tekRed + 1);

		// Смятам разстоянието до долната клетка
		razstoqnieDo[tekKol][tekRed + 1] = razstoqnieDo[tekKol][tekRed] + 1;
	}
	if (razstoqnieDo[tekKol - 1][tekRed] < 0 && maze[tekKol - 1][tekRed] == 0) {
		granichniKoloni.push(tekKol - 1);
		granichniRedove.push(tekRed);
		razstoqnieDo[tekKol - 1][tekRed] = razstoqnieDo[tekKol][tekRed] + 1;
	}
	if (razstoqnieDo[tekKol + 1][tekRed] < 0 && maze[tekKol + 1][tekRed] == 0) {
		granichniKoloni.push(tekKol + 1);
		granichniRedove.push(tekRed);
		razstoqnieDo[tekKol + 1][tekRed] = razstoqnieDo[tekKol][tekRed] + 1;
	}
}
