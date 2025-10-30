

function gamingArray(arr) {
    // The idea: each player removes elements up to the maximum value.
    // Whoever makes the last move wins.

    let maxSeen = 0;
    let moves = 0;

    for (let num of arr) {
        if (num > maxSeen) {
            maxSeen = num;
            moves++;
        }
    }

    // If the number of moves is odd, Bob wins; otherwise, Andy wins
    return moves % 2 === 1 ? "BOB" : "ANDY";
}
console.log(gamingArray([5, 2, 6, 3, 4])); // "ANDY"
console.log(gamingArray([3, 1])); // "BOB"
