import React, { useState } from 'react';

export default function GrowthSimulator() {
  const [inputs, setInputs] = useState({
    followers: '',
    growthRate: '',
    months: '12'
  });

  const [projections, setProjections] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setInputs(prev => ({
      ...prev,
      [e.target.name]: value
    }));
  };

  const calculateGrowth = () => {
    const initial = Number(inputs.followers);
    const rate = Number(inputs.growthRate) / 100;
    const months = Number(inputs.months);
    
    const results = Array.from({ length: months + 1 }, (_, i) => ({
      month: i,
      followers: Math.round(initial * Math.pow(1 + rate, i))
    }));

    setProjections(results);
  };

  const getBarHeight = (value, max) => {
    return (value / max) * 200;
  };

  return (
    <div className="tool-content">
      <div className="input-group">
        <input
          type="text"
          name="followers"
          value={inputs.followers}
          onChange={handleChange}
          placeholder="Current Followers"
          className="input"
        />
        <input
          type="text"
          name="growthRate"
          value={inputs.growthRate}
          onChange={handleChange}
          placeholder="Monthly Growth Rate (%)"
          className="input"
        />
        <select
          name="months"
          value={inputs.months}
          onChange={handleChange}
          className="input"
        >
          <option value="3">3 Months</option>
          <option value="6">6 Months</option>
          <option value="9">9 Months</option>
          <option value="12">12 Months</option>
        </select>
      </div>

      <button 
        className="button calculate-btn"
        onClick={calculateGrowth}
        disabled={!inputs.followers || !inputs.growthRate}
      >
        Calculate Growth
      </button>

      {projections && (
        <div className="growth-chart">
          <div className="bars">
            {projections.map((data) => (
              <div key={data.month} className="bar-container">
                <div 
                  className="bar"
                  style={{
                    height: `${getBarHeight(data.followers, projections[projections.length - 1].followers)}px`
                  }}
                >
                  <span className="bar-value">
                    {data.followers.toLocaleString()}
                  </span>
                </div>
                <span className="bar-label">M{data.month}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
