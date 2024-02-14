
/**
 * This is the main file for the Express application.
 * It sets up the server and defines the routes.
 */

const express  = require('express');
const app = express();
const port = 3000;

/**
 * GET route for '/mohammed'
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/mohammed',(req,res)=>{
  res.send('Welcome to Express');
})

/**
 * GET route for '/freinds'
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/freinds',(req,res)=>{
  res.send(`Welcome to Express, freinds`);
})

/**
 * Start the server and listen on the specified port.
 */
app.listen(port,()=>{
  console.log(`Server is listening on server : http://localhost:${port}`);
})