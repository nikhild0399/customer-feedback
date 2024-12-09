const axios = require('axios');
const frillService = require('../services/frillService');

exports.submitFeedback = async (req, res) => {
    const { category, rating, comments } = req.body;
    try {
        const response = await frillService.submitFeedback({ category, rating, comments });
        res.status(201).json({ message: 'Feedback submitted successfully', data: response.data });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit feedback' });
    }
};

exports.getFeedback = async (req, res) => {
    try {
        const feedback = await frillService.getFeedback();
        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch feedback' });
    }
};
