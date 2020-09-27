const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();
const port = 8080;

// Middleware

app.use(cors());
app.use(express.json());

// Retrieve all data

app.get('/movies', async (req, res) => {
  try {
    const dataFromDb = await pool.query('SELECT * FROM movies ORDER BY movie_title');
    res.json(dataFromDb.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
