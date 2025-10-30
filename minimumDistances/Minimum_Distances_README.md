# Minimum Distances (JavaScript)

## 🧠 Problem Statement

Given an array of integers `a`, find the **minimum distance** between any pair of equal elements.  
If no such pair exists, return `-1`.

---

## 💻 Full JavaScript Solution

```javascript
function minimumDistances(a) {
    let minDistance = Infinity;
    const lastIndex = {};

    for (let i = 0; i < a.length; i++) {
        if (lastIndex[a[i]] !== undefined) {
            const distance = i - lastIndex[a[i]];
            if (distance < minDistance) {
                minDistance = distance;
            }
        }
        lastIndex[a[i]] = i;
    }

    return minDistance === Infinity ? -1 : minDistance;
}
```

---

## 🧮 Example

**Input:**
```javascript
const a = [7, 1, 3, 4, 1, 7];
console.log(minimumDistances(a));
```

**Output:**
```
3
```

**Explanation:**
- Equal pairs:
  - 7 → distance = 5
  - 1 → distance = 3  
✅ Minimum distance = 3

---

## 🧰 Step-by-Step Explanation

1. Use a hash map (`lastIndex`) to remember where each number was last seen.
2. For every element in the array:
   - If it’s been seen before, calculate the distance.
   - Update the smallest found distance.
3. Update the current index of that number in the map.
4. If no duplicates are found, return `-1`.

---

## ⚡ Efficiency

| Metric | Complexity |
|:--|:--|
| **Time Complexity** | O(n) |
| **Space Complexity** | O(n) |

This algorithm is optimal and runs efficiently even for large arrays.

---

## 🧾 Example Test Cases

| Input | Output | Explanation |
|:--|:--|:--|
| `[7, 1, 3, 4, 1, 7]` | `3` | Closest pair: (1, 1) |
| `[1, 2, 3, 4, 10]` | `-1` | No equal pairs |
| `[1, 1]` | `1` | Single pair |

---

## 🧩 Notes

- Avoid nested loops (they make it O(n²)).
- Use `Infinity` as initial min value for safe comparison.
- Return `-1` when no matching pairs exist.

---

**Author:** Cristian Ponce  
**Language:** JavaScript  
**Purpose:** HackerRank / Algorithm Practice
