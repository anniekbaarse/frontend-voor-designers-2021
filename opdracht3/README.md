# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data

# Project titel
Voor dit project heb ik een site gebouwd waar je random hondenafbeeldingen kan bekijken. Dit heb ik gedaan met de API van RandomDog.
https://anniekbaarse.github.io/frontend-voor-designers-2021/opdracht3/demo/index.html

## Principles of User Interface Design

## Principle 04
Design principle 04 (keep the user in control) gaat over dat de gebruiker de controle moet kunnen houden, zodat zij kunnen verwachten wat er gebeurt en niet voor verrassingen komen te staan. Ik heb dit principe toegepast, doordat alleen de gebruiker de afbeelding en de achtergrondkleur kan aanpassen. De gebruiker kan met de button een nieuwe afbeelding opvragen, wat ook op de button is aangegeven. Bij de radio buttons staat erbij wat de actie zal zijn, dus hier zal de gebruiker ook niet geheel door verrast kunnen worden.

## Principle 08
Design principle 08 (provide a natural next step) gaat over dat er een logische volgende stap is als de gebruiker een interactie met jouw ontwerp heeft gehad. Doordat ik niet echt een ontwerp heb waarbij een volgende stap van toepassing is, is dit principe ook niet heel erg van toepassing op mijn ontwerp. De logische stappen die er wel zijn, is dat de gebruiker de gedane interactie weer opnieuw kan door bijvoorbeeld de button weer te kunnen 'activeren' of de keuze bij de radio button weer te veranderen.

## Principle 09
Design principle 9 (appearance follows behavior) gaat over dat een element zich moet gedragen zoals de gebruiker verwacht dat het zou doen. Het toegepaste button element moet er dus uitzien als een button en duidelijk maken wat je hiermee kan doen. Dit geeft de informerende tekst in de button aan. Bij de radio buttons is het duidelijk dat er een keuze gemaakt moet worden en dat er maar 1 button tegelijkertijd geselecteerd kan worden. Deze buttons worden op meerdere sites en formulieren gebruikt, dus de gebruiker is hier zeer waarschijnlijk al bekend mee.

## Principle 11
Design principle 11 (strong visual hierarchies work best) gaat over de visuele hiërarchie van een ontwerp. Ik heb dit toegepast door te werken met het groeperen van items die bij elkaar horen en het groter maken van belangrijkere items. Zo heb ik de belangrijkste elementen voor de hoofdactie bij elkaar in het midden van het scherm staan, relatief groot vergeleken de radiobuttons in de rechter bovenhoek van het scherm. Tevens heeft de button (in het midden van het scherm) ook een opvallende kleur, vergeleken de rest eromheen.

## UI Events
De UI events die ik heb toegepast zijn click en keypress. Ik heb geprobeerd om de keypress specifiek te maken door op de enterknop te drukken, om daarmee een nieuwe hondenafbeelding in te laden. Helaas is dit mij niet gelukt en heb ik deze uit moeten zetten om mijn javascript niet te laten breken... De radiobuttons luisteren naast een clickevent ook naar de tabtoets en dan vervolgens de pijltjes toetsen, maar dit is standaard en heb ik helaas niet zelf geprogrammeerd.

## UI Stack
De states die ik heb toegepast zijn de: Blank state en de Ideal state.

## De Blank State
Deze state wordt toegepast door de placeholder waarin staat "Vind een hond". De placeholder waar de afbeelding gaat komen geeft aan "Random hondenafbeelding". Er wordt dus nog geen content weergegeven, doordat er nog geen data geladen is. Dit is dus de Blank State.

## De Ideal State
Deze state wordt toegepast als de gebruiker op de button heeft geklikt en er een afbeelding is ingeladen. De afbeelding wordt nu weergegeven en de gebruiker zou in principe de interactie weer opnieuw kunnen uitvoeren voor een nieuwe afbeelding.

## Code
Code van de API:
Om de data van de API terug te laten komen in de HTML is het van groot belang dat deze gelinkt wordt aan een element in de HTML. Hiervoor heb ik allereerst de betreffende elementen uit de HTML gehaald met getElementById en opgeslagen in een variabele.

Vervolgens heb ik een eventlistener op de button toegepast, indien er op deze button wordt geklikt, zal de functie getRandomDog uitgevoerd worden en wordt de date van de API opgehaald. Dit wordt gedaan met 'fetch'+url van de API. Vervolgens zal er in deze functie gecontroleerd worden of de data die ingeladen is een .mp4 bestand is of een image. Indien het een .mp4 is zal de functie nog een keer doorlopen worden, maar indien het een image is zal deze aan de HTML worden toegevoegd. Dit gebeurd door .innerHTML met daarbij de url van de img toe te voegen aan de (lege) data van het div dog_result.

Voor de radio buttons geldt exact dezelfde code als uitgelegd bij opdracht 2.
