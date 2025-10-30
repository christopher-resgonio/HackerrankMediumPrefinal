# 🧩 HackerRank Problem: Encryption (JavaScript Solution)

## 📝 Problem Description
The goal of the **Encryption** challenge is to encode a message by arranging the characters of a string into a rectangular grid and then reading the message column by column.

You are given a string `s`. Perform the following steps:
1. Remove all spaces.
2. Determine the length `L` of the string.
3. Find the grid dimensions:
   - `rows = floor(sqrt(L))`
   - `cols = ceil(sqrt(L))`
4. Write the string in rows of length `cols`.
5. Read and concatenate the characters column by column, separating each column’s content with a space.

---

## 💡 Example

### Input
```
have a nice day
```

### Step-by-step
1. Remove spaces → `haveaniceday`  
   - `L = 12`
   - `rows = 3`, `cols = 4`
2. Write into grid:
   ```
   have
   anic
   eday
   ```
3. Read column-wise:
   ```
   hae and via ecy
   ```

### Output
```
hae and via ecy
```

---

## 💻 JavaScript Solution

```js
function encryption(s) {
    // Step 1: Remove spaces
    s = s.replace(/\s/g, '');

    // Step 2: Find grid dimensions
    const L = s.length;
    const rows = Math.floor(Math.sqrt(L));
    const cols = Math.ceil(Math.sqrt(L));
    const numRows = (rows * cols < L) ? rows + 1 : rows;

    // Step 3: Build encrypted message by reading columns
    let result = [];
    for (let c = 0; c < cols; c++) {
        let word = '';
        for (let r = 0; r < numRows; r++) {
            let index = r * cols + c;
            if (index < L) word += s[index];
        }
        result.push(word);
    }

    // Step 4: Join with spaces
    return result.join(' ');
}
```

---

## 🧠 Explanation

- **Remove spaces:** The problem requires processing only letters, no spaces.
- **Compute grid size:** Use square root of string length to define approximate grid dimensions.
- **Write in rows:** Fill the grid row by row.
- **Read by columns:** Build each word by picking characters column by column.
- **Join results:** Combine each column’s string with spaces to form the final encrypted text.

---

## 📊 Complexity Analysis
- **Time Complexity:** `O(n)` — Each character is visited once.
- **Space Complexity:** `O(n)` — For storing the grid result.

---

## 🧪 Sample Tests

| Input | Output |
|-------|---------|
| `feed the dog` | `fto ehg ee dd` |
| `have a nice day` | `hae and via ecy` |
| `chill out` | `clu hlt io` |

---

**Author:** Solution by ChatGPT 🧠  
**Language:** JavaScript  
**Platform:** HackerRank – Algorithms > Implementation > Encryption
