const express = require('express');
const router = express.Router();

router.get('/questions', (req, res) => {
    res.render('questions');
});

router.post('/submit-answers', (req, res) => {
    const answers = req.body;  // This contains the form data
    // Save answers to the user model
    User.findByIdAndUpdate(req.user.id, { answers: answers }, (err) => {
        if (err) return res.redirect('/questions');
        res.redirect('/generate-ranking');
    });
});


module.exports = router;
