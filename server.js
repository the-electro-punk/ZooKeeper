const express = require('express');

const app = express()

app.get('/api/animals', (req, res) => {
    let results = animals;
    console.log(req.query)
    res.json(results);
  });

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });
  
// this summons the list of animals
  const { animals } = require('./data/animals');