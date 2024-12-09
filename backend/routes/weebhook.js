const express = require('express');
const crypto = require('crypto');
const fs = require('fs');
const router = express.Router();

// Frill Webhook Secret
const WEBHOOK_SECRET = process.env.FRILL_WEBHOOK_SECRET;

router.post('/', (req, res) => {
    const signature = req.headers['x-signature'];
    const payload = JSON.stringify(req.body);

    // Validate webhook signature
    const computedSignature = crypto
        .createHmac('sha256', WEBHOOK_SECRET)
        .update(payload)
        .digest('hex');

    if (computedSignature !== signature) {
        return res.status(401).send('Invalid signature');
    }

    const { event, data } = req.body;

    console.log(`Webhook triggered for event: ${event}`);
    console.log('Feedback Data:', data);

    // Save feedback to local storage for demonstration purposes
    fs.appendFileSync('feedback_log.json', JSON.stringify(data, null, 2));

    res.status(200).send('Webhook processed successfully!');
});

module.exports = router;
