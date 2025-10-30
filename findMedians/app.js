/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
    // Step 1: Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Step 2: Find the middle index
    const mid = Math.floor(arr.length / 2);

    // Step 3: Return the middle element (since length is odd)
    return arr[mid];
}
console.log(findMedian([5, 3, 1, 2, 4])); // 3  