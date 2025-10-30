

function boardCutting(cost_y, cost_x) {
    // Sort both cost arrays in descending order
    cost_y.sort((a, b) => b - a);
    cost_x.sort((a, b) => b - a);

    let horizontalPieces = 1;
    let verticalPieces = 1;
    let i = 0, j = 0;
    const MOD = 1000000007;
    let totalCost = 0;

    // Greedy approach: always choose the highest cost first
    while (i < cost_y.length && j < cost_x.length) {
        if (cost_y[i] >= cost_x[j]) {
            totalCost = (totalCost + cost_y[i] * verticalPieces) % MOD;
            horizontalPieces++;
            i++;
        } else {
            totalCost = (totalCost + cost_x[j] * horizontalPieces) % MOD;
            verticalPieces++;
            j++;
        }
    }

    // Add remaining costs (if any)
    while (i < cost_y.length) {
        totalCost = (totalCost + cost_y[i] * verticalPieces) % MOD;
        i++;
    }

    while (j < cost_x.length) {
        totalCost = (totalCost + cost_x[j] * horizontalPieces) % MOD;
        j++;
    }

    return totalCost;
}


