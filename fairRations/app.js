
function fairRations(B) {
    let loaves = 0;

    for (let i = 0; i < B.length - 1; i++) {
        // If current person has an odd number of loaves
        if (B[i] % 2 !== 0) {
            // Give one loaf to this person and one to the next
            B[i]++;
            B[i + 1]++;
            loaves += 2;
        }
    }

    // If the last person has even loaves, it's possible
    if (B[B.length - 1] % 2 === 0) {
        return loaves.toString();
    } else {
        return "NO";
    }
}
console.log(fairRations([2, 3, 4, 5, 6])); // "4"
console.log(fairRations([1, 2])); // "NO"
