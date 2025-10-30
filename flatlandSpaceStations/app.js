// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    // Sort the space station locations
    c.sort((a, b) => a - b);

    // Distance to the first and last cities
    let maxDistance = Math.max(c[0], (n - 1) - c[c.length - 1]);

    // Check gaps between consecutive space stations
    for (let i = 0; i < c.length - 1; i++) {
        const distance = Math.floor((c[i + 1] - c[i]) / 2);
        if (distance > maxDistance) {
            maxDistance = distance;
        }
    }

    return maxDistance;
}
console.log(flatlandSpaceStations(5, [0, 4])); // 2
console.log(flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]));  