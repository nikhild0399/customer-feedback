import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackForm.css'; // Assuming this CSS file is created

const FeedbackForm = () => {
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState(1);
    const [comments, setComments] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/feedback', { category, rating, comments });
            alert('Feedback submitted successfully');
        } catch (error) {
            alert('Error submitting feedback');
        }
    };

    return (
        <div className="feedback-container">
            <h2 className="form-title">Submit Your Feedback</h2>
            <form onSubmit={handleSubmit} className="feedback-form">
                <div className="form-group">
                    <label>Category:</label>
                    <select 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        className="form-input"
                        required
                    >
                        <option value="">Select a category</option>
                        <option value="Product Features">Product Features</option>
                        <option value="Product Pricing">Product Pricing</option>
                        <option value="Product Usability">Product Usability</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Rating:</label>
                    <input 
                        type="number" 
                        value={rating} 
                        onChange={(e) => setRating(e.target.value)} 
                        min="1" 
                        max="5" 
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Comments:</label>
                    <textarea
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        className="form-input"
                        rows="4"
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
