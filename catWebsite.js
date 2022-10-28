fetch('https://api.thecatapi.com/v1/images/search?format=json')
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('MyCatImage').src = data[0]['url']})
    .catch((e) => alert(e));