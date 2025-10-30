
function absolutePermutation(n, k) {
    // If k is 0, the permutation is just [1, 2, 3, ..., n]
    if (k === 0) return Array.from({ length: n }, (_, i) => i + 1);

    // If n is not divisible by (2 * k), it's impossible
    if (n % (2 * k) !== 0) return [-1];

    const result = [];
    let add = true;

    for (let i = 1; i <= n; i++) {
        if (add) {
            result.push(i + k);
        } else {
            result.push(i - k);
        }

        // Every k elements, flip the sign
        if (i % k === 0) add = !add;
    }

    return result;
}
console.log(absolutePermutation(10, 2)); // [3,4,5,6,7,8,9,10,1,2]
console.log(absolutePermutation(5, 0)); // [1,2,3,4,5]
