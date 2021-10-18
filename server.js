const express = require('express');
// this is fun
const app = express()
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });