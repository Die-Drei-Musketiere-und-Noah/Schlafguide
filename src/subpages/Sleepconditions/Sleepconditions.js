const TexteInfo = ["Fenster","Lampe","Laptop","Kissen","Pflanze","Wand","Decke","Boden","Schrank","Matratze","Bettdecke","Bett","Tisch","0","1","2","3","4","5","6","7","8","9","10","11","12","13"]


function changeinfoText(i)
{   
    var el = document.getElementById("Info1");
    var el2 = document.getElementById("Info2");
        el.textContent = TexteInfo[i];
        el2.textContent =TexteInfo[i+14];
}