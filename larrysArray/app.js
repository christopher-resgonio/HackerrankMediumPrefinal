
function larrysArray(A) {
    // Count inversions (number of pairs where A[i] > A[j] for i < j)
    let inversions = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] > A[j]) inversions++;
        }
    }

    // If number of inversions is even, it's sortable
    return inversions % 2 === 0 ? "YES" : "NO";
}
console.log(larrysArray([1, 6, 5, 2, 4, 3])); // "YES"
console.log(larrysArray([3, 1, 2])); // "NO"
