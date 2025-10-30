
### Explanation
- Start by giving each child 1 candy: `[1, 1, 1, 1, 1]`
- Move left to right:
  - 2 > 1 → `[1, 2, 1, 1, 1]`
  - 3 > 2 → `[1, 2, 1, 2, 1]`
- Move right to left:
  - No further updates needed.
- Total candies = 1 + 2 + 1 + 2 + 1 = **7**

---

## Approach

1. **Initialize** an array `candies` of size `n` filled with 1.
2. **Left to right pass:**  
   If `arr[i] > arr[i - 1]`, give one more candy than `candies[i - 1]`.
3. **Right to left pass:**  
   If `arr[i] > arr[i + 1]` and `candies[i] <= candies[i + 1]`, increase `candies[i]` by 1 from `candies[i + 1]`.
4. **Sum all candies** using BigInt for safety when `n` is large.

---

## JavaScript Code

```js
function candies(n, arr) {
    const candies = new Array(n).fill(1);

    // Left to right
    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Right to left
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > arr[i + 1] && candies[i] <= candies[i + 1]) {
            candies[i] = candies[i + 1] + 1;
        }
    }

    // Total candies
    let total = 0n;
    for (let c of candies) {
        total += BigInt(c);
    }

    return total;
}
