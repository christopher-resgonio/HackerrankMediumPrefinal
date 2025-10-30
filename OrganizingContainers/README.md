# 🧩 Organizing Containers of Balls

## Problem Description
You are given a matrix named `container`, where:

- `container[i][j]` represents the number of balls of type j in container i.
- Each container can hold only one type of ball after rearranging.
- You can swap balls between containers, but you cannot destroy or create balls.

Determine whether it is possible to organize all containers so that each container contains only one type of ball.

Return:
- `"Possible"` if it can be done.
- `"Impossible"` otherwise.

---

## Example
```js
container = [
  [1, 1],
  [1, 1]
]
// Total balls per container: [2, 2]
// Total balls per type: [2, 2]
// Output: "Possible"
```

---

## ✅ JavaScript Solution
```javascript
function organizingContainers(container) {
    const n = container.length;
    const containerCapacities = container.map(row =>
        row.reduce((a, b) => a + b, 0)
    );
    const typeTotals = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            typeTotals[j] += container[i][j];
        }
    }
    containerCapacities.sort((a, b) => a - b);
    typeTotals.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        if (containerCapacities[i] !== typeTotals[i]) {
            return "Impossible";
        }
    }
    return "Possible";
}
```

---

## 🧠 Explanation (Step-by-Step)
1. Calculate total balls in each container (sum of each row).
2. Calculate total balls of each type (sum of each column).
3. Sort both totals.
4. Compare — if both arrays match, print "Possible"; else "Impossible".

---

## ⚙️ Complexity
| Type | Complexity | Explanation |
|------|-------------|-------------|
| ⏱️ Time | O(n²) | Two nested loops |
| 💾 Space | O(n) | Two arrays for totals |

---

## 🧪 Sample Test Cases
| Input | Output |
|-------|---------|
| `[[1,1],[1,1]]` | `"Possible"` |
| `[[0,2],[1,1]]` | `"Impossible"` |
| `[[1,3,1],[2,1,2],[3,3,3]]` | `"Impossible"` |
| `[[0,2,1],[1,1,1],[2,0,0]]` | `"Possible"` |

---

## 🏁 Summary
If the total number of balls per container matches the total number of balls per type after sorting, the arrangement is **Possible**.
Otherwise, it is **Impossible**.
