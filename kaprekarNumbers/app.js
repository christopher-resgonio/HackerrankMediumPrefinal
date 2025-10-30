function kaprekarNumbers(p, q) {
    let result = [];

    for (let i = p; i <= q; i++) {
        let sq = (i * i).toString();
        let len = i.toString().length;

        // Split the square into two parts
        let right = parseInt(sq.slice(-len)) || 0;
        let left = parseInt(sq.slice(0, sq.length - len)) || 0;

        // Check Kaprekar condition
        if (left + right === i) {
            result.push(i);
        }
    }

    // Print results
    if (result.length === 0) {
        console.log("INVALID RANGE");
    } else {
        console.log(result.join(" "));
    }
}
