function pairs(k, arr) {
    // Sort the array to optimize searching
    arr.sort((a, b) => a - b);
    
    let count = 0;
    let left = 0;
    let right = 1;
    
    // Use two pointers to find pairs
    while (right < arr.length) {
        const diff = arr[right] - arr[left];
        
        if (diff === k) {
            // Found a pair with difference k
            count++;
            right++;
        } else if (diff < k) {
            // Difference is too small, increase right pointer
            right++;
        } else {
            // Difference is too large, increase left pointer
            left++;
            // If pointers meet, move right pointer
            if (left === right) {
                right++;
            }
        }
    }
    
    return count;
}

// Test cases
console.log(pairs(1, [1, 2, 3, 4])); // Should output 3
console.log(pairs(2, [1, 5, 3, 4, 2])); // Should output 3
console.log(pairs(2, [1, 3, 5, 8, 6, 4, 2])); // Should output 5
