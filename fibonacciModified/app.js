/*
 * Complete the 'fibonacciModified' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER t1
 *  2. INTEGER t2
 *  3. INTEGER n
 */

function fibonacciModified(t1, t2, n) {
    // Use BigInt to handle very large numbers
    let a = BigInt(t1);
    let b = BigInt(t2);
    let c;

    for (let i = 3; i <= n; i++) {
        c = a + b * b; // T(n) = T(n-2) + (T(n-1))^2
        a = b;
        b = c;
    }

    // Return the result as a string to avoid number overflow
    return b.toString();
}
console.log(fibonacciModified(0, 1, 5)); // "5"
console.log(fibonacciModified(3, 2, 6)); // "27"
