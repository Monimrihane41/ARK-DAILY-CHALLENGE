const express = require('express');
const logger  = require('./logger')
const app = express();
const port = 3000;


app.use(logger);// so we use it globaly


app.get('/',logger,(req,res)=>{


  res.send("Home")
})
    

app.get('/about',(req,res)=>{
  
  res.send("About")
})
    

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});