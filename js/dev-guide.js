function objectToHTML(obj) {
    let html = '';

    function recurse(obj) {
        for (let key in obj) {
            if (
                obj[key] === '' ||
                (Array.isArray(obj[key]) && obj[key].length === 0) ||
                (typeof obj[key] === 'object' && Object.keys(obj[key]).length === 0)
            ) {
                continue;
            }

            if (key === 'category') {
                html += `<div data-${key}="${obj[key]}"></div>`;
            } else if (key === 'title') {
                html += `<h2>${obj[key]}</h2>`;
            } else if (key === 'description') {
                html += `<div>`;
                obj[key].forEach((desc) => {
                    html += `<p>${desc}</p>`;
                });
                html += `</div>`;
            } else if (key === 'flags') {
                html += `<div>`;
                obj[key].forEach((flag) => {
                    html += `<code>${flag}</code>`;
                });
                html += `</div>`;
            } else if (key === 'media') {
                html += `<div>`;
                obj[key].forEach((url) => {
                    const ext = url.split('.').pop();
                    if (ext === 'jpg' || ext === 'png') {
                        html += `<img src="${url}">`;
                    } else if (ext === 'mp4') {
                        html += `<video>`;
                        html += `<source src="${url}" type="video/mp4">`;
                        html += `</video>`;
                    }
                });
                html += `</div>`;
            } else if (typeof obj[key] === 'object') {
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
    // transform into an array
    const devOptions = Array.from(
        await // fetch the json file
        (
            await fetch('../dev-options.json')
        )
            // transform into a js object
            .json()
    ).flat(1); // flat the array once (remove separation by categories)
    document.body.innerHTML += objectToHTML(devOptions); // transform the object into an HTML string and append it to the document body

    document.querySelectorAll('code').forEach((codeBlock) => {
        // copy the flag on click of the code block
        codeBlock.addEventListener('click', (ev) => navigator.clipboard.writeText(ev.target.textContent));
        codeBlock.title = 'Click to copy';
    });
})();
