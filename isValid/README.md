# Sherlock and the Valid String

## Problem Summary
Given a string `s`, determine if it can become a valid string by removing at most one character.

A string is **valid** if every character appears the same number of times.

---

## Approach

1. Count how many times each character appears.
2. Count how many characters share the same frequency.
3. Check the possible cases:
   - Case 1: All characters have the same frequency → valid.
   - Case 2: More than two frequency types → invalid.
   - Case 3: Exactly two frequencies:
     - If one frequency is 1 and occurs once → valid.
     - If the two frequencies differ by 1 and the higher one occurs only once → valid.
     - Otherwise → invalid.

---

## Example

### Input
