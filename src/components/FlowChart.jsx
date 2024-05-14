// Flowchart.js

import React, { useState } from 'react';
import ReactFlow, { Controls } from 'react-flow-renderer';

const Flowchart = () => {
  const [elements, setElements] = useState([]);

  const onElementsRemove = (elementsToRemove) => {
    setElements((els) => els.filter((el) => !elementsToRemove.includes(el)));
  };

  const onConnect = (params) => {
    console.log('onConnect', params);
  };

  const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
  };

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <ReactFlow
        elements={elements}
        onLoad={onLoad}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        snapToGrid
        snapGrid={[15, 15]}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flowchart;
