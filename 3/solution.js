const fs = require('fs');

let g = '';

const isEnginePart = (data, i, j, len) => {
    let str = '';
    let ret = false;
    for (let row = i - 1; row <= i + 1; row += 1) {
        for (let col = j - 1; col < j + len + 1; col += 1) {
            if (data[row] !== undefined && data[row].substring(col, col + 1)) {
                // console.log(data[row].substring(col, col + 1))
                if (data[row].substring(col, col + 1) !== '\n' && data[row].substring(col, col + 1) !== '.' && isNaN(parseInt(data[row].substring(col, col + 1)))) {
                    ret = true;
                    // return true;
                }
                str += data[row].substring(col, col + 1);
            }
        }
        str += '\n';
    }
    console.log(ret + '\n' + str);
    return ret;
}

let data = fs.readFileSync('3/input.txt').toString().split('\n');
let sum = 0;
let parts = new Set();
for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data[i].length; j += 1) {
        // if (data[i - 1]) {
        //     console.log(data[i - 1].substring(j));
        // }
        // console.log(data[i].substring(j));
        // if (data[i + 1]) {
        //     console.log(data[i + 1].substring(j));
        // }
        // console.log('\n');
        if (!isNaN(parseInt(data[i].substring(j)))) {
            let len = parseInt(data[i].substring(j)).toString().length;
            if (isEnginePart(data, i, j, len)) {
                // parts.add(parseInt(data[i].substring(j))).toString();
                // console.log(data[i].substring(j));
                // console.log(parseInt(data[i].substring(j)));
                // console.log(len);
                // console.log();
                sum += Math.abs(parseInt(data[i].substring(j)));
            }
            j += len;
        // } else {
            // j += 1;
        }
    }
}
console.log(sum);
// console.log(parts);
