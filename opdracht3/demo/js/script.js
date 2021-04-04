// elementen ophalen uit de html
const dog_btn = document.getElementById('dog_btn');
const dog_result = document.getElementById('dog_result');

// eventlistener toevoegen aan de button
dog_btn.addEventListener('click', getRandomDog);

// radio buttons voor achtergrondkleur
function changeColour(value) {
    // maak een variabele voor de kleur aan
    var color = document.body.style.backgroundColor;
    switch (value) {
        // als light is geselecteerd, is de achtergrondkleur lichtgrijs
        case 'light':
            color = "lightgrey";
            break;
            // als dark is geselecteerd, is de achtergrondkleur donkergrijs
        case 'dark':
            color = "#727272";
            break;
    }
    // achtergrondkleur aanpassen naar de gelecteerde kleur
    document.body.style.backgroundColor = color;
}

// random hondenafbeelding toevoegen
function getRandomDog() {
    // api ophalen
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            // als de data een .mp4 bestand is nog een keer de functie doorlopen
            if (data.url.includes('.mp4')) {
                getRandomDog();
            }
            // als de data een img is, de source van de afbeelding toevoegen aan de html om de afbeelding te weergeven
            else {
                dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
            }
        });
}


// Bron: https://www.youtube.com/watch?v=7f2HNadULOs
