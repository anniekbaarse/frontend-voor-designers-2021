# Frontend voor Designers - opdracht 2: Een interactie uitwerken voor verschillende gebruikers input

Werk een functionaliteit uit die je kunt bedienen met 'click' en nog een user interactie, zoals het toetsenbord, tab, dubbel click, swipe, long press, <del>force touch</del>, of iets anders ... Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een [browser](https://en.m.wikipedia.org/wiki/List_of_web_browsers).

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Project titel
Ik heb de opdracht uitgewerkt waarbij je de instellingen van een foto-overzichtpagina mocht ontwerpen. De instellingen die ik heb toegepast zijn: afbeeldinggrootte door middel van een slider en day/night vision door middel van radio buttons.
https://anniekbaarse.github.io/frontend-voor-designers-2021/opdracht2/demo/index.html

## interface
Leg de interface uit. In de demo heb je interface design principles 04, 08 & 09 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) toegepast. Hoe heb je dat gedaan?

Design principle 4 (keep the user in control) gaat over dat de gebruiker de controle moet kunnen houden, zodat zij kunnen verwachten wat er gebeurt en niet voor verrassingen komen te staan. Ik heb dit principe toegepast, doordat alleen de gebruiker de instellingen kan aanpassen. De gebruiker kan met de slider de afbeeldinggrootte aanpassen en zoals bij sliders algemeen bekend is, is naar links vergelijkbaar met minderen en naar rechts is vergelijkbaar met meerderen. Bij de radio buttons staat erbij wat de actie zal zijn, dus hier zal de gebruiker ook niet geheel door verrast kunnen worden.

Design principle 8 (provide a natural next step) gaat over dat er een logische volgende stap is als de gebruiker een interactie met jouw ontwerp heeft gehad. Doordat ik niet echt een ontwerp heb waarbij een volgende stap van toepassing is, is dit principe ook niet heel erg van toepassing op mijn ontwerp. De logische stappen die er wel zijn, is dat de gebruiker de gedane interactie weer opnieuw kan door bijvoorbeeld de slider weer te veranderen of de keuze bij de radio button weer te veranderen.

Design principle 9 (appearance follows behavior) gaat over dat een element zich moet gedragen zoals de gebruiker verwacht dat het zou doen. Het toegepaste slider element moet er dus uitzien als een slider en duidelijk maken dat je hiermee een grootte kan aanpassen. Slider naar links is minderen, slider naar rechts is meerderen. Bij de radio buttons is het duidelijk dat er een keuze gemaakt moet worden en dat er maar 1 button tegelijkertijd geselecteerd kan worden. Deze buttons worden op meerdere sites en formulieren gebruikt, dus de gebruiker is hier zeer waarschijnlijk al bekend mee.

In de demo heb je meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) toegepast. Hoe heb je dat gedaan?

De UI events die ik heb toegepast zijn click en keypress. Ik heb de keypress specifiek op de pijltjes toetsen zitten en met de tab-toets kan de gebruiker tussen de slider en radio buttons switchen.

## code
De code bestaat uit de interactie die getriggerd wordt door de slider te veranderen of een andere radio button aan te klikken. Vervolgens zal er daar natuurlijk een actie op komen.

Een variabele met de naam color wordt opgesteld met document.body.style.backgroundColor;. hierdoor wordt de achtergrondkleur aangepast. Deze variabele staat in een functie die kijkt naar de switch die gemaakt wordt. Indien de geselecteerde kleur 'light' is, wordt de achtergrondkleur wit en wordt de functie verder afgebroken. Indien de geselecteerde kleur niet 'light' is, gaat de functie door en indien de geselecteerde kleur 'dark' is, dan wordt de achtergrondkleur zwart en wordt de functie verder afgebroken.

Een variabele met de naam ranger wordt opgesteld met document.getElementById('ranger');. Ook wordt een variabele met de naam image opgesteld met document.getElementById('image');. En tot slot nog twee variabelen met de naam width met image.width; en height met image.height; Deze variabelen worden in een functie opgenomen. In de functie staat dat de width van de image gelijk is aan de width * de waarde van de ranger / 100. Hetzelfde geldt voor de height. Deze berekening komt doordat de ranger een minimum van 1 en een maximum van 100 heeft. De standaard instelling staat op waarde 100.


