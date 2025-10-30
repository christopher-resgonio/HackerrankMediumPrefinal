# 🔠 HackerRank Problem: Bigger is Greater (JavaScript Solution)

## 🧩 Problem Description
You are given a word `w`. Your task is to find the **lexicographically next greater permutation** of the word.  
If no such word exists (meaning the given word is the highest possible permutation), print **"no answer"**.

In simple terms — you need to rearrange the letters of the given string to form the next word that would appear if all possible words were sorted alphabetically.

---

## 🧠 What is a String Permutation?

A **permutation** of a string is any possible arrangement of its characters.  
For example, for the string `"abc"`, the permutations are:
```
abc, acb, bac, bca, cab, cba
```

- The **lexicographically next permutation** means the next word in dictionary order.
- For example:
  - Next permutation of `"ab"` → `"ba"`
  - `"bb"` → no next permutation → `"no answer"`

---

## 💡 Example

### Input
```
hefg
```

### Step-by-Step Process

1. Start from the end and find the first character that is **smaller than its next**:  
   ```
   h e f g
         ↑ g > f  → pivot = f
   ```
2. Find the **smallest character greater than f** to the right → `g`
3. Swap them → `h e g f`
4. Reverse everything after `f` (no change since it’s only one letter)

### Output
```
hegf
```

---

## 💻 JavaScript Solution

```js
function biggerIsGreater(w) {
    // Step 1: Convert string to array for easy swapping
    let arr = w.split('');

    // Step 2: Find first decreasing element from the end
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    // If no such index, it's the last permutation
    if (i < 0) {
        return "no answer";
    }

    // Step 3: Find the rightmost element greater than arr[i]
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }

    // Step 4: Swap arr[i] and arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];

    // Step 5: Reverse the suffix after position i
    let right = arr.splice(i + 1);
    right.reverse();
    arr = arr.concat(right);

    // Step 6: Return the next lexicographical word
    return arr.join('');
}
```

---

## 🧪 Sample Test Cases

| Input | Output |
|-------|---------|
| `ab` | `ba` |
| `bb` | `no answer` |
| `hefg` | `hegf` |
| `dhck` | `dhkc` |
| `dkhc` | `hcdk` |

---

## 📘 Algorithm Summary

1. **Find Pivot** — the rightmost character that is smaller than the next one.
2. **Find Successor** — the smallest character larger than the pivot to its right.
3. **Swap** them.
4. **Reverse** the suffix (part after the pivot).
5. The result is the next lexicographical permutation.

---

## 📊 Complexity Analysis
- **Time Complexity:** `O(n)` — One backward and forward pass through the string.
- **Space Complexity:** `O(n)` — Due to array conversion.

---

**Author:** Solution by ChatGPT 🧠  
**Language:** JavaScript  
**Platform:** HackerRank – Algorithms > Implementation > Bigger is Greater
