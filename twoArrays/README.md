function twoArrays(k, A, B) {
    // Sort A ascending
    A.sort((a, b) => a - b);

    // Sort B descending
    B.sort((a, b) => b - a);

    // Check if each pair meets condition
    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return "NO";
        }
    }

    return "YES";
}
