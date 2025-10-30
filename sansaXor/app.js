
function sansaXor(arr) {
    const n = arr.length;
    let result = 0;

    for (let i = 0; i < n; i++) {
        // Each element arr[i] appears (i + 1) * (n - i) times in all subarrays
        const count = (i + 1) * (n - i);

        // Only XOR elements that appear an odd number of times
        if (count % 2 === 1) {
            result ^= arr[i];
        }
    }

    return result;
}
console.log(sansaXor([1, 2, 3])); // 2
console.log(sansaXor([4, 5, 7, 5])); // 0
