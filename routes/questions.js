const express = require('express');
const router = express.Router();

router.get('/questions', (req, res) => {
    res.render('questions');
});

router.post('/submit-answers', (req, res) => {
    // Handle form submission and save answers to the user model
});

module.exports = router;
