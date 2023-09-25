const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');  // We'll create this model soon

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // Handle Google authentication and user creation/lookup here
}));

passport.use(new LocalStrategy((username, password, done) => {
    // Handle email/password authentication here
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});
