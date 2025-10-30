// Complete the getMinimumCost function below.
function getMinimumCost(k, c) {
    // Sort flower prices in descending order (most expensive first)
    c.sort((a, b) => b - a);

    let totalCost = 0;
    let purchaseCount = 0;

    // Each friend buys flowers in rounds
    for (let i = 0; i < c.length; i++) {
        // The multiplier increases after every k flowers
        const multiplier = Math.floor(i / k) + 1;
        totalCost += multiplier * c[i];
    }

    return totalCost;
}
console.log(getMinimumCost(3, [2, 5, 6])); // 13
console.log(getMinimumCost(2, [2, 5, 6])); // 15
