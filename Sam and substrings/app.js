function substrings(n) {
  const MOD = 1000000007;
  let total = 0;
  let f = 1;

  // Start from the last digit and move left
  for (let i = n.length - 1; i >= 0; i--) {
    const num = Number(n[i]);
    total = (total + num * f * (i + 1)) % MOD;
    f = (f * 10 + 1) % MOD;
  }

  return total;
}
