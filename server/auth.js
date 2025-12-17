import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { username, email, password, dateBirth } = req.body;

    // 1️⃣ Vérification champs
    if (!username || !email || !password || !dateBirth) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // 2️⃣ Vérifier si l'utilisateur existe déjà
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // 3️⃣ Créer utilisateur
    const newUser = new User({
      username,
      email,
      password,   // ⚠️ hash plus tard
      dateBirth
    });

    await newUser.save();

    return res.status(201).json({
      message: 'User created successfully'
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;