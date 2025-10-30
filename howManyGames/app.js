function howManyGames(p, d, m, s) {
    let count = 0;
    let totalSpent = 0;
    let currentPrice = p;

    while (totalSpent + currentPrice <= s) {
        totalSpent += currentPrice;
        count++;

        // Decrease price for next game, but not below minimum
        currentPrice = Math.max(currentPrice - d, m);
    }

    return count;
}
