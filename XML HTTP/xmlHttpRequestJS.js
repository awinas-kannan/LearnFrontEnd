var xmlDoc;
loadDoc();
var i = 0;
var x;



function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      xmlDoc = this.responseXML;
    }
  };
  xhttp.open("GET", "catalog.xml", true);
  xhttp.send();
}

function getCDtable() {
  var i;
  var table = "<tr><th>Title</th><th>Artist</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i < x.length; i++) {
    table += "<tr onclick='showCDDetails("+i+")' ><td>" +
      x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td></tr>";
    // table += "<tr><td>" +
    //   xmlDoc.getElementsByTagName("TITLE")[i].childNodes[0].nodeValue +
    //   "</td><td>" +
    //   xmlDoc.getElementsByTagName("ARTIST")[i].childNodes[0].nodeValue +
    //   "</td></tr>";
  }
  document.getElementById("table1").innerHTML = table;
}


function showCDDetails(i) {
 
  x = xmlDoc.getElementsByTagName("CD");
  document.getElementById("showCD").innerHTML =
    "Artist: " +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "<br>Title: " +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "<br>Year: " +
    x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
    document.getElementById("showButton").style.display='none';
}

function next() {
  if (i < x.length - 1) {
    i++;
    showCDDetails(i);
  }
}

function previous() {
  if (i > 0) {
    i--;
    showCDDetails(i);
  }
}