const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const pg = require('pg');
const url = require('url');

const config = require('./config.js')

const authRoutes = require('./routes/authRoutes.js');
const authenticateToken = require('./middleware/authenticateToken.js');


const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use('/api/v1/auth', authRoutes);


app.get('/api/v1/protected', authenticateToken, (req, res) => {
  res.send('protected route');
});

const PORT = config.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
