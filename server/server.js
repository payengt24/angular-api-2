const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

let favorite = '';

// Serve back static files by default
app.use(express.static('server/public'));
app.use(bodyParser.json());

app.listen(port, function (req, res) {
  console.log('Listening on port', port);
});

app.post('/favorite', (req, res) => {
  favorite = req.body.src;
  console.log(favorite);
  res.sendStatus(202);
})

app.get('/favorite', (req, res) => {
  res.send(favorite);
})