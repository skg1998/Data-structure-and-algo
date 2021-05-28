const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/final.txt', `the content of first and second: ${first} ${second}`, { flag: 'a' })

console.log(first, second)