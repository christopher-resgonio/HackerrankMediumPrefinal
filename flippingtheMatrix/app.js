
function flippingMatrix(matrix) {
    let n = matrix.length / 2;
    let total = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // Pick the maximum value among the 4 possible flips
            total += Math.max(
                matrix[i][j],
                matrix[i][2 * n - j - 1],
                matrix[2 * n - i - 1][j],
                matrix[2 * n - i - 1][2 * n - j - 1]
            );
        }
    }

    return total;
}
console.log(flippingMatrix([[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]])); // 414
console.log(flippingMatrix([[1, 2], [3, 4]])); // 4
