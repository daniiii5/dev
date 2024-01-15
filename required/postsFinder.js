const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../posts');
const outputPath = path.join(__dirname, '../posts.json');

let folders = [];

fs.readdir(postsDir, (err, files) => {
    let pending = files.length;

    if (!pending) {
        finish();
        return;
    }

    files.forEach((file) => {
        const filePath = path.join(postsDir, file);

        fs.stat(filePath, (err, stat) => {
            if (stat.isDirectory()) folders.push(file);

            if (!--pending) finish();
        });
    });
});

function finish() {
    fs.writeFile(outputPath, JSON.stringify(folders, null, 4), (err) => {
        if (err) throw err;
        console.log('JSON written for ' + folders.length + ' folders');
    });
}
