function beautifulTriplets(d, arr) {
    let count = 0;

    for (let i = 0; i < arr.length - 2; i++) {
        let first = arr[i];
        let second = first + d;
        let third = first + 2 * d;

        // Check if both second and third numbers exist in the array
        if (arr.includes(second) && arr.includes(third)) {
            count++;
        }
    }

    return count;
}
