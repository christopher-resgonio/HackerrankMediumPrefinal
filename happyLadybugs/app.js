
function happyLadybugs(b) {
    const counts = {};
    let hasEmpty = false;

    // Count frequency of each character
    for (const ch of b) {
        if (ch === '_') {
            hasEmpty = true;
        } else {
            counts[ch] = (counts[ch] || 0) + 1;
        }
    }

    // If any color appears only once, impossible to make happy
    for (const color in counts) {
        if (counts[color] === 1) return "NO";
    }

    // If there is an empty space, we can rearrange to make all happy
    if (hasEmpty) return "YES";

    // No empty cells: check if already happy
    for (let i = 0; i < b.length; i++) {
        const left = b[i - 1];
        const right = b[i + 1];
        if (b[i] !== left && b[i] !== right) return "NO";
    }

    return "YES";
}
console.log(happyLadybugs("RBY_YBR")); // "YES"
console.log(happyLadybugs("X_Y__X")); // "NO"
