# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Frank van der Schaft

  #### Je startniveau:
  Rood

  #### Je focus:
  Surface plane
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  <a href="https://www.lego.com/nl-nl">LEGO.com</a>

  #### Screenshot(s) van de eerste pagina (small screen): 
  LEGO.com
  <img src="readme-images/thumbnail_image0.jpg" width="375px" alt="Voorpagina van LEGO.com">

  #### Screenshot(s) van de tweede pagina (small screen):
  LEGO.com 
  <img src="readme-images/voorbeeldscherm.png" width="375px" alt="Artikelpagina van LEGO.com">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  -Links op de artikelenpagina komen dubbel voor met precies dezelfde benaming; 1 voor de afbeelding en 1 voor de set naam.<br>
  -Alle buttons hebben link tags.<br>
  -Als alleen het toetsenbord wordt gebruikt om te navigeren, kan alleen de zoekbalk worden geselecteerd.<br>
  -De website is goed responsive voor mobiel en andere apparaten.<br>
  -Homepagina heeft geen h1.<br>
  -Headings van sets komen soms dubbel voor.<br>
  -Geen van de afbeeldingen hebben alt tekst.<br>
  -Video's moeten aangeklikt worden om afgespeeld te worden en kunnen gepauzeerd worden, maar er zijn geen captions of transcripts beschikbaar.<br>
  -Het is niet bij elke link duidelijk of deze inspringt binnen de pagina, een pop-up opent of naar een nieuwe pagina gaat.<br>
  -Heeft geen high-contrast of light/dark mode.<br>
  -Tekst wordt niet vergroot.<br>
  -Website heeft geen grote animaties.<br>
  -Het kleurencontrast is voldoende en maakt de tekst goed leesbaar.<br>
  

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/breakdown1.png" width="375px" alt="breakdown van de hele pagina (1)">
  <img src="readme-images/breakdown2.png" width="375px" alt="breakdown van de hele pagina (2)">
  <img src="readme-images/breakdown3.png" width="375px" alt="breakdown van de hele pagina (3)">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/breakdownschets_menu.png" width="375px" alt="breakdown van een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  HTML nog flink mee bezig, maar duidelijk wat er gedaan moet worden.
  Al goed begin met CSS gemaakt.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Frank                      | Rohit                  | Linsy       |
  | ---                        | ---                    | ---         |
  | Font krijgen               | Event card maken       | -           |
  | Artikelinformatie opmaken  | Grid of flex gebruiken | -           |
  | Buttons boven image zetten | -                      | -           |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Font downloaden van het internet en in code stoppen met @fontface
  - Artikelinformatie eerst uittekenen en dan in een grid stoppen
  - Buttons bovenop image met position: absolute

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  HTML (grootendeels) af en vormgeving van eerste pagina bijna klaar.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Frank                            | Daniel          | Jasmijn    |
  | ---                              | ---             | ---        |
  | Producten weergeven (carousel?)  | -               | -          |
  | Achtergrond image overloop       | -               | -          |
  | Dropdown knoppen uitwerking      | -               | -          |
  | SVG kleur veranderen             | -               | -          |
  | Footer flexbox links uitlijnen   | -               | -          |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Carousel kan gemaakt worden met een overflow
  - Image overloop oplossen door ze in een flexbox te zetten
  - Dropdown knoppen overzetten naar een summary tag
  - SVG niet lokaal opslaan, maar path opzoeken
  - Footer flexbox links uitlijnen door column gap weg te halen

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  #### Verbeteringen
  - HTML kan gevalideert worden (werkt niet bij LEGO.com)
  - Kan door de hele pagina heen tabben met het toetsenbord
  - Één h1 element per pagina
  - Alle images hebben relevante alt tekst

  #### Nog slecht
  - Dark mode nog niet beschikbaar
  - Links zijn niet beschrijvend
  - Geen focus states, alleen hover

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Eerste pagina bijna klaar, met uitzondering van de artikelinformatie.
  Basis van tweede pagina gemaakt.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Frank                        | Rohit                                    |  Linsy     |
  | ---                          | ---                                      | ---        |
  | Hamburger menu               | Spotify onderdeel wegklikken             | -          |
  | Pagina 2 cards               | Articles niet goed in midden uitgelijnd  | -          |
  | Teller in artikelinformatie  | -                                        | -          |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Hamburger menu uitwerken met JavaScript
  - Cards op pagina 2 in een flexbox en aparte articles
  - Teller bij artikelinformatie kan met JavaScript en telt voor Surface Plane

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/eindresultaat1.png" width="375px" alt="uitkomst pagina 1">
  <img src="readme-images/eindresultaat2.png" width="375px" alt="uitkomst pagina 2">


  ### Dit ging goed/Heb ik geleerd: 
  Ik heb geleerd hoe ik een carousel van plaatjes en tekst kan maken
  en opmaken d.m.v. flexbox/grid en overflow x. Verder heb ik veel
  kennis opgedaan in JavaScript, zoals tijdens het maken van een werkende
  teller met een min en max waarde. Ook heb ik geleerd om een video te
  embedden binnen HTML.

  <img src="readme-images/goed.png" width="375px" alt="goed">


  ### Dit was lastig/Is niet gelukt:
  Het maken van animaties voor mijn hamburger menu en summary knoppen
  waren uiteindelijk niet gelukt. Na veel trial & error is eruit gekomen
  dat ik waarschijnlijk JavaScript had moeten gebruiken ervoor en dat is
  er helaas niet van gekomen. Het vervangen van een SVG path is half
  gelukt, voor de ene SVG werkte het wel, maar precies dezelfde JS code
  werkte voor de andere SVG weer niet. Tot slotte is mijn hele dark mode
  gebroken toen ik mijn CSS van 2 naar 3 bestanden overzette. Alles werkte
  perfect totdat ik de prefers-dark-mode code over had gezet naar het
  nieuwe bestand en nu wordt deels van de code daaruit gewoon genegeerd
  door de HTML.

  <img src="readme-images/slecht.png" width="375px" alt="slecht">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. <a href="https://www.lego.com/nl-nl/product/tropical-aquarium-10366">Pagina 1</a>
  2. <a href="https://www.lego.com/nl-nl/categories/new-sets-and-products">Pagina 2</a>
  3. <a href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav_full">Hamburger menu</a>
  4. <a href="https://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box">Teller</a>
  5. <a href="/* https://css-tricks.com/css-only-carousel/ */">Carousel overflow</a>
  6. <a href="/* https://www.w3schools.com/css/css3_object-fit.asp */">Object fit</a>
  7. <a href="https://stackoverflow.com/questions/18795028/javascript-remove-li-without-removing-ul">HTML weghalen met JavaScript</a>
  8. <a href="https://chatgpt.com/">ChatGPT (Teller clamp)</a>
  9. <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY">Sticky header bij scroll</a>
  10. <a href="https://www.w3schools.com/css/css3_animations.asp">Animaties</a>
  11. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion">Reduced motion</a>
  12. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme">Dark mode</a>
  
</details>
