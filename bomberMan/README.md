# The Bomberman Game (HackerRank)

## Problem Description

Bomberman plays a game on a grid. Each cell can be empty (.) or contain a bomb (O).

Rules:
1. Each bomb takes 3 seconds to detonate.
2. When a bomb explodes, it destroys itself and all adjacent cells (up, down, left, right).
3. Bomberman plants bombs in all empty cells every even second.
4. The pattern repeats after a few seconds.

You must determine the grid state after n seconds.

---

## Function Description

Function Signature:
```javascript
function bomberMan(n, grid)
