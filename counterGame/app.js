

function counterGame(n) {
    n = BigInt(n); // Use BigInt for large numbers
    let turn = 0; // 0 = Louise, 1 = Richard

    while (n > 1n) {
        if ((n & (n - 1n)) === 0n) {
            // If n is a power of 2, divide by 2
            n = n / 2n;
        } else {
            // Else subtract the largest power of 2 less than n
            let p = 1n;
            while (p * 2n < n) {
                p *= 2n;
            }
            n -= p;
        }
        turn ^= 1; // Switch turns
    }

    // If turn = 1, Louise made the last move (since we flipped at the end)
    return turn === 1 ? "Louise" : "Richard";
}
console.log(counterGame(6)); // "Richard"
console.log(counterGame(132)); // "Louise"