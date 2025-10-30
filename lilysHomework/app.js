function lilysHomework(arr) {
    // Create a copy of the original array for ascending and descending sort
    const n = arr.length;
    const arrAsc = [...arr];
    const arrDesc = [...arr];
    
    // Create position maps for original array
    let posMap1 = new Map();
    let posMap2 = new Map();
    
    // Store original positions
    for(let i = 0; i < n; i++) {
        posMap1.set(arr[i], i);
        posMap2.set(arr[i], i);
    }
    
    // Sort arrays for comparison
    const sortedAsc = [...arr].sort((a, b) => a - b);
    const sortedDesc = [...arr].sort((a, b) => b - a);
    
    let swapsAsc = 0;
    let swapsDesc = 0;
        
    // Count swaps needed for ascending order
    for(let i = 0; i < n; i++) {
        if(arrAsc[i] !== sortedAsc[i]) {
            let pos = posMap1.get(sortedAsc[i]);
            
            // Swap the elements
            let temp = arrAsc[i];
            arrAsc[i] = arrAsc[pos];
            arrAsc[pos] = temp;
            
            // Update position map
            posMap1.set(temp, pos);
            posMap1.set(sortedAsc[i], i);
            
            swapsAsc++;
        }
    }
    
    // Count swaps needed for descending order
    for(let i = 0; i < n; i++) {
        if(arrDesc[i] !== sortedDesc[i]) {
            let pos = posMap2.get(sortedDesc[i]);
            
            // Swap the elements
            let temp = arrDesc[i];
            arrDesc[i] = arrDesc[pos];
            arrDesc[pos] = temp;
            
            // Update position map
            posMap2.set(temp, pos);
            posMap2.set(sortedDesc[i], i);
            
            swapsDesc++;
        }
    }
    
    // Return minimum number of swaps needed
    return Math.min(swapsAsc, swapsDesc);
}

// Test cases
console.log(lilysHomework([7, 15, 12, 3])); // Should output 2
console.log(lilysHomework([2, 5, 3, 1])); // Should output 2
