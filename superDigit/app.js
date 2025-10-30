

function superDigit(n, k) {
    // Step 1: Compute the sum of digits of n
    let sum = 0n; // use BigInt to handle very large numbers
    for (let ch of n) {
        sum += BigInt(ch);
    }

    // Step 2: Multiply the sum by k (concatenating n k times)
    sum *= BigInt(k);

    // Step 3: Compute the recursive super digit
    // A super digit is obtained by repeatedly summing the digits until one remains
    while (sum >= 10n) {
        let temp = 0n;
        for (let digit of sum.toString()) {
            temp += BigInt(digit);
        }
        sum = temp;
    }

    // Step 4: Return as integer
    return Number(sum);
}
console.log(superDigit("148", 3)); // 3
console.log(superDigit("9875", 4));