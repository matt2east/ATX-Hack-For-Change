const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const request = require('request')

const PORT = 8080;

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "..", "public")));

app.get('/api/', (req, res, next) => {
  const url = "http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=78750&date=2018-06-02&distance=25&API_KEY=98394834-0971-40F7-82FE-8752A5FA0D51"
  request(url, () => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      res.set("access-control-allow-origin", "*");
      res.json(data)
    }
  })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
