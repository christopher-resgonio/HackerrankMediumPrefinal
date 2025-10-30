
function bomberMan(n, grid) {
    const R = grid.length;
    const C = grid[0].length;

    // Convert grid into 2D array
    let bombs = grid.map(row => row.split(''));

    // Case 1: n = 1 (initial state)
    if (n === 1) return grid;

    // Case 2: even seconds -> grid full of bombs
    if (n % 2 === 0) return Array(R).fill('O'.repeat(C));

    // Helper: simulate explosion
    const explode = (bombs) => {
        const result = Array.from({ length: R }, () => Array(C).fill('O'));
        const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

        for (let i = 0; i < R; i++) {
            for (let j = 0; j < C; j++) {
                if (bombs[i][j] === 'O') {
                    result[i][j] = '.';
                    for (const [dx, dy] of dirs) {
                        const x = i + dx;
                        const y = j + dy;
                        if (x >= 0 && x < R && y >= 0 && y < C) {
                            result[x][y] = '.';
                        }
                    }
                }
            }
        }
        return result;
    };

    // Compute explosion patterns
    const firstExplosion = explode(bombs);
    const secondExplosion = explode(firstExplosion);

    // Bomberman pattern repeats every 4 seconds after t=3
    if (n % 4 === 3) return firstExplosion.map(r => r.join(''));
    else return secondExplosion.map(r => r.join(''));
}
console.log(bomberMan(3, ["...","...","..."])); // ["OOO","OOO","OOO"]
console.log(bomberMan(5, ["O..","...","..O"])); // ["...","...","..."]
