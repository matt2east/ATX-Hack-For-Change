var express = require("express");
var app = express();
var ejs = require("ejs");
var path = require("path");
var request = require("request");
// app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));

// app.get('/', function(req, res) {
//     // res.render('home');
// });

app.get("/home", function(req, res) {
  request(
    "http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=78750&date=2018-06-02&distance=25&API_KEY=98394834-0971-40F7-82FE-8752A5FA0D51",
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        res.set("access-control-allow-origin", "*");
        res.json(data);
      }
    }
  );
});

//api key = 16c980fc486bd781188cf0d62e60f253

app.listen(3001);
console.log("Listening on port 3001");
