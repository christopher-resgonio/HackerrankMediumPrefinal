function organizingContainers(container) {
    const n = container.length;

    // Step 1: Calculate total balls per container (row sums)
    const containerCapacities = container.map(row =>
        row.reduce((a, b) => a + b, 0)
    );

    // Step 2: Calculate total balls per type (column sums)
    const typeTotals = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            typeTotals[j] += container[i][j];
        }
    }

    // Step 3: Sort both arrays
    containerCapacities.sort((a, b) => a - b);
    typeTotals.sort((a, b) => a - b);

    // Step 4: Compare if they are identical
    for (let i = 0; i < n; i++) {
        if (containerCapacities[i] !== typeTotals[i]) {
            return "Impossible";
        }
    }

    return "Possible";
}
