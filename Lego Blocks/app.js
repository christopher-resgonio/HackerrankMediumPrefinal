function legoBlocks(n, m) {
  const MOD = 1000000007n; // use BigInt for safe modular arithmetic

  // number of ways to build a single row of width i using bricks of size 1..4
  const rowWays = new Array(m + 1).fill(0n);
  rowWays[0] = 1n;
  for (let w = 1; w <= m; w++) {
    let sum = 0n;
    for (let b = 1; b <= 4; b++) {
      if (w - b >= 0) sum += rowWays[w - b];
    }
    rowWays[w] = sum % MOD;
  }

  // fast exponentiation (BigInt)
  function modPow(base, exp) {
    base = base % MOD;
    let result = 1n;
    while (exp > 0) {
      if (exp % 2n === 1n) result = (result * base) % MOD;
      base = (base * base) % MOD;
      exp = exp / 2n;
    }
    return result;
  }

  // total ways for full wall of width w and height n (without checking vertical cracks)
  const total = new Array(m + 1).fill(0n);
  for (let w = 1; w <= m; w++) total[w] = modPow(rowWays[w], BigInt(n));

  // solid[w] = number of ways to build width w with no vertical crack through full height
  const solid = new Array(m + 1).fill(0n);
  solid[0] = 0n;
  for (let w = 1; w <= m; w++) {
    let bad = 0n;
    for (let left = 1; left <= w - 1; left++) {
      // put a vertical cut after `left`, left part must be solid, right part can be any (total)
      bad = (bad + solid[left] * total[w - left]) % MOD;
    }
    solid[w] = (total[w] - bad + MOD) % MOD;
  }

  return Number(solid[m]);
}