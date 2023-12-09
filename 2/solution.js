const fs = require('fs');

const getLowestAmountOfCubes = (game) => {
    let lowest = { red: 0, green: 0, blue: 0 };
    for (let i = 0; i < game.length; i += 1) {
        const cubes = getCubes(game[i]);
        if (cubes.red > lowest.red) {
            lowest.red = cubes.red;
        }
        if (cubes.green > lowest.green) {
            lowest.green = cubes.green;
        }
        if (cubes.blue > lowest.blue) {
            lowest.blue = cubes.blue;
        }
    }
    console.log(game);
    console.log(lowest);
    console.log(lowest.red * lowest.green * lowest.blue);
    return lowest.red * lowest.green * lowest.blue;
}

const getCubes = (round) => {
    let red = 0;
    let green = 0;
    let blue = 0;
    const subset = round.split(',');
    for (let i = 0; i < subset.length; i += 1) {
        if (subset[i].includes('red')) {
            red = parseInt(subset[i]);
        } else if (subset[i].includes('green')) {
            green = parseInt(subset[i]);
        } else if (subset[i].includes('blue')) {
            blue = parseInt(subset[i]);
        }
    }
    return { red, green, blue };
}

const isRoundPossible = (round) => {
    let red = 0;
    let green = 0;
    let blue = 0;
    const subset = round.split(',');
    for (let i = 0; i < subset.length; i += 1) {
        if (subset[i].includes('red')) {
            red = parseInt(subset[i]);
        } else if (subset[i].includes('green')) {
            green = parseInt(subset[i]);
        } else if (subset[i].includes('blue')) {
            blue = parseInt(subset[i]);
        }
    }
    return (red <= 12) && (green <= 13) && (blue <= 14);
}

let data = fs.readFileSync('2/input.txt').toString().split('\n');
data = data.map((line) => (line.split(':')[1]));
data = data.map((line) => (line.split(';')));
let sum = 0;
for (let i = 0; i < data.length; i += 1) {
    // if (data[i].every((round) => isRoundPossible(round))) {
        sum += getLowestAmountOfCubes(data[i]);
    // }
}
console.log(sum);
