require('dotenv').config();

const pg = require('pg');
const url = require('url');
const express = require('express');

const app = express();
const authRoutes = require('./routes/authRoutes.js');
const authenticateToken = require('./middleware/authenticateToken.js');

app.use(express.json());
app.use('/auth', authRoutes);

app.get('/protected', authenticateToken, (req, res) => {
  res.send('This is a protected route');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
