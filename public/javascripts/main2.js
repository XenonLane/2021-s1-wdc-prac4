function check_ToC()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
            document.getElementById("content").innerHTML = xhttp.responseText;
        }
        else if(this.readyState == 4 && this.status == 403)
        {
            document.getElementById("heading").style.display = "none";
            document.getElementById("ToC").style.display = "block";
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
          document.getElementById("ToC").style.display = "none";
          document.getElementById("heading").style.display = "block";
          document.getElementById("content").innerHTML = xhttp.responseText;
        }
    };

    xhttp.open("GET", "/accept", true);
    xhttp.send();
}