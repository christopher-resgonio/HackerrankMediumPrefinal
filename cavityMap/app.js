
function cavityMap(grid) {
    const n = grid.length;
    const result = [...grid]; // Copy grid to modify later

    for (let i = 1; i < n - 1; i++) {
        let row = grid[i].split('');
        for (let j = 1; j < n - 1; j++) {
            const cell = parseInt(grid[i][j]);
            const up = parseInt(grid[i - 1][j]);
            const down = parseInt(grid[i + 1][j]);
            const left = parseInt(grid[i][j - 1]);
            const right = parseInt(grid[i][j + 1]);

            // Check if this cell is a cavity
            if (cell > up && cell > down && cell > left && cell > right) {
                row[j] = 'X';
            }
        }
        result[i] = row.join('');
    }

    return result;
}
console.log(cavityMap(["1112", "1912", "1892", "1234"]));
console.log(cavityMap(["1234", "5678", "9123", "4567"]));
