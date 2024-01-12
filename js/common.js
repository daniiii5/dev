// REMOVE LATER
if (window.location.origin.endsWith('github.io'))
    document.body.innerHTML = '<h1>This website is under construction, come back later</h1>';

document.title = window.location.pathname.split('/')[1].replaceAll('-', ' ');
