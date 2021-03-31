function contact_load()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
            document.getElementById("content").innerHTML = xhttp.responseText;
        }
    };

    xhttp.open("GET", "/contact.ajax", true);
    xhttp.send();
}

function about_load()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
            document.getElementById("content").innerHTML = xhttp.responseText;
        }
    };

    xhttp.open("GET", "/about.ajax", true);
    xhttp.send();
}

function search_load()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          document.getElementById("content").innerHTML = xhttp.responseText;
        }
    };

    xhttp.open("GET", "/search.ajax", true);
    xhttp.send();
}