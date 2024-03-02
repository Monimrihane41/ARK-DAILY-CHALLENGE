const express = require("express");
const session = require("express-session");
const redis =   require("redis");
const connectRedis = require("connect-redis");
const redisStore = connectRedis(session);
const app = express();
const port = 3000;

//run behind the proxy
// app.set('trust proxy', 1);

//1 configure over redis client
const redisClient = redis.createClient({
    Port: 6379,
    host: 'localhost'
});

//2 configure session middleware
app.use(session({
    store: new redisStore({client: redisClient}),
    secret: "monimrihane",
    resave: false,//if you make and do not update the session it will not be saved
    saveUninitialized: true,
    cookie:{
        secure : false, //if true only transmit over https
        httpOnly: false, //if true prevent client side js from reading the cookie
        maxAge: 1000*60*60*24 //session max age in miliseconds
    }
}));


// LOGIN ENDPOINT

app.get("/login", (req, res) => {
    const {email, password}= req;

    //IF TRUE 
    

    });








app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });