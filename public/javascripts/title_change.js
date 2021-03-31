function title_change()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          document.getElementById("title").innerText = xhttp.responseText;
          document.getElementById("title").style.color = xhttp.responseText;
        }
    };

    xhttp.open("GET", "/color.txt", true);
    xhttp.send();
}