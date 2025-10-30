
function insertionSort(arr) {
    return countInversions(arr, 0, arr.length - 1);
}

function countInversions(arr, left, right) {
    if (left >= right) return 0;

    const mid = Math.floor((left + right) / 2);
    let count = 0;

    count += countInversions(arr, left, mid);
    count += countInversions(arr, mid + 1, right);
    count += mergeAndCount(arr, left, mid, right);

    return count;
}

function mergeAndCount(arr, left, mid, right) {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;
    let swaps = 0;

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k++] = leftArr[i++];
        } else {
            arr[k++] = rightArr[j++];
            swaps += leftArr.length - i; // Count inversions
        }
    }

    // Copy remaining elements
    while (i < leftArr.length) arr[k++] = leftArr[i++];
    while (j < rightArr.length) arr[k++] = rightArr[j++];

    return swaps;
}
console.log(insertionSort([2, 1, 3, 1, 2])); // Output: 4
console.log(insertionSort([1, 2, 3, 4])); // Output: 0
