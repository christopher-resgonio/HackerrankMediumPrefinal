function activityNotifications(expenditure, d) {
    let notifications = 0;
    const freq = new Array(201).fill(0); // Frequency array for counting sort
    
    // Initialize frequency array for first d days
    for (let i = 0; i < d; i++) {
        freq[expenditure[i]]++;
    }
    
    // Process remaining days
    for (let i = d; i < expenditure.length; i++) {
        const median = getMedian(freq, d);
        
        // Check if notification should be sent
        if (expenditure[i] >= 2 * median) {
            notifications++;
        }
        
        // Update frequency array by removing oldest day and adding current day
        freq[expenditure[i - d]]--;
        freq[expenditure[i]]++;
    }
    
    return notifications;
}

function getMedian(freq, d) {
    // For odd number of elements
    if (d % 2 === 1) {
        let count = 0;
        const target = Math.floor(d / 2);
        
        for (let i = 0; i < freq.length; i++) {
            count += freq[i];
            if (count > target) {
                return i;
            }
        }
    }
    // For even number of elements
    else {
        let count = 0;
        const target1 = d / 2;
        const target2 = target1 - 1;
        let first = 0;
        
        for (let i = 0; i < freq.length; i++) {
            count += freq[i];
            if (first === 0 && count > target2) {
                first = i;
            }
            if (count > target1) {
                return (first + i) / 2;
            }
        }
    }
    return 0; // Default return, should never reach here with valid input
}

// Test cases
console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)); // Should output 2
console.log(activityNotifications([1, 2, 3, 4, 4], 4)); // Should output 0
console.log(activityNotifications([10, 20, 30, 40, 50], 3)); // Should output 1
