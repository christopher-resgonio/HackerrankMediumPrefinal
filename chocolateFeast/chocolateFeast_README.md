# 🍫 chocolateFeast Function

## 🧩 Problem Description

You have a certain amount of money and want to buy as many chocolates as possible.  
Each chocolate costs `c` dollars, and you can trade in `m` wrappers for one free chocolate.

You must calculate **the total number of chocolates you can eat**.

---

## 🧠 Function Definition

```javascript
function chocolateFeast(n, c, m) {
    let chocolates = Math.floor(n / c); // chocolates you can buy
    let wrappers = chocolates;

    // trade wrappers for more chocolates
    while (wrappers >= m) {
        let newChocolates = Math.floor(wrappers / m);
        chocolates += newChocolates;
        wrappers = newChocolates + (wrappers % m);
    }

    return chocolates;
}
```

---

## ⚙️ Parameters

| Parameter | Type | Description |
|------------|------|-------------|
| `n` | `INTEGER` | Total money available |
| `c` | `INTEGER` | Cost of one chocolate |
| `m` | `INTEGER` | Number of wrappers needed for one free chocolate |

---

## 🧾 Return Value

- **Returns:** `INTEGER`  
  The total number of chocolates eaten, including those from wrapper exchanges.

---

## 💡 Example 1

### Input:
```javascript
n = 10
c = 2
m = 5
```

### Output:
```
6
```

### Explanation:
- Buy 5 chocolates (10 ÷ 2 = 5)
- Trade 5 wrappers for 1 more chocolate  
✅ Total = 6 chocolates

---

## 💡 Example 2

### Input:
```javascript
n = 12
c = 4
m = 4
```

### Output:
```
3
```

### Explanation:
- Buy 3 chocolates (12 ÷ 4 = 3)
- Not enough wrappers for a free chocolate  
✅ Total = 3 chocolates

---

## 💡 Example 3

### Input:
```javascript
n = 6
c = 2
m = 2
```

### Output:
```
5
```

### Explanation:
- Buy 3 chocolates (6 ÷ 2 = 3)
- Trade 2 wrappers → 1 new chocolate (1 wrapper left)
- Now 2 wrappers → 1 new chocolate  
✅ Total = 5 chocolates

---

## 🧮 Logic Summary

1. Buy as many chocolates as possible initially.
2. Track wrappers from eaten chocolates.
3. Exchange wrappers for new chocolates as long as possible.
4. Update total chocolates and wrapper count after each exchange.
5. Return total chocolates eaten.

---

## 🏁 Time Complexity

- **O(logₘ(n))** — very efficient, only a few iterations even for large inputs.

---

## 📚 Example Use Case

This problem simulates real-world promotional exchanges, often used in:
- Retail discounts  
- Loyalty programs  
- HackerRank problem **“Chocolate Feast”**

---

## ✨ Author
Developed for solving HackerRank-style algorithm challenges in JavaScript.
