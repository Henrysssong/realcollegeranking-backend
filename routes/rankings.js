const axios = require('axios'); // Make sure to install axios: npm install axios

router.get('/generate-ranking', async (req, res) => {
    const userAnswers = req.user.answers;
    
    try {
        const response = await axios.post('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', {
            input: userAnswers // Modify this based on how you want to structure the input
        });
        
        const ranking = response.data.output; // Modify based on the API response structure
        res.render('result', { ranking: ranking });
    } catch (error) {
        console.error("Error generating ranking:", error);
        res.status(500).send("Error generating ranking");
    }
});


