const express = require('express');
const passport = require('passport');
require('./auth');
const session = require('express-session');
const app = express();


app.use(session({  secret: "cats   "}));
app.use(passport.initialize());
app.use(passport.session());

function isLoggedIn(req, res, next) {
   req.user ? next() : res.sendStatus(401);
}

app.get('/', (req, res) => {
    res.send('<a href="/auth/google">LOGIN WITH GOOGLE</a>');
});
app.get('/auth/google',
    passport.authenticate('google', { scope: ['email','profile'] })
);
app.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/auth/failure',
        successRedirect: '/home'
    })  
    
);

app.get("/auth/failure",(req,res)=>{
    res.send("Failed to login");
}
);


app.get("/home",isLoggedIn,(req,res)=>{
    res.send(`Welcome ${req.user.displayName}`);
}
);
app.get('/logout', (req, res) => {
    req.logout();
    res.send("Logged out");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);