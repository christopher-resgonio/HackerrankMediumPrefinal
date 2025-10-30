
function beautifulPairs(A, B) {
    // Create frequency maps for both arrays
    const countA = {};
    const countB = {};

    for (let num of A) {
        countA[num] = (countA[num] || 0) + 1;
    }
    for (let num of B) {
        countB[num] = (countB[num] || 0) + 1;
    }

    // Count how many elements can be paired
    let pairs = 0;
    for (let num in countA) {
        if (countB[num]) {
            pairs += Math.min(countA[num], countB[num]);
        }
    }

    // HackerRank rule:
    // We can change exactly one element in B.
    // If we can increase the number of pairs, add 1.
    // Otherwise, subtract 1.
    if (pairs < A.length) {
        return pairs + 1;
    } else {
        return pairs - 1;
    }
}
console.log(beautifulPairs([1, 2, 3, 4], [1, 2, 3, 5])); // 4
console.log(beautifulPairs([1, 2, 3], [4, 5, 6])); // 1
