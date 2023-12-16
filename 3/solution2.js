const fs = require('fs');
const input = fs.readFileSync('3/input.txt').toString().split('\n');
let sum = 0;

function getGear(input, row, col) {
    let nums = [];
    for (let i = -1; i <= 1; i += 1) {
        for (let j = -1; j <= 1; j += 1) {
            if (!isNaN(parseInt(get(input, row + i, col + j)))) {
                let k = col + j;
                while (k >= 0) {
                    if (isNaN(parseInt(get(input, row + i, k)))) {
                        k += 1;
                        break;
                    }
                    k -= 1;
                }
                nums.push(parseInt(input[row + i].substring(k)));
                j += parseInt(input[row + i].substring(col + j)).toString().length;
            }
        }
    }
    return nums;
}

function get(input, i, j) {
    return input[i].substring(j, j + 1);
}

for (let i = 0; i < input.length; i += 1) {
    for (let j = 0; j < input[i].length; j += 1) {
        if (get(input, i, j) === '*') {
            const gearRatios = getGear(input, i, j);
            if (gearRatios.length === 2) {
                sum += gearRatios[0] * gearRatios[1];
            }
        }
    }
}

console.log(sum);
