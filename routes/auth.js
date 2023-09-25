router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/questions',
    failureRedirect: '/'
}));

router.post('/login', passport.authenticate('local', {
    successRedirect: '/questions',
    failureRedirect: '/',
    failureFlash: true
}));
