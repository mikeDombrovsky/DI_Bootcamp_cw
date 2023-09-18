const { log } = require('console');
const fs = require('fs');

fs.readFile('output.txt', 'utf-8', (err, data) => {
    if(err){
        log(err);
        return;
    }
    log(data);
})