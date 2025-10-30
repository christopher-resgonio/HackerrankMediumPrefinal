function chocolateFeast(n, c, m) {
    let chocolates = Math.floor(n / c); // chocolates you can buy
    let wrappers = chocolates;

    // trade wrappers for more chocolates
    while (wrappers >= m) {
        let newChocolates = Math.floor(wrappers / m);
        chocolates += newChocolates;
        wrappers = newChocolates + (wrappers % m);
    }

    return chocolates;
}
