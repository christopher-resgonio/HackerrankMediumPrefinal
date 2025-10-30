function minimumDistances(a) {
    let minDistance = Infinity;
    const lastIndex = {};

    for (let i = 0; i < a.length; i++) {
        if (lastIndex[a[i]] !== undefined) {
            const distance = i - lastIndex[a[i]];
            if (distance < minDistance) {
                minDistance = distance;
            }
        }
        lastIndex[a[i]] = i;
    }

    return minDistance === Infinity ? -1 : minDistance;
}
