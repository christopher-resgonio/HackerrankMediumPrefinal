function activityNotifications(expenditure, d) {
    const count = new Array(201).fill(0);
    let notifications = 0;

    // Initialize count array for the first d days
    for (let i = 0; i < d; i++) {
        count[expenditure[i]]++;
    }

    // Helper to find median using count array
    function getMedian(count, d) {
        let prefix = 0;
        if (d % 2 === 1) {
            const mid = Math.floor(d / 2) + 1;
            for (let i = 0; i < count.length; i++) {
                prefix += count[i];
                if (prefix >= mid) return i;
            }
        } else {
            const mid1 = Math.floor(d / 2);
            const mid2 = mid1 + 1;
            let m1 = -1, m2 = -1;
            for (let i = 0; i < count.length; i++) {
                prefix += count[i];
                if (prefix >= mid1 && m1 === -1) m1 = i;
                if (prefix >= mid2) {
                    m2 = i;
                    break;
                }
            }
            return (m1 + m2) / 2;
        }
    }

    for (let i = d; i < expenditure.length; i++) {
        const median = getMedian(count, d);
        if (expenditure[i] >= 2 * median) {
            notifications++;
        }

        // Slide the window
        count[expenditure[i]]++;
        count[expenditure[i - d]]--;
    }

    return notifications;
}
console.log(activityNotifications([10, 20, 30, 40, 50], 3)); // 1
