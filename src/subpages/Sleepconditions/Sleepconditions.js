const TexteInfo1 = ["Fenster","Lampe","Laptop","Pflanze","Kissen","Wand","Decke","Boden","Schrank","Matratze","Bettdecke","Bett","Tisch","Es wird eine Zimmertemperatur von etwa 16°C-21°C bei Erwachsenen empfohlen wobei eine kältere Temperatur weniger dem Schlaf schadet als eine höhere. Grund dafür ist, der zirkadiane Rhythmus des Menschen der am Abend die Körpertemperatur und von einer unidealen Temperatur beinflusst werden kann.","Licht auch wenn nur moderat, führt dazu dass der Körper wenn er schläft in Alarm Zustand wechselt, dies kann zu Übergewicht und Diabetes führen. Deshalb Licht aus.","Wie vielen bereit bekannt hindert uns das Licht von elektronischen Geräten daran einzuschlafen, weshalb Experten auch dazu raten 2 Stunden vor dem Schlaf keine Bildschirme zu benutzen.","Zwar führt bessere Luft Qualität zu einem verbesserten Schlaf, doch Pflanzen können diese nicht erzeugen, weshalb man in der Nacht sein Fenster offen lassen muss um eine gute Luftqualität zu erreichen.","Um Nackenschmerzen und Schlafqualität zu verbessern wird ein Orthopädisches Kissen empfohlen, dennoch ist der Effekt nicht sehr groß.","Wand Farben spielen keine große Rolle bei der Schlafqualität, da man sie nicht sieht wenn das Licht aus ist. Denoch können sie helfen sich vor dem Schlaf zu entspannen.","An Decken gibt es nichts zu optimieren.","An Böden kann man nichts falsch machen.","Was zum Schlafen angezogen wird sollte bestimmt werden daran wie warm der Raum wird und wie dick die Decke ist. Es wird empfohlen im Sommer semi-nackt zu sein um die Köroertemperatur besser regulieren zu können.","Nach Bewertung 23 Studien, wird eine medium Harte und selbst befüllte Matratze (nach eigenem Geschmack) als optimale Matratze bezeichnet dabei sollte Komfort eine große Rolle spielen.","Bettdecken sollten sich an die Raumtemperatur richten, dabei ist nicht nur die Dicke sondern auch das Material wichtig. Bei käteren Temperaturne wird eine Wooldecke empfohlen.","Bettgrößen unterscheiden sich für jeden, Platz genug sollte sein.In einer Studie wurde empfohlen, dass für ein Wohnkomplex mindestens Betten mit den Maßen 102cm x 222cm bereitgestellt werden sollten.","Ich bin nur ein Nachttisch man kann nicht alles optimieren."];
const TexteInfo2 = ["Uhr","Tasse","Handy","Schuhe","Hantel","Musik","Thermometer","Badewanne","Setze dir eine fester Schlafzeit, dadurch weiß dein Körper nach einer Zeit wann er in den Ruhemodus wechseln muss.","Ein Glas warme Milch mit Honig vor dem Schlafen sättigt, entspannt und hilft so zur Ruhe zu kommen,","Blaues Licht von elektronischen Geräten lässt den Körper denken, dass es noch Tag ist weshalb er weniger Schlafhomone produziert.","Viele wissen, dass Sport viele gesundheitliche Voteile bringt und Experten sagen dazu, dass ein abendlicher Spaziergang dabei hilft nachts einzuschlafen.","Jeder kennt es nach einer guten Sporteinheit am Tag schläft es sich einfach besser.","6o Beats pro Minute, dass ist die Musik die dich zum Schlafen treiben wird.","Versuche in deinem Schlaffzimmer eine Temperatur von 16°C - 22°C herzustellen, für einen langen angenhemen Schlaf.","Ein Bad mit 40°C - 43°C vor dem Schlafen hat, wissenschaftlich bewiesen, dazu geholfen besser einzuschlafen."];
const Studies =["https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3427038/","https://www.sciencedaily.com/releases/2022/03/220314154355.htm","https://pubmed.ncbi.nlm.nih.gov/31433569/","https://www.nature.com/articles/s41370-019-0175-9 ","https://www.sciencedirect.com/science/article/abs/pii/S1356689X09000459?via%3Dihub#aep-abstract-id6","a","a","a","https://pubmed.ncbi.nlm.nih.gov/22738673/","https://pubmed.ncbi.nlm.nih.gov/29073401/","https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4853167/","https://www.researchgate.net/publication/326497319_Bed_Size_Quality_Sleep_and_Occupational_Safety_An_Investigation_of_Students_at_Slovak_Universities","a","https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5446217/","a","https://onlinelibrary.wiley.com/doi/full/10.1111/ina.12254","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a" ];
curState = 0;

function changeinfoText1(i)
{   
    curState = i
    var el = document.getElementById("Info1");
    var el2 = document.getElementById("Info2");
    el.textContent = TexteInfo1[i];
    el2.textContent = TexteInfo1[i+13];
    if(Studies[i]!="a"){
        document.getElementById("link1").style.display = "block";
        document.getElementById("link1").textContent=Studies[i];
    }
    else{
        document.getElementById("link1").style.display = "none";
    }
    if(Studies[i+13]!="a"){
        document.getElementById("link2").style.display = "block";
        document.getElementById("link2").textContent=Studies[i+13];
    }   
    else{
        document.getElementById("link2").style.display = "none";
        
    }
        
}
function changeinfoText2(i)
{   
    var el = document.getElementById("Info4");
    var el2 = document.getElementById("Info5");
        el.textContent = TexteInfo2[i];
        el2.textContent =TexteInfo2[i+8];
}
function openLink(i){
    window.open(Studies[curState+i], '_blank');
}
function TimeImageEditor(){
    var today = new Date();
    var time = today.getHours()
    if(time<7 ||time>20){
        var elements = document.getElementsByClassName("day");
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
    }
    else{
        var elements = document.getElementsByClassName("night");
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
    }
}