
function almostSorted(arr) {
    const n = arr.length;
    const sorted = [...arr].sort((a, b) => a - b);

    // Find indices where arr differs from sorted
    const diff = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] !== sorted[i]) diff.push(i);
    }

    // Already sorted
    if (diff.length === 0) {
        console.log("yes");
        return;
    }

    // Case 1: Swap (exactly two misplaced elements)
    if (diff.length === 2) {
        console.log("yes");
        console.log(`swap ${diff[0] + 1} ${diff[1] + 1}`);
        return;
    }

    // Case 2: Reverse a contiguous subarray
    const start = diff[0];
    const end = diff[diff.length - 1];
    const reversed = [
        ...arr.slice(0, start),
        ...arr.slice(start, end + 1).reverse(),
        ...arr.slice(end + 1)
    ];

    if (JSON.stringify(reversed) === JSON.stringify(sorted)) {
        console.log("yes");
        console.log(`reverse ${start + 1} ${end + 1}`);
        return;
    }

    // Not sortable by one swap or one reverse
    console.log("no");
}
function almostSorted(arr) {
    const n = arr.length;
    const sorted = [...arr].sort((a, b) => a - b);

    // Find indices where arr differs from sorted
    const diff = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] !== sorted[i]) diff.push(i);
    }

    // Already sorted
    if (diff.length === 0) {
        console.log("yes");
        return;
    }

    // Case 1: Swap
    if (diff.length === 2) {
        console.log("yes");
        console.log(`swap ${diff[0] + 1} ${diff[1] + 1}`);
        return;
    }

    // Case 2: Reverse
    const start = diff[0];
    const end = diff[diff.length - 1];
    const reversed = [...arr.slice(0, start), ...arr.slice(start, end + 1).reverse(), ...arr.slice(end + 1)];

    if (JSON.stringify(reversed) === JSON.stringify(sorted)) {
        console.log("yes");
        console.log(`reverse ${start + 1} ${end + 1}`);
        return;
    }

    // Not sortable by one swap or reverse
    console.log("no");
}