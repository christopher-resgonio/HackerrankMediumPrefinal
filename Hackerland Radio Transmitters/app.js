function hackerlandRadioTransmitters(x, k) {
  // Sort the house positions
  x.sort((a, b) => a - b);
  let n = x.length;
  let transmitters = 0;
  let i = 0;

  while (i < n) {
    transmitters++;

    // Step 1: find the farthest house that can be covered from x[i]
    let loc = x[i] + k;
    while (i < n && x[i] <= loc) i++;

    // Step 2: place the transmitter at the last valid house
    i--;
    loc = x[i] + k;

    // Step 3: skip all houses covered by this transmitter
    while (i < n && x[i] <= loc) i++;
  }

  return transmitters;
}
