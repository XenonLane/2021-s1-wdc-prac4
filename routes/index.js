var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//task3.1
/*retrieves last time page was visited*/
router.get('/last.txt', function(req, res, next) {
  let last_visit = Date();
  res.send(last_visit);
});


//task 3.2
/*changes colour of h1 heading on /color.html webpage*/
let count = 0;

router.get('/color.html', function(req, res, next) {

  let colour = "";

  switch (count % 4) {
    case 0:
      colour = "red";
      break;

    case 1:
      colour = "yellow";
      break;

    case 2:
      colour = "green";
      break;

    case 3:
      colour = "blue";
      break;

    default:
      //throw error
      break;
  }

  let html = `<!Doctype html>
<html lang = "en">
    <head>
        <title>Yeet</title>
        <meta charset = "UTF-8">
    </head>
    <body>
        <h1 style = "color:` + colour + `;">` + colour + `</h1>
    </body>
</html>`;

  count++;

  res.send(html);
});


//task 3.3
/*creates a list of all the dates and times the page has been logged into*/
let dates_array = [];

router.get('/log.html', function(req, res, next) {

  let date = Date();
  dates_array.push(date);
  let start_li = "<li>";
  let end_li = "</li>";
  let list = "";

  for (let i = 0; i < dates_array.length; i++) {
    list = list + start_li + dates_array[i] + end_li + "\n";
  }

  html = `<!Doctype html>
            <html lang = "en">
                <head>
                    <title>Yeet</title>
                    <meta charset = "UTF-8">
                    <link rel="stylesheet" href="/stylesheets/style.css">
                </head>
                <body>
                    <ul>
                    ` + list + `
                    </ul>
                </body>
            </html>`;

  res.send(html);
});

//task 3.4
let welcome_visited = false;

router.get('/first.html', function(req, res, next) {
  let html = "";

  if (!welcome_visited) {
    welcome_visited = true;
    html = `<!Doctype html>
            <html lang = "en">
                <head>
                    <title>Yeet</title>
                    <meta charset = "UTF-8">
                    <link rel="stylesheet" href="/stylesheets/style.css">
                </head>
                <body>
                    <h1>Welcome</h1>
                    <a href = "/main.html">Link to the main page</a>
                </body>
            </html>`;
    res.send(html);
  }
  else {
    res.redirect('/main.html');
  }
});

router.get('/main.html', function(req, res, next) {
  let html = "";

  if (!welcome_visited) {
    res.redirect('/first.html');
  }
  else {
    html = `<!Doctype html>
              <html lang = "en">
                  <head>
                      <title>Yeet</title>
                      <meta charset = "UTF-8">
                      <link rel="stylesheet" href="/stylesheets/style.css">
                  </head>
                  <body>
                      <h1>My main site</h1>
                      <p>Ba ba booey</p>
                  </body>
              </html>`;
    res.send(html);
  }
});


//task 4.2
let colour_counter2 = 0;

router.get('/color.txt', function(req, res, next) {
  let colour = "";

  switch (colour_counter2 % 4) {
    case 0:
      colour = "red";
      break;

    case 1:
      colour = "yellow";
      break;

    case 2:
      colour = "green";
      break;

    case 3:
      colour = "blue";
      break;

    default:
      //throw error
      break;
  }

  colour_counter2++;

  res.send(colour);
});

//task4.3
let dates_array2 = [];

router.get('/log.json', function(req, res, next) {
  let date = Date();
  dates_array2.push(date);
  res.json(dates_array2);
});

router.get('/log-ro.json', function(req, res, next) {
  res.json(dates_array2);
});


//task 4.4
router.get('/contact.ajax', function(req, res, next) {
  res.send(`<a href = "howrunow@goodnu.notsobad.com"> howrunow@goodnu.notsobad.com</a>`);
});

router.get('/about.ajax', function(req, res, next) {
  res.send("<p>Yeah so this AJAX stuff is not so bad ay, I would definitely recommend it to my mother and that's something I don't say lightly<p>");
});

router.get('/search.ajax', function(req, res, next) {
  res.send(`<form>
            <input type = "text" placeholder = "Search..." name = "search">
            <button type = "submit">submit</button>
            </form>`);
});

module.exports = router;
