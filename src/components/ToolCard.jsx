import React from 'react';
import { IoArrowBack } from 'react-icons/io5';

export default function ToolCard({ tool, onBack }) {
  return (
    <div className="container">
      <button className="back-button" onClick={onBack}>
        <IoArrowBack /> Back
      </button>
      
      <div className="card">
        <h1 className="title">{tool.title}</h1>
        <p className="description">{tool.description}</p>
        
        {/* Tool specific content will be added here */}
        <div className="tool-content">
          <p>Tool content coming soon...</p>
        </div>
      </div>
    </div>
  );
}
