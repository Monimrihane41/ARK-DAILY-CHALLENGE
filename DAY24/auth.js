const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
dotenv = require('dotenv');

 const GOOGLE_CLIENT_ID = "879833918710-f0020amnfuavq2jpfnscejubrfu14ru8.apps.googleusercontent.com" ;
 const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/google/callback",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});