function encryption(s) {
    s = s.replace(/\s/g, '');

    const L = s.length;
    const rows = Math.floor(Math.sqrt(L));
    const cols = Math.ceil(Math.sqrt(L));

    const numRows = (rows * cols < L) ? rows + 1 : rows;

    let result = [];
    for (let c = 0; c < cols; c++) {
        let word = '';
        for (let r = 0; r < numRows; r++) {
            let index = r * cols + c;
            if (index < L) {
                word += s[index];
            }
        }
        result.push(word);
    }

    return result.join(' ');
}
