const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'temp.md'), 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log(((data)).slice((data).length-100, (data).length).replaceAll("\`\`\`md","\"flag\":\"").replaceAll("```","\""));
        (data.replaceAll('\r\n', '\n')
            .split('\n# ')
            .forEach((element) => {
                // console.log(element);
            }))// .replaceAll("\n```md","flag\":").replaceAll("```","\"")
    }
});