const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'temp.md'), 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log(data.length);
        data.replaceAll('\r\n', '\n')
            .split('\n# ')
            .forEach((element) => {
                console.log(element.length);
                // supossed to log 11 numbers, spoiler, logs 1 lol, now 11
            });
    }
});
