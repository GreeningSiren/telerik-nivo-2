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
let brKletki = 20,
	kletkaShir;
let maze = generateMaze(brKletki - 2, brKletki - 2);
let posoka = makeDvumerenMasiv(brKletki, brKletki);

function init() {
	kletkaShir = canvas.height / brKletki;
	brVragove = 3;
	vragX = [];
	vragY = [];
}
function update() { }
function draw() {
	for (let i = 0; i < brKletki; i++) {
		for (let j = 0; j < brKletki; j++) {
			if (maze[i][j] == 1) {
				drawImage(box, i * kletkaShir, j * kletkaShir, kletkaShir, kletkaShir);
			} else if (maze[i][j] == 3) {
				drawImage(
					cherry,
					i * kletkaShir,
					j * kletkaShir,
					kletkaShir,
					kletkaShir
				);
			} else {
				drawImage(
					[arrowUp, arrowRight, arrowDown, arrowLeft][posoka[i][j]],
					i * kletkaShir,
					j * kletkaShir,
					kletkaShir,
					kletkaShir
				);
			}
		}
	}
	for (let i = 0; i < brVragove; i++) {
		drawImage(
			zombie,
			vragX[i] * kletkaShir,
			vragY[i] * kletkaShir,
			kletkaShir,
			kletkaShir
		);
	}
}
function mouseup() {
	let kliknataKolona = Math.floor(mouseX / kletkaShir),
	kliknatRed = Math.floor(mouseY / kletkaShir);
	vragX.push(kliknataKolona)
	vragY.push(kliknatRed)
	// brVragove++
}
function keyup(key) { }
