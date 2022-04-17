# Opdracht

ScreenCast Opdracht A: https://youtu.be/pdIiE6lMTOY 

ScreenCast Opdracht B: https://youtu.be/37bfrrJC0dw

Github Pages:https://robdewilligen.github.io/

## Stap 1 Concept

Omschrijf kort jouw concept in je inleverdocument:

- Wat is jouw TLE project, en wat is daarvoor jouw concept? Hoe draagt dit bij aan Rotterdam:Duurzame Stad?
- Wat is de toegevoegde waarde van AI in jouw concept?
- Welke data heb je nodig en hoe kom je daar aan?
- Welke library / algoritme denk jij dat geschikt is voor jouw concept?
- Beschrijf de de uiteindelijke vorm (Website, app, installatie, etc).
- Beschrijf kort de eindgebruiker en de doelgroep.

___

### Ons Concept
Voor TLE 3&4 gaan ik en mijn groepje KunstStroom uitwerken.
Kunststroom is een kunstwerk wat we op de lijnbaan willen plaatsen, dit kunstwerk wekt stroom op met zonnepanelen. Deze opgewekte stroom kan vervolgens weer gebruikt worden om 's avonds ledlampjes aan te zetten (of overdag, dit is nog ter bespreking) of om overdag je telefoon op te laden. Ook zal er een afdakje zijn voor als het regent. De doelgroep waar we ons vooral op focussen zijn mannen die mee moeten met hun vriendin om te gaan shoppen. Door Kunststroom kunnen deze mensen buiten wachten en hun telefoon opladen terwijl ze wachten. Hierdoor hoeven ze niet steeds overal mee naar binnen. Ook willen we extra groen toevoegen zodat er meer biodiversiteit terugkomt naar de stad. Dit willen we gaan monitoren met Artificiele Intelligentie, de AI moet bijhouden of er meer of minder bijtjes, vlinders, etc. komen. 

### Overig
Voor dit project wil ik het onderdeel gaan maken wat d.m.v. een camera of webcam kan monitoren of de biodiversiteit toeneemt in de buurt van het kunstwerk. Ik wil hiervoor gebruik maken van ML5 met een image classifier die op een tijdstip(of periode) op de dag bij houdt hoeveel dieren er in de buurt zijn. dit wordt vervolgens weer genoteerd. De uiteindelijke vorm wordt een website waar alles ook weer terug te zien en vinden is. De eindgebruiker die het product gaat gebruiken zal de beheerder zijn van het kunstwerk. Een alternatief, is een app die weergegeven wordt op een monitor bij het kunstwerk geplaatst wordt, zodat iedereen inzicht krijgt op de verbetering die het kunstwerk boekt.
___

## Stap 2 Prototype

Naar aanleiding van stap 1 bouw je een werkend code prototype met behulp van de stof uit de lessen 2 t/m 7.
Het prototype gebruikt een van de algoritmes uit les 2 t/m 7. Dit mogen zijn:

- ML5 pose / hand / face model met webcam, met pre-trained model.
- ML5 Feature Extractor (dit is de image classifier met eigen images)
- KNN
- Decision Tree
- ML5 Neural Network
- Andere toepassing van een algoritme en data in overleg met docent

Je code staat in GitHub classroom. Je werkende prototype staat óók live online.
Je inleverdocument bevat een screencast van, en een link naar, je online prototype.
___
### Prototype
Het prototype wordt gemaakt met de image classifier met behulp van de webcam. Op een website is het beeld te zien en wordt vermeld welk dier er te zien is in een bepaalde periode. Later wil ik dit laten optellen en weergeven.
___

### Bonuspunt

Als je data van Kaggle (of andere data in een excel sheet) in je prototype gebruikt, dan heb je een scatterplot getekend om te zien welke kolommen relevant zijn.

### Bonuspunt

- Je toont de accuracy van je prototype.
- Je hebt deze accuracy verbeterd door instellingen in het algoritme of in je data bij het trainen aan te passen. Licht toe hoe je dit gedaan hebt.

___
# Opdracht B 

