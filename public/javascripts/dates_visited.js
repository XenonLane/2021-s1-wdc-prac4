function add_dates()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            let dates = JSON.parse(xhttp.responseText);
            let dates_length = dates.length;

            for(let i = 0; i < dates.length; i++)
            {
                let new_item = document.createElement("li");
                new_item.innerText = dates[i];
                document.getElementById("dates_list").appendChild(new_item);
            }

        }
    };

    xhttp.open("GET", "/log.json", true);
    xhttp.send();
}

setInterval(function update_dates()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            //deletes children
            while(document.getElementById("dates_list").lastChild)
            {
                document.getElementById("dates_list").lastChild.remove();
            }

            //reinstates them
            let dates = JSON.parse(xhttp.responseText);
            let dates_length = dates.length;

            for(let i = 0; i < dates.length; i++)
            {
                let new_item = document.createElement("li");
                new_item.innerText = dates[i];
                document.getElementById("dates_list").appendChild(new_item);
            }

        }
    };

    xhttp.open("GET", "/log-ro.json", true);
    xhttp.send();
}
, 10000);
