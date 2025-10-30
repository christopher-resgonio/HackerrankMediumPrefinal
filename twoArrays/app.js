
function twoArrays(k, A, B) {
    // Sort A in ascending order (smallest to largest)
    A.sort((a, b) => a - b);

    // Sort B in descending order (largest to smallest)
    B.sort((a, b) => b - a);

    // Check if each pair A[i] + B[i] >= k
    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return "NO"; // If any pair fails, return NO
        }
    }

    // If all pairs pass, return YES
    return "YES";
}
console.log(twoArrays(10, [2, 1, 3], [7, 8, 9])); // "YES"
console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4])); // "NO"
