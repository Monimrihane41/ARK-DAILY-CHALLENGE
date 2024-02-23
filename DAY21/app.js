const express = require('express');
const app = express();
const dotenv = require('dotenv');
const blogRouter = require('./Routes/blogRoutes'); 
const userRouter = require('./Routes/userRoutes');
dotenv.config();

app.use(express.json());

app.use('/blogs', blogRouter);
app.use('/users', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});