function biggerIsGreater(w) {
    // Step 1: Convert string to array for easier manipulation
    let arr = w.split('');

    // Step 2: Find the rightmost character that is smaller than its next character
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    // If no such character found, this is the last permutation
    if (i < 0) {
        return "no answer";
    }

    // Step 3: Find the rightmost character that is larger than arr[i]
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }

    // Step 4: Swap them
    [arr[i], arr[j]] = [arr[j], arr[i]];

    // Step 5: Reverse the suffix (everything after index i)
    let right = arr.splice(i + 1);
    right.reverse();
    arr = arr.concat(right);

    // Step 6: Return the next lexicographical word
    return arr.join('');
}
