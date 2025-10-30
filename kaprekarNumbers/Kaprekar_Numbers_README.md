# Kaprekar Numbers Finder (JavaScript)

## 🧠 Problem Statement

Given two integers, `p` and `q`, find all the Kaprekar numbers between `p` and `q` (inclusive).
If no Kaprekar numbers exist in the range, print `"INVALID RANGE"`.

---

## 📘 What Is a Kaprekar Number?

A **Kaprekar number** is a number `n` such that:

1. Compute `n²`.
2. Split the square into two parts.
3. If the sum of the two parts equals `n`, then `n` is a Kaprekar number.

**Example:**

```
n = 45
n² = 2025
Split = 20 | 25
20 + 25 = 45 ✅
```

---

## 🧮 Algorithm Steps

1. Loop through each number from `p` to `q`.
2. Square the number and convert it to a string.
3. Split the string into two parts — right part has the same length as the original number.
4. Convert both parts to integers (default to 0 if empty).
5. If the sum equals the original number, store it.
6. After the loop, print all found numbers or `"INVALID RANGE"`.

---

## 💻 Full JavaScript Solution

```javascript
function kaprekarNumbers(p, q) {
    let result = [];

    for (let i = p; i <= q; i++) {
        let sq = (i * i).toString();
        let len = i.toString().length;

        // Split the square into two parts
        let right = parseInt(sq.slice(-len)) || 0;
        let left = parseInt(sq.slice(0, sq.length - len)) || 0;

        // Check Kaprekar condition
        if (left + right === i) {
            result.push(i);
        }
    }

    // Print results
    if (result.length === 0) {
        console.log("INVALID RANGE");
    } else {
        console.log(result.join(" "));
    }
}
```

---

## 🧾 Example Usage

```javascript
kaprekarNumbers(1, 100);
```
**Output:**
```
1 9 45 55 99
```

```javascript
kaprekarNumbers(100, 300);
```
**Output:**
```
297
```

```javascript
kaprekarNumbers(500, 600);
```
**Output:**
```
INVALID RANGE
```

---

## ⚡ Efficiency

- Time Complexity: **O(n)** — one pass through the range
- Space Complexity: **O(1)** — only stores valid numbers
- Works efficiently up to **q = 10⁶**

---

## 🧰 Notes

- Use `parseInt(... ) || 0` to avoid `NaN` issues when splitting.
- Always convert numbers to strings before slicing.
- No external libraries are needed.

---

**Author:** Cristian Ponce  
**Language:** JavaScript  
**Purpose:** HackerRank / Algorithm Practice
