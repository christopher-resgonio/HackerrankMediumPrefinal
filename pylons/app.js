

function pylons(k, arr) {
    let n = arr.length;
    let count = 0;
    let i = 0;

    while (i < n) {
        // Find the farthest power plant we can place (going backward from i + k - 1)
        let pos = Math.min(i + k - 1, n - 1);
        while (pos >= i - k + 1 && pos >= 0 && arr[pos] === 0) {
            pos--;
        }

        // If no valid position found, it's impossible
        if (pos < i - k + 1 || pos < 0) {
            return -1;
        }

        count++;
        // Move i to the next uncovered city
        i = pos + k;
    }

    return count;
}

