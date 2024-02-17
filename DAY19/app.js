
const express = require('express');
const router = require('./routes/postRoutes');
const {log} = require('./middleware/logs');
const app = express();
const port = 3000;
app.use(express.json());
app.use(log);

app.use("/posts", router)


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    }
); //listening to the port 3000