router.get('/generate-ranking', async (req, res) => {
    const userAnswers = req.user.answers;
    // Communicate with ChatGPT API using userAnswers to generate a personalized ranking
    // For simplicity, we're skipping the actual API call here
    const ranking = "Sample Ranking";  // Placeholder
    res.render('result', { ranking: ranking });
});
