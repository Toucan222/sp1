import React, { useState } from 'react';
import CardIndex from './components/CardIndex';
import ToolCard from './components/ToolCard';
import { tools } from './data/tools';

export default function App() {
  const [selectedToolId, setSelectedToolId] = useState(null);

  const selectedTool = tools.find(tool => tool.id === selectedToolId);

  return (
    <div>
      {selectedTool ? (
        <ToolCard 
          tool={selectedTool} 
          onBack={() => setSelectedToolId(null)} 
        />
      ) : (
        <CardIndex onSelectTool={setSelectedToolId} />
      )}
    </div>
  );
}
