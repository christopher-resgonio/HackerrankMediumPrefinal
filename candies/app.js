function candies(n, arr) {
    // Create an array to store candies for each child
    let candies = new Array(n).fill(1);

    // Left to right pass
    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Right to left pass
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > arr[i + 1] && candies[i] <= candies[i + 1]) {
            candies[i] = candies[i + 1] + 1;
        }
    }

    // Sum all candies
    let total = candies.reduce((a, b) => a + b, 0);

    return total;
}
