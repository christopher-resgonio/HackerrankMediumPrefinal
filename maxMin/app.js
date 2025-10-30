
function maxMin(k, arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    let minUnfairness = Infinity;

    // Slide a window of size k through the array
    for (let i = 0; i <= arr.length - k; i++) {
        const currentUnfairness = arr[i + k - 1] - arr[i];
        if (currentUnfairness < minUnfairness) {
            minUnfairness = currentUnfairness;
        }
    }

    return minUnfairness;
}
console.log(maxMin(3, [10, 100, 300, 200, 1000, 20, 30])); // 20
console.log(maxMin(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200])); // 3
