import express from 'express';
import cors from 'cors';
import { getHomepageCards } from './home.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

/*
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
*/

app.get('/api/home', async (req, res) => {
  try {
    const data = await getHomepageCards();
    res.json({ success: true, results: data });
  } catch (err) {
    console.error('Retrieving error:', err);
    res.status(500).json({ success: false, error: String(err) });
  }
});

<<<<<<< HEAD
app.listen(PORT, 'localhost', () => {
=======
app.listen(PORT, () => {
>>>>>>> 1c51d1faf366dff174017114b60aa0479cfde209
  console.log(`Server listening on http://localhost:${PORT}`);
});
