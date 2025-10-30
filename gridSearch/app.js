
function gridSearch(G, P) {
    const R = G.length;
    const r = P.length;
    const C = G[0].length;
    const c = P[0].length;

    // Loop through all possible starting points in G
    for (let i = 0; i <= R - r; i++) {
        // Find all indices where the first row of P matches inside G[i]
        let startIndex = G[i].indexOf(P[0]);
        while (startIndex !== -1) {
            // Assume we found a match
            let found = true;

            // Check each subsequent row
            for (let j = 1; j < r; j++) {
                if (G[i + j].substr(startIndex, c) !== P[j]) {
                    found = false;
                    break;
                }
            }

            if (found) return "YES";

            // Look for another match in the same row
            startIndex = G[i].indexOf(P[0], startIndex + 1);
        }
    }

    return "NO";
}
console.log(gridSearch(
    ["1234567890", "0987654321", "1111111111", "1111111111", "2222222222"],
    ["876543", "111111", "111111"])); // "YES"
console.log(gridSearch(
    ["1234567890", "0987654321", "1111111111", "1111111111", "2222222222"],
    ["1234", "4321"])); // "NO"
