setTimeout(getJoke,3000)

function getJoke() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (4 == req.readyState && 200 == req.status) {
            var reponse = JSON.parse(req.responseText);
            document.getElementById('response_icon_url').innerHTML = reponse.icon_url;
            document.getElementById('response_id').innerHTML = reponse.id;
            document.getElementById('response_url').innerHTML = reponse.url;
            document.getElementById('response_url').href = reponse.url;
            document.getElementById('response_text').innerHTML = reponse.value;
        }
    };
    req.open('GET', '/jokes/random', true);
    req.send();
}
