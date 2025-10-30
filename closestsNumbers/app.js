
function closestNumbers(arr) {
    // Step 1: Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Step 2: Find the minimum difference between adjacent numbers
    let minDiff = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        const diff = Math.abs(arr[i + 1] - arr[i]);
        if (diff < minDiff) {
            minDiff = diff;
        }
    }

    // Step 3: Collect all pairs that have the minimum difference
    const result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        const diff = Math.abs(arr[i + 1] - arr[i]);
        if (diff === minDiff) {
            result.push(arr[i], arr[i + 1]);
        }
    }

    // Step 4: Return the result array
    return result;
}
console.log(closestNumbers([4, 2, 1, 3])); // [1, 2, 2, 3, 3, 4]
console.log(closestNumbers([1, 3, 6, 10, 15])); // [1, 3]
