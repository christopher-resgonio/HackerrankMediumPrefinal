

function reverseShuffleMerge(s) {
    // Reverse the input string (since the problem is about merging reversed A)
    const reversed = s.split('').reverse();

    // Count total occurrences of each character
    const totalCount = {};
    for (const ch of reversed) {
        totalCount[ch] = (totalCount[ch] || 0) + 1;
    }

    // Calculate how many of each character we need for A
    const needed = {};
    for (const ch in totalCount) {
        needed[ch] = totalCount[ch] / 2;
    }

    const used = {};
    const remaining = { ...totalCount };
    const result = [];

    for (const ch of reversed) {
        // Decrease remaining count
        remaining[ch]--;

        // If we don't need this char anymore, skip
        if ((used[ch] || 0) >= needed[ch]) continue;

        // While the result has chars greater than current and we can still use them later
        while (
            result.length > 0 &&
            result[result.length - 1] > ch &&
            (used[result[result.length - 1]] - 1 + remaining[result[result.length - 1]]) >= needed[result[result.length - 1]]
        ) {
            const removed = result.pop();
            used[removed]--;
        }

        result.push(ch);
        used[ch] = (used[ch] || 0) + 1;
    }

    return result.join('');
}
console.log(reverseShuffleMerge("eggegg")); // "egg"
