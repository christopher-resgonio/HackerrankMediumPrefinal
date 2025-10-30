

function minimumBribes(q) {
    let bribes = 0;
    let chaotic = false;

    for (let i = 0; i < q.length; i++) {
        // If a person has moved more than 2 positions ahead, it's chaotic
        if (q[i] - (i + 1) > 2) {
            chaotic = true;
            break;
        }

        // Count how many people bribed this person
        // Only need to check from (q[i] - 2) to current index
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                bribes++;
            }
        }
    }

    if (chaotic) {
        console.log("Too chaotic");
    } else {
        console.log(bribes);
    }
}
console.log(minimumBribes([2, 1, 5, 3, 4])); // 3
console.log(minimumBribes([2, 5, 1, 3, 4])); // "Too chaotic"
