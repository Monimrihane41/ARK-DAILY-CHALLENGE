const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const users = []
const register = (req, res) => {
    
        const { username, password } = req.body;
      
        // Check if the username already exists
        if (users.some(user => user.username === username)) {
          return res.status(400).json({ error: 'Username already exists' });
        }
      
        // Hash the password
        bcrypt.hash(password, 10, (err, hashedPassword) => {
          if (err) {
            return res.status(500).json({ error: 'Error hashing password' });
          }
      
          // Store the username and hashed password securely
          users.push({
            username,
            password: hashedPassword,
          });
          
      
          res.status(200).json({ message: 'Registration successful' });
        }
        );

};

const login = (req, res) => {
    const { username, password } = req.body;

  // Find the user by username
  const user = users.find(user => user.username === username);

  // Check if the user exists and validate the password
  if (user && bcrypt.compareSync(password, user.password)) {
    // Set session and cookie
    req.session.userId = username;
    res.cookie('sessionId', req.sessionID, { httpOnly: true });

    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  } 
};

const protectedRoute = (req, res) => {
    // Check if the user is authenticated
  if (req.session.userId) {
    res.status(200).json({ message: 'Protected route accessed' });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

const logout = (req, res) => {
    // Destroy session and clear cookie
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ error: 'Error logging out' });
    }
    res.clearCookie('sessionId');
    res.status(200).json({ message: 'Logout successful' });
  });
}








module.exports = { register, login,protectedRoute,logout };


