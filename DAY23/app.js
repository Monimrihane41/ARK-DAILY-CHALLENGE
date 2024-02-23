const express = require('express');
const router = require('../cookiesSessions/routes/userRoute.js');

const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const bcrypt = require('bcrypt');

// Server Variable Structure

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: '73817ca3aa275f2ee730221127b9efeaa069c9cc9cc1c71b64d491e51904d9219077e9ec88fa3f005d240a2b9f595a7e4ffedfab5c969709a4d71b8753c841d5', 
  resave: false,
  saveUninitialized: true,
}));

;

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
