function check_ToC()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
            document.getElementById("content").innerHTML = xhttp.responseText;
        }
        else
        {
            document.getElementById("content").innerHTML = xhttp.responseText;
        }
    };

    xhttp.open("GET", "/content.ajax", true);
    xhttp.send();
}

function accept_ToC()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          document.getElementById("content").innerHTML = xhttp.responseText;
        }
    };

    xhttp.open("GET", "/accept", true);
    xhttp.send();
}