function changeColour(value) {
    var color = document.body.style.backgroundColor;
    switch (value) {
        case 'light':
            color = "#FFF";
            break;
        case 'dark':
            color = "#727272";
            break;
    }
    document.body.style.backgroundColor = color;
}

// Bron: https://stackoverflow.com/questions/20102750/change-background-color-using-radio-buttons

var ranger = document.getElementById('ranger');
var image = document.getElementById('image');
var width = image.width;
var height = image.height;

ranger.onchange = function () {
    image.width = width * (ranger.value / 100);
    image.height = height * (ranger.value / 100);
}

// Bron: https://stackoverflow.com/questions/15634036/using-input-type-range-to-scale-an-image en http://jsfiddle.net/DnE83/1/
