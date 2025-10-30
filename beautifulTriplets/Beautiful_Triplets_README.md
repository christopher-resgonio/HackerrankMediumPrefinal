# Beautiful Triplets (JavaScript)

## 🧠 Problem Statement

Given an integer `d` and an array of integers `arr`, determine the number of **beautiful triplets** in the array.

A **beautiful triplet** is defined as a sequence `(a[i], a[j], a[k])` such that:

```
a[j] - a[i] = d
a[k] - a[j] = d
```
and `i < j < k`.

---

## 💻 JavaScript Solution (Optimized)

```javascript
function beautifulTriplets(d, arr) {
    let count = 0;
    const set = new Set(arr);

    for (let num of arr) {
        if (set.has(num + d) && set.has(num + 2 * d)) {
            count++;
        }
    }

    return count;
}
```

---

## 🧮 Example

**Input:**
```javascript
const d = 3;
const arr = [1, 2, 4, 5, 7, 8, 10];
console.log(beautifulTriplets(d, arr));
```

**Output:**
```
3
```

**Explanation:**
Beautiful triplets are:
- (1, 4, 7)
- (2, 5, 8)
- (4, 7, 10)

✅ Total = 3

---

## 🧰 Step-by-Step Solution Logic

1. Loop through each number in the array.
2. For each number `num`, check if `(num + d)` and `(num + 2*d)` exist.
3. If both exist, count one beautiful triplet.
4. Return the total count.

---

## ⚡ Efficiency

| Metric | Complexity |
|:--|:--|
| **Time Complexity** | O(n) — using `Set` lookup |
| **Space Complexity** | O(n) — storing array elements in a `Set` |

This optimized version works efficiently even for large input sizes.

---

## 🧾 Alternate Simple Version

```javascript
function beautifulTriplets(d, arr) {
    let count = 0;

    for (let i = 0; i < arr.length - 2; i++) {
        let first = arr[i];
        let second = first + d;
        let third = first + 2 * d;

        if (arr.includes(second) && arr.includes(third)) {
            count++;
        }
    }

    return count;
}
```

This version is simpler but runs in **O(n²)** time due to the use of `includes()`.

---

## 🧠 Example Test Cases

| Input | Output | Explanation |
|:--|:--|:--|
| d = 1, arr = [2, 3, 4, 5, 6] | 3 | Triplets: (2,3,4), (3,4,5), (4,5,6) |
| d = 3, arr = [1, 2, 4, 5, 7, 8, 10] | 3 | Triplets: (1,4,7), (2,5,8), (4,7,10) |
| d = 2, arr = [1, 3, 5, 7] | 2 | Triplets: (1,3,5), (3,5,7) |

---

## 🧩 Notes

- Always ensure the array is sorted before processing (HackerRank guarantees this).
- The `Set` approach ensures constant-time lookup.
- Works for both small and large datasets.

---

**Author:** Cristian Ponce  
**Language:** JavaScript  
**Purpose:** HackerRank / Algorithm Practice
