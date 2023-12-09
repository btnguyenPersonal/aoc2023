const fs = require('fs');

const checkForNumber = (input, index) => {
    const nums = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];
    for (let i = 0; i < nums.length; i += 1) {
        if (input.substring(index, index + nums[i].length) === nums[i]) {
            return i + 1;
        }
    }
    return -1;
}

const getCalibrationValue = (input) => {
    let sum = 0;
    for (let i = 0; i < input.length; i += 1) {
        if (!isNaN(parseInt(input.substring(i, i + 1)))) {
            sum += 10 * parseInt(input.substring(i, i + 1));
            break;
        } else if (checkForNumber(input, i) !== -1) {
            sum += 10 * checkForNumber(input, i);
            break;
        }
    }
    for (let i = input.length - 1; i >= 0; i -= 1) {
        if (!isNaN(parseInt(input.substring(i, i + 1)))) {
            sum += parseInt(input.substring(i, i + 1));
            break;
        } else if (checkForNumber(input, i) !== -1) {
            sum += checkForNumber(input, i);
            break;
        }
    }
    console.log(input, sum);
    return sum;
}

const data = fs.readFileSync('1/input.txt').toString().split('\n');
let sum = 0;
data.forEach((line) => {
    sum += getCalibrationValue(line);
});
console.log(sum);
