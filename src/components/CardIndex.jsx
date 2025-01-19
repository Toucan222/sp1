import React from 'react';
import { tools } from '../data/tools';

export default function CardIndex({ onSelectTool }) {
  return (
    <div className="container">
      <h1 className="title">SocialPlug Labs</h1>
      <p className="description">100 free helpful tools for creators of all sizes</p>
      
      <div className="tools-grid">
        {tools.map(tool => (
          <div key={tool.id} className="card" onClick={() => onSelectTool(tool.id)}>
            <h2 className="title">{tool.title}</h2>
            <p className="description">{tool.description}</p>
            <button className="button">Open Tool</button>
          </div>
        ))}
      </div>
    </div>
  );
}
