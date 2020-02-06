const express = require('express');
const app = express();
const db = require('./db/index.js');
const port = 3001;

app.use('/', express.static('client'));

db.connect(function(err) {
  if (err) throw err;
  db.query('SELECT * FROM reviewText', function(err, result) {
    if (err) throw err;
    console.log(result);
  });
});

app.get('/', (req, res) => res.send());

app.listen(port, () => console.log(`Listening on port ${port}`));
