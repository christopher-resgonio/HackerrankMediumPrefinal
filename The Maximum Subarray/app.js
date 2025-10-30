function maxSubarray(arr) {
  // --- Part 1: Maximum Contiguous Subarray Sum (Kadane's Algorithm) ---
  let currentMax = arr[0];
  let globalMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    globalMax = Math.max(globalMax, currentMax);
  }

  // --- Part 2: Maximum Non-Contiguous Subsequence Sum ---
  let positiveSum = arr.filter(x => x > 0).reduce((a, b) => a + b, 0);
  if (positiveSum === 0) positiveSum = Math.max(...arr); // if all negative

  return [globalMax, positiveSum];
}
