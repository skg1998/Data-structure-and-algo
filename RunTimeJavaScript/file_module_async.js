const { readFile, writeFile } = require('fs');

var first;
var second;
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    first = result;

})

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    second = result;
})

writeFile('./content/final_async.txt', `result: ${first} ${second}`, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result)
})