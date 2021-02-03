/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/


/* favorieten hartje */
var favorieten = document.getElementById('favorieten');
var teller = document.getElementById('aantalDuimpjes');

function hartjeGevuld() {
    favorieten.classList.toggle('geklikt');
    // zodat hartje weer leeg wordt //
    favorieten.classList.remove('geklikt');
    // kijken of het hartje gevuld is of niet //

    if (favorieten.classList.contains('geklikt')) {
        teller.innerHTML = '+10 likes'
    } else {
        teller.innerHTML = '+9 likes'
    }
}

//function duimOmlaagGeklikt() {
//    duimOmlaag.classList.toggle('geklikt');
//    // zodat duimpje weer leeg wordt //
//    duimOmhoog.classList.remove('geklikt');
//    // kijken of het duimpje gevuld is of niet //
//
//    if (duimOmlaag.classList.contains('geklikt')) {
//        teller.innerHTML = '+8 likes'
//    } else {
//        teller.innerHTML = '+9 likes'
//    }
//}

favorieten.addEventListener('click', hartjeGevuld);


// https://stackoverflow.com/questions/48900061/toggle-heart-shaped-html-code-in-javascript
