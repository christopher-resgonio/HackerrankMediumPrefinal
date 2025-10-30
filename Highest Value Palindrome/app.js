function highestValuePalindrome(s, n, k) {
    // Convert string to array for easier manipulation
    const arr = s.split('');
    // Track which positions were changed
    const changed = new Array(n).fill(false);
    
    // First pass: Make the string palindrome using minimum changes
    let changesNeeded = 0;
    for (let i = 0; i < Math.floor(n/2); i++) {
        if (arr[i] !== arr[n-1-i]) {
            changesNeeded++;
            if (changesNeeded > k) {
                return '-1';
            }
            // Make both digits the larger of the two
            if (arr[i] > arr[n-1-i]) {
                arr[n-1-i] = arr[i];
            } else {
                arr[i] = arr[n-1-i];
            }
            changed[i] = true;
        }
    }
    
    // Second pass: Use remaining changes to maximize digits
    let remainingChanges = k - changesNeeded;
    
    // Process pairs from outside in
    for (let i = 0; i < Math.floor(n/2) && remainingChanges > 0; i++) {
        if (arr[i] !== '9') {
            // If position was changed before, we need 1 change
            // If position was not changed before, we need 2 changes
            const changesRequired = (changed[i] || arr[i] !== arr[n-1-i]) ? 1 : 2;
            
            if (remainingChanges >= changesRequired) {
                arr[i] = '9';
                arr[n-1-i] = '9';
                remainingChanges -= changesRequired;
            }
        }
    }
    
    // For odd length strings, handle middle digit
    if (n % 2 === 1 && remainingChanges > 0) {
        arr[Math.floor(n/2)] = '9';
    }
    
    return arr.join('');
}

// Test cases
console.log(highestValuePalindrome('3943', 4, 1));  // Should output 3993
console.log(highestValuePalindrome('092282', 6, 3));  // Should output 992299
console.log(highestValuePalindrome('0011', 4, 1));  // Should output -1
console.log(highestValuePalindrome('12321', 5, 1));  // Should output 12921
console.log(highestValuePalindrome('12321', 5, 2));  // Should output 92929
