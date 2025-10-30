function getWays(n, c) {
  // dp[i] = number of ways to make sum i
  const dp = new Array(n + 1).fill(0n); // use BigInt for large counts
  dp[0] = 1n;

  for (let coin of c) {
    for (let i = coin; i <= n; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[n];
}
