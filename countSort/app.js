function countSort(arr) {
    const n = arr.length;
    const half = Math.floor(n / 2);

    // Replace first half strings with "-"
    for (let i = 0; i < half; i++) {
        arr[i][1] = '-';
    }

    // Create buckets for each key
    const buckets = Array.from({ length: 100 }, () => []);

    // Fill the buckets
    for (let i = 0; i < n; i++) {
        const index = parseInt(arr[i][0], 10);
        buckets[index].push(arr[i][1]);
    }

    // Output flattened array
    console.log(buckets.flat().join(' '));
}

