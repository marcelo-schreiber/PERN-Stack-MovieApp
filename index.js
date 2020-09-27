const express = require('express');
const cors = require('cors');
const pool = require('./db');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  // server static
  app.use(express.static(path.join(__dirname, 'frontend/build')));
}

// Retrieve all data

app.get('/movies', async (req, res) => {
  try {
    const dataFromDb = await pool.query('SELECT * FROM movies ORDER BY movie_title');
    res.json(dataFromDb.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
