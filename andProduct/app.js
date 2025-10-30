

function andProduct(a, b) {
    // Convert inputs to BigInt to handle large ranges safely
    let A = BigInt(a);
    let B = BigInt(b);

    // Count how many right-shifts we perform
    let shifts = 0n;

    // Shift until A and B have the same prefix
    while (A !== B) {
        A = A >> 1n;
        B = B >> 1n;
        shifts += 1n;
    }

    // Shift the common prefix back to its place
    const result = A << shifts;

    // Return as string to avoid JS number overflow when judge expects large integer
    return result.toString();
}
console.log(andProduct(12, 15)); // "12"