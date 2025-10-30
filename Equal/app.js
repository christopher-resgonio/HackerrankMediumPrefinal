function equal(arr) {
    // Find minimum value in array
    const min = Math.min(...arr);
    let minOperations = Infinity;
    
    // Try reducing all numbers to min-4 through min
    // We don't need to try values smaller than min-4 as they would require more operations
    for (let target = min - 4; target <= min; target++) {
        let operations = 0;
        
        // Calculate operations needed for each element
        for (let num of arr) {
            let diff = num - target;
            // Count minimum coins needed (5, 2, 1)
            operations += Math.floor(diff / 5);  // Count 5s
            diff %= 5;
            operations += Math.floor(diff / 2);  // Count 2s
            diff %= 2;
            operations += diff;                  // Count 1s
        }
        
        minOperations = Math.min(minOperations, operations);
    }
    
    return minOperations;
}

// Test cases
console.log(equal([2, 2, 3, 7])); // Should output 2
console.log(equal([1, 1, 5])); // Should output 2
console.log(equal([2, 5, 5, 5, 5, 5])); // Should output 6
console.log(equal([1, 2, 3, 4])); // Should output 4