## Stap 3 Uitwerking

Je hebt je prototype uit stap 2 uitgewerkt tot een werkende applicatie met een gebruiksvriendelijke interface, gericht op eindgebruikers uit je doelgroep.
Je app heeft een duidelijke naam en legt uit wat de bedoeling is.
Je code staat in GitHub classroom. Je werkende eindproduct staat live online op een publieke url.

### Bonuspunt
Je hebt getest met eindgebruikers uit de doelgroep. Dit is iemand die zonder enige voorkennis jouw app kan testen. Voeg het resultaat van deze test toe aan je inleverdocument.

___
## Stap 4 Reflectie

Voorwaardelijk: de punten voor reflectie kan je alleen halen als je een werkende app online hebt staan.

Voor de reflectie pitch je jouw uitwerking van stap 3 aan je eigen TLE team. Dit doe je op eigen gelegenheid. Het doel is om feedback van je team te verzamelen.
In je inleverdocument plaats je een korte screencast van de werking van je eindproduct, en de link naar je online eindproduct. Daarnaast beantwoord je onderstaande vragen:

### Reflectie Techniek

- Heeft het gekozen algoritme / library goed gewerkt voor jouw toepassing? Zou een ander algoritme / library beter kunnen werken? Heb je dit geprobeerd?
- Heb je genoeg data kunnen verzamelen? Zou jouw applicatie beter kunnen worden als er meer of betere data is? Hoe kom je aan betere data?
- Vindt er training van een model plaats in het prototype en/of in het eindproduct? Licht dit toe.
- Heeft de data een verborgen voorkeur? Wat wordt hier mee bedoeld?
- Wat voor accuracy vind jij goed genoeg voor jouw toepassing?
- Zijn er privacy concerns in je app? Denk aan het opslaan / versturen van gevoelige data.

### Reflectie eindproduct

- Wat voor feedback heb je gekregen van je TLE team?
- Is jouw werk bruikbaar voor het eindproduct van TLE? Ga je er aan doorwerken?
Waarom wel of niet?
- Heeft AI waarde toegevoegd aan je concept, of had dit ook zonder AI gekund?
- Ben je zelf tevreden met het eindresultaat? Werkt het zo goed als je verwacht / gehoopt
had? Waarom wel of niet?
- Is je app zodanig goed dat eindgebruikers er zonder verdere instructies mee uit de
voeten kunnen? Waarom wel of niet?


### Reflectie 
Het algoritme die ik gebruikt heb heeft zeker geholpen voor dit project. Zonder zou het ook niet mogelijk zijn tenzij ik zelf een AI ervoor zou maken. 

Ook heb ik hiermee genoeg data kunnen verzamelen zodat deze opdracht gebruikt kan worden in het project van TLE.

Ik ben tevreden met de technische kant van de opdracht, maar later ga ik de opmaak nog verbeteren als ik hier een beter ontwerp voor heb. Het werkt zoals ik had gehoopt dus hij zou zo het project in kunnen. 

Voor dit project gebruik ik een pre-trained model en dus wordt het niet zelf nog getrained. Dit omdat het niet nodig is aangezien er al een erg goed model beschikbaar is. 

Het model heeft niet echt een voorkeur aangezien hij dieren herkent. Ik ben tevreden met de accuracy aangezien hij redelijk snel herkent wat er te zien is. Er wordt verder geen gebruik gemaakt van gevoelige gegevens dus hier hoef ik mij ook geen zorgen over te maken.

## Gekregen Feedback
Amy: De recognition werkt niet 100% want hij zei wesp bij een bij, maar dit veranderde wel naar bij. Wel chill dat die werkt. Maar vraagje, hoe zit het met tellen? Doet hij dit per een paar seconden of anders? Misschien nog iets om over na te denken.

Mariska: leuk dat het werkt, maar misschien kan je nog een periode maken waarin hij wel of niet meet, want nu telt hij wel erg veel. 

Wat mee te nemen voor verdere uitwerking: 
Delay maken voor het meten van het beeld, zodat hij niet vaker een dier meetelt die al geweest is.
