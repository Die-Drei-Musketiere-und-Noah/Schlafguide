const TexteInfo = ["Fenster","Lampe","Laptop","Kissen","Pflanze","Wand","Decke","Boden","Schrank","Matratze","Bettdecke","Bett","Tisch","Fenster Es wird eine Zimmertemperatur von etwa 16°C-21°C bei Erwachsenen empfohlen wobei eine kältere Temperatur weniger dem Schlaf schadet als eine höhere.\n Grund dafür ist, der zirkadiane Rhythmus des Menschen der am Abend die Körpertemperatur und von einer unidealen Temperatur beinflusst werden kann.","1","2","3","Zwar führt bessere Luft Qualität zu einem verbesserten Schlaf, dennoch können Pflanzen diese nicht erzeugen, weshalb man in der Nacht sein Fenster offen lassen muss um eine gute Luftqualität zu erreichen.","5","6","7","8","9","10","11","12","13"]
const TexteInfo2 = ["Musik","Hantel","Handy","Uhr","Badewanne","Schuh","Thermometer","Miclh","1","2","3","4","5","6","7","8"]

function changeinfoText(i)
{   
    var el = document.getElementById("Info1");
    var el2 = document.getElementById("Info2");
    el.textContent = TexteInfo[i];
    var file = new XMLHttpRequest();
    el2.textContent = "te2xt";
    const reader = new FileReader();
    reader.readAsDataURL(Sleeptext.txt);
    el2.textContent = text;
        
}
function changeinfoText2(i)
{   
    var el = document.getElementById("Info3");
    var el2 = document.getElementById("Info4");
        el.textContent = TexteInfo[i];
        el2.textContent =TexteInfo[i+8];
}

