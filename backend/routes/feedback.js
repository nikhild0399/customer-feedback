const express = require('express');
const axios = require('axios');
const router = express.Router();

// Feedback submission route
router.post('/feedback', async (req, res) => {
    const { category, rating, comments } = req.body;

    if (!category || !rating || !comments) {
        return res.status(400).send({ error: 'All fields are required' });
    }

    try {
        // Send feedback to Frill API
        const response = await axios.post(
            'https://api.frill.co/v1/feedback',
            {
                category,
                rating,
                comments,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.FRILL_API_KEY}`, // API Key from .env
                },
            }
        );

        // Send success response to client
        res.status(200).send({
            message: 'Feedback submitted successfully',
            data: response.data,
        });
    } catch (error) {
        console.error('Error submitting feedback:', error.message);
        res.status(500).send({
            error: 'Failed to submit feedback. Please try again later.',
        });
    }
});

module.exports = router;
