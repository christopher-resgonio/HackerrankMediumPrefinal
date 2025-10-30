

function matrixRotation(matrix, r) {
    const m = matrix.length;
    const n = matrix[0].length;
    const layers = Math.min(m, n) / 2;

    for (let layer = 0; layer < layers; layer++) {
        const elements = [];

        // Extract layer into array
        for (let i = layer; i < n - layer; i++) elements.push(matrix[layer][i]); // top
        for (let i = layer + 1; i < m - layer - 1; i++) elements.push(matrix[i][n - layer - 1]); // right
        for (let i = n - layer - 1; i >= layer; i--) elements.push(matrix[m - layer - 1][i]); // bottom
        for (let i = m - layer - 2; i > layer; i--) elements.push(matrix[i][layer]); // left

        // Compute rotation offset
        const len = elements.length;
        const rot = r % len;

        // Rotate elements
        const rotated = elements.slice(rot).concat(elements.slice(0, rot));

        // Put back rotated elements into matrix
        let index = 0;

        for (let i = layer; i < n - layer; i++) matrix[layer][i] = rotated[index++]; // top
        for (let i = layer + 1; i < m - layer - 1; i++) matrix[i][n - layer - 1] = rotated[index++]; // right
        for (let i = n - layer - 1; i >= layer; i--) matrix[m - layer - 1][i] = rotated[index++]; // bottom
        for (let i = m - layer - 2; i > layer; i--) matrix[i][layer] = rotated[index++]; // left
    }

    // Print rotated matrix
    for (let i = 0; i < m; i++) {
        console.log(matrix[i].join(' '));
    }
}
console.log(matrixRotation([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 2));
// Output:
// 3 4 8 12
// 2 11 10 16
// 1 7 6 15
// 5 9 13 14
