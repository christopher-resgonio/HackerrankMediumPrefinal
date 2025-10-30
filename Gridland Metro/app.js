function gridlandMetro(n, m, k, track) {
    // If no tracks, return total grid size
    if (k === 0) return BigInt(n) * BigInt(m);
    
    // Create a map to store tracks for each row
    const trackMap = new Map();
    
    // Process each track
    for (let [r, c1, c2] of track) {
        if (!trackMap.has(r)) {
            trackMap.set(r, []);
        }
        trackMap.get(r).push([c1, c2]);
    }
    
    // Calculate occupied cells
    let occupiedCells = 0n;
    
    // Process each row that has tracks
    for (let [row, tracks] of trackMap) {
        // Sort tracks by start position
        tracks.sort((a, b) => a[0] - b[0]);
        
        // Merge overlapping tracks
        let mergedTracks = [tracks[0]];
        
        for (let i = 1; i < tracks.length; i++) {
            let current = tracks[i];
            let last = mergedTracks[mergedTracks.length - 1];
            
            // If current track overlaps with last merged track
            if (current[0] <= last[1]) {
                last[1] = Math.max(last[1], current[1]);
            } else {
                mergedTracks.push(current);
            }
        }
        
        // Calculate total occupied cells in this row
        let rowOccupied = 0n;
        for (let [start, end] of mergedTracks) {
            rowOccupied += BigInt(end - start + 1);
        }
        occupiedCells += rowOccupied;
    }
    
    // Total cells minus occupied cells
    return BigInt(n) * BigInt(m) - occupiedCells;
}

// Test cases
console.log(gridlandMetro(4, 4, 3, [[2, 2, 3], [3, 1, 4], [4, 4, 4]])); // Should output 9
console.log(gridlandMetro(2, 9, 3, [[2, 1, 5], [2, 2, 4], [2, 8, 8]])); // Should output 12
console.log(gridlandMetro(1, 5, 3, [[1, 1, 2], [1, 2, 4], [1, 3, 5]])); // Should output 0
