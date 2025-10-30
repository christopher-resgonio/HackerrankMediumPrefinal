'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'serviceLane' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY cases
 *  3. INTEGER_ARRAY width
 */

function serviceLane(n, cases, width) {
    const result = [];
    for (let i = 0; i < cases.length; i++) {
        const [start, end] = cases[i];
        const minWidth = Math.min(...width.slice(start, end + 1));
        result.push(minWidth);
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nt = readLine().split(' ').map(Number);
    const n = nt[0];
    const t = nt[1];

    const width = readLine().split(' ').map(Number);

    const cases = [];
    for (let i = 0; i < t; i++) {
        cases.push(readLine().split(' ').map(Number));
    }

    const result = serviceLane(n, cases, width);

    ws.write(result.join('\n') + '\n');
    ws.end();
}
