
function isValid(s) {
    // Step 1: Count how often each character appears
    const freq = {};
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (freq[ch]) {
            freq[ch]++;
        } else {
            freq[ch] = 1;
        }
    }

    // Step 2: Count how many characters have each frequency
    const countFreq = {};
    for (let key in freq) {
        const f = freq[key];
        if (countFreq[f]) {
            countFreq[f]++;
        } else {
            countFreq[f] = 1;
        }
    }

    const keys = Object.keys(countFreq).map(Number);

    // Case 1: All letters occur the same number of times
    if (keys.length === 1) {
        return "YES";
    }

    // Case 2: More than 2 frequency types -> invalid
    if (keys.length > 2) {
        return "NO";
    }

    // Case 3: Two different frequencies
    const f1 = keys[0];
    const f2 = keys[1];
    const c1 = countFreq[f1];
    const c2 = countFreq[f2];

    // Option A: one frequency is 1 and occurs once (remove one character)
    if ((f1 === 1 && c1 === 1) || (f2 === 1 && c2 === 1)) {
        return "YES";
    }

    // Option B: difference between frequencies is 1 and higher one occurs once
    if ((Math.abs(f1 - f2) === 1) && ((c1 === 1) || (c2 === 1))) {
        return "YES";
    }

    return "NO";
}
console.log(isValid("aabbccddeefghi")); // "NO"
console.log(isValid("aabbccddeefgg")); // "YES"
