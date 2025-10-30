
function surfaceArea(A) {
    const H = A.length;
    const W = A[0].length;
    let area = 0;

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            const height = A[i][j];
            if (height > 0) {
                // Top and bottom faces
                area += 2;

                // Compare with adjacent cells
                const north = i > 0 ? A[i - 1][j] : 0;
                const south = i < H - 1 ? A[i + 1][j] : 0;
                const west = j > 0 ? A[i][j - 1] : 0;
                const east = j < W - 1 ? A[i][j + 1] : 0;

                // Add visible sides
                area += Math.max(height - north, 0);
                area += Math.max(height - south, 0);
                area += Math.max(height - west, 0);
                area += Math.max(height - east, 0);
            }
        }
    }

    return area;
}
console.log(surfaceArea([[1, 2], [3, 4]])); // 34
console.log(surfaceArea([[1, 0], [0, 2]])); // 16
