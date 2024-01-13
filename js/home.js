(async () => {
    document.getElementById('myImg').src =
        (await (await fetch('http://wings.mrserver.ddnss.de:25505/avatar/2046659417')).json())?.link || '#';
})();
