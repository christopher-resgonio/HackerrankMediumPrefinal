# 🎮 howManyGames Function

## 🧩 Problem Description

You are planning to buy games during a special sale.  
The first game costs `p` dollars, and after each purchase, the price of the next game decreases by `d` dollars.  
However, the price will **never drop below** a minimum price `m`.  
You have a total budget of `s` dollars.  

Your task is to determine **how many games** you can buy before running out of money.

---

## 🧠 Function Definition

```javascript
function howManyGames(p, d, m, s) {
    let count = 0;
    let totalSpent = 0;
    let currentPrice = p;

    while (totalSpent + currentPrice <= s) {
        totalSpent += currentPrice;
        count++;

        // Decrease price for next game, but not below minimum
        currentPrice = Math.max(currentPrice - d, m);
    }

    return count;
}
```

---

## ⚙️ Parameters

| Parameter | Type | Description |
|------------|------|-------------|
| `p` | `INTEGER` | Starting price of the first game |
| `d` | `INTEGER` | Decrease in price after each purchase |
| `m` | `INTEGER` | Minimum possible price for a game |
| `s` | `INTEGER` | Total amount of money available |

---

## 🧾 Return Value

- **Returns:** `INTEGER`  
  The total number of games you can buy without exceeding your budget.

---

## 💡 Example

### Input:
```javascript
p = 20
d = 3
m = 6
s = 80
```

### Output:
```
6
```

### Explanation:
Game prices:  
`20, 17, 14, 11, 8, 6, 6, 6, ...`  

- You can buy 6 games before your total spending exceeds 80.

---

## 🧪 Sample Runs

```javascript
console.log(howManyGames(20, 3, 6, 80)); // 6
console.log(howManyGames(20, 3, 6, 85)); // 7
console.log(howManyGames(100, 19, 1, 180)); // 1
console.log(howManyGames(20, 3, 6, 70)); // 5
```

---

## 🧮 Logic Summary

1. Start with the full price `p`.
2. Keep track of total spending and count of games bought.
3. After each purchase, reduce the next game’s price by `d`,  
   but ensure it doesn’t go below the minimum price `m`.
4. Stop when buying another game would exceed your total budget `s`.
5. Return the total number of games purchased.

---

## 🏁 Time Complexity

- **O(n)**, where `n` is the number of games that can be purchased.  
  (Efficient for small to medium budgets, and clear for readability.)

---

## 📚 Example Use Case

This logic is commonly used in:
- Gaming discount simulations  
- Budget allocation problems  
- HackerRank problem **“Halloween Sale”**

---

## ✨ Author
Developed for solving HackerRank-style algorithm challenges in JavaScript.
