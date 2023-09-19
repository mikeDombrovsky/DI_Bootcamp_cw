const fs = require('fs');

const data = fs.readFileSync('info.json', 'utf-8');

fs.readFile('info.json', 'utf-8', (err, data) => {
    if(err) {
        return console.log(err);
    }
    console.log(data);
});
console.log(JSON.parse(data));


fs.writeFile('info.json', 'new content', (err, data) => {
    if (err) {
        return console.log(err);
    }
});

fs.copyFile('info.json', 'newname/json',(err, data) => {
    if(err) {
        return console.log(err);
    }
});

