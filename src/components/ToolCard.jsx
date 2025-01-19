import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import EngagementCalculator from './tools/EngagementCalculator';

export default function ToolCard({ tool, onBack }) {
  const renderToolContent = () => {
    switch (tool.id) {
      case 1:
        return <EngagementCalculator />;
      default:
        return <p>Tool content coming soon...</p>;
    }
  };

  return (
    <div className="container">
      <button className="back-button" onClick={onBack}>
        <IoArrowBack /> Back
      </button>
      
      <div className="card">
        <h1 className="title">{tool.title}</h1>
        <p className="description">{tool.description}</p>
        {renderToolContent()}
      </div>
    </div>
  );
}
