# Frontend voor Designers - opdracht 1: Een Micro-interactie uitwerken en testen

Ontwerp een user interface voor een gegeven use case. Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een browser.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Project titel
Ik heb de opdracht uitgewerkt waarbij je in een verzameling films een aantal leuke films wilt kunnen bewaren om ze later te bekijken. Dit heb ik gedaan met een favorietenknop, die ook in de navigatie wordt geüpdate.

https://anniekbaarse.github.io/frontend-voor-designers-2021/opdracht1/demo/ontwerp.html

## interface
Leg de interface uit. In de demo heb je de interface design principles 04 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) toegepast. Hoe heb je dat gedaan?

Design principle 4 gaat over dat de gebruiker de controle moet kunnen houden zodat zij kunnen verwachten wat er gebeurt. Ik heb dit principe toegepast, doordat alleen de gebruiker de hartjes kan favorieten/selecteren en deselecteren.

Design principle 11 gaat over de visuele hiërarchie in het ontwerp. Ik heb dit principe toegepast, door het hartje groter en zo veel mogelijk bij de titel en afbeelding van een film te plaatsen, zodat de elementen die bij elkaar horen, bij elkaar gegroepeerd zijn. Ook heb ik in de navigatiebalk de iconen groter gemaakt, doordat de gebruiker daar de feedback krijgt van hoeveel films gefavoriet zijn en dit belangrijke informatie is. Ten slotte verandert de cursor ook bij het hoveren over het hartje heen, hierdoor wordt het voor de gebruiker nog duidelijker dat er iets gedaan kan worden.


## code
In de HTML heb ik elke film in een aparte div gestopt met daarin een afbeelding, een titel en de button voor het favorieten.

In de CSS heb ik alle content gestyled. Ik heb geprobeerd om het favorietenhartje naast de titel van een film te krijgen, maar helaas is mij dit niet gelukt..

In de JS heb ik de acties van het favoriet markeren uitgewerkt. De JavaScript wordt dus getriggerd met een eventlistener op de button doordat de gebruiker op het gebroken hartje klikt.
Vervolgens wordt er met een functie gekeken of het hartje gebroken of gevuld is en indien het hartje gebroken is, zal het met innerHTML verandert worden naar een gevuld hartje. Het aantal gefavoriete hartjes moet in de navigatiebalk ook geüpdate worden, waarbij een andere functie wordt aangeroepen.
De functie om het aantal gefavoriete hartjes in de navigatiebalk bij te werken zoekt eerst het HTML element op en zet deze in een variabele. Dan wordt er gekeken naar het aantal huidige gele hartjes en deze worden van een string omgezet naar een getal. Tot slot wordt er een nieuwe variabele aangemaakt met het bijgewerkte aantal gele hartjes, hierbij wordt het huidige aantal gele hartjes +1 of -1 gedaan, dit is afhankelijk van wat er in de vorige functie is gebeurd.
