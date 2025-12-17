import express from 'express';
import cors from 'cors';
/* import dotenv from 'dotenv';
import authRoutes from './auth.js';

import { connectMongoDB } from './DBManagement.js'; */
import { getHomepageCards } from './home.js';
import { getSearchCards } from './search.js';
import { getMoviesCards } from './movies.js';
import { getMovieData } from './mData.js';

/* dotenv.config(); */

const app = express();
const PORT = process.env.PORT || 3000;


/* app.use(authRoutes.json())
app.use('/api/auth', authRoutes) */
app.use(cors());
//connection de mongoDB
//await connectMongoDB();

app.get('/api/search', async (req, res) => {
  const q = req.query.q || '';
  try {
    const data = await getSearchCards(q);
    res.json({ success: true, results: data });
  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({ success: false, error: String(err) });
  }
});

app.get('/api/home', async (req, res) => {
  try {
    const data = await getHomepageCards();
    res.json({ success: true, results: data });
  } catch (err) {
    console.error('Retrieving error:', err);
    res.status(500).json({ success: false, error: String(err) });
  }
});

app.get('/api/movies', async (req, res) => {
  const page = req.query.p || 1;
  try {
    const data = await getMoviesCards(page);
    res.json({ success: true, results: data });
  } catch (err) {
    console.error('Retrieving error:', err);
    res.status(500).json({ success: false, error: String(err) });
  }
});

app.get('/api/mData', async (req, res) => {
  const id = req.query.id || 1;
  try {
    const data = await getMovieData(id);
    res.json({ success: true, results: data });
  } catch (err) {
    console.error('Retrieving error:', err);
    res.status(500).json({ success: false, error: String(err) });
  }
});

const server = app.listen(PORT, 'localhost', () => {
  const host = server.address().address === '::1' ? 'localhost' : server.address().address;
  console.log(`Server listening on http://${host}:${server.address().port}`);
});
