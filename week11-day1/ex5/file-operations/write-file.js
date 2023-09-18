const { log } = require('console');
const fs = require('fs');

const newContent = 'my ass is as nice as your ass';

fs.writeFile('output.txt', newContent, (err) => {
    if(err){
        log(err);
    }else{
        log('write complite');
    }
});
