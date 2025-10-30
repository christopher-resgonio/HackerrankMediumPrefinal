
function jimOrders(orders) {
    // Each order contains [orderTime, prepTime]
    // We must calculate when each customer receives their order:
    // deliveryTime = orderTime + prepTime

    // Step 1: Create an array that holds [customerIndex, deliveryTime]
    const times = orders.map((order, index) => {
        const deliveryTime = order[0] + order[1];
        return [index + 1, deliveryTime]; // +1 because customers are 1-indexed
    });

    // Step 2: Sort by deliveryTime, and by customer index if tie
    times.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0]; // Tie → smaller customer number first
        return a[1] - b[1]; // Otherwise sort by delivery time
    });

    // Step 3: Extract only the customer order sequence
    return times.map(item => item[0]);
}
console.log(jimOrders([[1, 3], [2, 3], [3, 3]])); // [1, 2, 3]

