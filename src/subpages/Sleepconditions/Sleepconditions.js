const TexteInfo = ["Fenster","Lampe","Laptop","Kissen","Pflanze","Wand","Decke","Boden","Schrank","Matratze","Bettdecke","Bett","Tisch","Fenster Es wird eine Zimmertemperatur von etwa 16°C-21°C bei Erwachsenen empfohlen wobei eine kältere Temperatur weniger dem Schlaf schadet als eine höhere.\n Grund dafür ist, der zirkadiane Rhythmus des Menschen der am Abend die Körpertemperatur und von einer unidealen Temperatur beinflusst werden kann.","1","2","3","Zwar führt bessere Luft Qualität zu einem verbesserten Schlaf, dennoch können Pflanzen diese nicht erzeugen, weshalb man in der Nacht sein Fenster offen lassen muss um eine gute Luftqualität zu erreichen.","5","6","7","8","9","10","11","12","13"]


function changeinfoText(i)
{   
    var el = document.getElementById("Info1");
    var el2 = document.getElementById("Info2");
        el.textContent = TexteInfo[i];
        el2.textContent =TexteInfo[i+13];
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("imageslider");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}