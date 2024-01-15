(async () => {
    function objectToHTML(obj) {
        let html = '';

        function recurse(obj) {
            for (let key in obj) {
                if (
                    obj[key] === '' ||
                    (Array.isArray(obj[key]) && obj[key].length === 0) ||
                    (typeof obj[key] === 'object' && Object.keys(obj[key]).length === 0)
                )
                    continue;

                if (key === 'category') continue;
                else if (key === 'title')
                    html += `<h2 id="${obj[key]?.replaceAll(' ', '-')?.toLowerCase()}"><span>#</span> ${obj[key]}</h2>`;
                else if (key === 'description') {
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
                        if (ext === 'jpg' || ext === 'png') html += `<img data-src="${url}" class="lazyload">`;
                        else if (ext === 'mp4') {
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
                } else html += `<div id="${key}">${obj[key]}</div>`;
            }
        }

        recurse(obj);
        return html;
    }

    const importOrder = ['Important', 'Audio', 'Feed'];

    // transform into an array
    const devOptions = Array.from(await (await fetch('./dev-options.json')).json()).sort((a, b) => {
        const aIndex = importOrder.indexOf(a.category);
        const bIndex = importOrder.indexOf(b.category);

        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
        else if (aIndex !== -1) return -1;
        else if (bIndex !== -1) return 1;

        return a.category.localeCompare(b.category);
    });

    document.querySelector('main').innerHTML = objectToHTML(devOptions); // transform the object into an HTML string and append it

    // scroll to the selected card (if present)
    if (window.location.hash) document.querySelector(window.location.hash).scrollIntoView();

    document.querySelectorAll('code').forEach((codeBlock) => {
        // copy the flag on click of the code block
        codeBlock.addEventListener('click', (ev) => navigator.clipboard.writeText(ev.target.textContent));
        codeBlock.title = 'Click to copy';
    });

    document.querySelectorAll('h2').forEach((h2) =>
        h2.addEventListener('click', (ev) => {
            window.location.hash = '#' + ev.target.id;
            navigator.clipboard.writeText(window.location.href);
        })
    );
})();
