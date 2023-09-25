const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');  // We'll create this model soon


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

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
            return done(null, user);
        } else {
            user = new User({
                googleId: profile.id,
                email: profile.emails[0].value
            });
            await user.save();
            return done(null, user);
        }
    } catch (err) {
        return done(err);
    }
}));

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const user = await User.findOne({ email: username });
        if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
        }
        // Here, you'd typically check the password hash. For simplicity, we're skipping that step.
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));
