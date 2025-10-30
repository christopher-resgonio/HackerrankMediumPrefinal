function commonChild(s1, s2) {
    // Get lengths of both strings
    const m = s1.length;
    const n = s2.length;
    
    // Create a matrix to store lengths of LCS
    // Add 1 to dimensions to handle empty string case
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    // Build the dp matrix
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                // If characters match, add 1 to the previous diagonal value
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // If characters don't match, take maximum of left or top value
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    // Return the length of longest common subsequence
    return dp[m][n];
}

// Test cases
console.log(commonChild('HARRY', 'SALLY')); // Should output 2
console.log(commonChild('AA', 'BB')); // Should output 0
console.log(commonChild('SHINCHAN', 'NOHARAAA')); // Should output 3
console.log(commonChild('ABCDEF', 'FBDAMN')); // Should output 2
