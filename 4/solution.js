const fs = require('fs');

let cards = fs.readFileSync('4/input2.txt').toString().split('\n');
let input = fs.readFileSync('4/input2.txt').toString().split('\n');
input = input.map((line) => line.split(' ').filter(word => !word.endsWith(':') && (!isNaN(parseInt(word)) || word === '|')));

function incrementScore(score) {
    if (score === 0) {
        return 1;
    } else {
        return score * 2;
    }
}

let currentCards = [];
for (let i = 0; i < input.length; i++) {
    currentCards.push(1);
}
for (let card = 0; card < input.length; card++) {
    let score = 0;
    let pipe = -1;
    for (let i = 0; i < input[card].length; i++) {
        if (input[card][i] === '|') {
            pipe = i;
            break;
        }
    }
    for (let j = pipe + 1; j < input[card].length; j++) {
        for (let i = 0; i < pipe; i++) {
            if (parseInt(input[card][i]) === parseInt(input[card][j])) {
                score++;
                break;
            }
        }
    }
    console.log(cards[card]);
    console.log(score);
    for (let i = 1; i <= score; i += 1) {
        if (currentCards[card + i] !== undefined) {
            currentCards[card + i] += currentCards[card];
        }
    }
}

let totalCards = 0;
for (let i = 0; i < currentCards.length; i++) {
    totalCards += currentCards[i];
}
console.log(totalCards);
