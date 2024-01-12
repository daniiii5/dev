function objectToHTML(obj) {
    let html = '';

    function recurse(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                html += `<div id="${key}">`;
                recurse(obj[key]);
                html += `</div>`;
            } else {
                html += `<div id="${key}">${obj[key]}</div>`;
            }
        }
    }

    recurse(obj);

    return html;
}

(async () => {
    const devOptions = Array.from(await (await fetch('../dev-options.json')).json()).flat(1);

    console.log(devOptions);
    document.body.innerHTML += objectToHTML(devOptions);
})();
