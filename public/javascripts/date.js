function load_date()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          document.getElementById("date").innerHTML = "This page was last viewed [" + xhttp.responseText + "]";
        }
    };

    xhttp.open("GET", "/last.txt", true);
    xhttp.send();
}