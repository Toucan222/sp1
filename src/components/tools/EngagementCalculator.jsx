import React, { useState } from 'react';

export default function EngagementCalculator() {
  const [metrics, setMetrics] = useState({
    likes: '',
    comments: '',
    shares: '',
    followers: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setMetrics(prev => ({
      ...prev,
      [e.target.name]: value
    }));
  };

  const calculateRate = () => {
    const total = (Number(metrics.likes) + Number(metrics.comments) + Number(metrics.shares));
    const rate = (total / Number(metrics.followers)) * 100;
    setResult(rate);
  };

  const getRating = (rate) => {
    if (rate >= 10) return 'Viral Potential! 🚀';
    if (rate >= 5) return 'Great! ⭐';
    if (rate >= 2) return 'Good 👍';
    return 'Keep Growing 🌱';
  };

  return (
    <div className="tool-content">
      <div className="input-group">
        <input
          type="text"
          name="likes"
          value={metrics.likes}
          onChange={handleChange}
          placeholder="Number of Likes"
          className="input"
        />
        <input
          type="text"
          name="comments"
          value={metrics.comments}
          onChange={handleChange}
          placeholder="Number of Comments"
          className="input"
        />
        <input
          type="text"
          name="shares"
          value={metrics.shares}
          onChange={handleChange}
          placeholder="Number of Shares"
          className="input"
        />
        <input
          type="text"
          name="followers"
          value={metrics.followers}
          onChange={handleChange}
          placeholder="Total Followers"
          className="input"
        />
      </div>

      <button 
        className="button calculate-btn"
        onClick={calculateRate}
        disabled={!metrics.followers}
      >
        Calculate Rate
      </button>

      {result !== null && (
        <div className="result">
          <div className="rate">{result.toFixed(2)}%</div>
          <div className="rating">{getRating(result)}</div>
        </div>
      )}
    </div>
  );
}
