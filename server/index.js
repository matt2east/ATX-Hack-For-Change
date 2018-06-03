const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000;
const app = express();
const requests = require('requests')


app.get('/data', cors(), (req, response) => {
  request("http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=78750&date=2018-06-02&distance=25&API_KEY=98394834-0971-40F7-82FE-8752A5FA0D51", (error, res, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      res.json(data)
    }
  })
});

app.listen(1337, () => console.log('CORS-enabled web server listening on port 1337'))
