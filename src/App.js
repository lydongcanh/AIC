import React, { useState } from "react";
import { GraphView } from "react-digraph";

function App() {

  const GraphConfig = {
    NodeTypes: {
      empty: { // required to show empty nodes
        typeText: "",
        shapeId: "#empty", // relates to the type property of a node
        shape: (
          <symbol viewBox="0 0 100 100" id="empty" key="0">
            <circle cx="50" cy="50" r="45"></circle>
          </symbol>
        )
      },
      custom: { // required to show empty nodes
        typeText: "Custom",
        shapeId: "#custom", // relates to the type property of a node
        shape: (
          <symbol viewBox="0 0 50 25" id="custom" key="0">
            <ellipse cx="50" cy="25" rx="50" ry="25"></ellipse>
          </symbol>
        )
      }
    },
    NodeSubtypes: {},
    EdgeTypes: {
      emptyEdge: {  // required to show empty edges
        shapeId: "#emptyEdge",
        shape: (
          <symbol viewBox="0 0 50 50" id="emptyEdge" key="0">
            <circle cx="25" cy="25" r="8" fill="currentColor"> </circle>
          </symbol>
        )
      }
    }
  }
  
  const NodeTypes = GraphConfig.NodeTypes;
  const NodeSubtypes = GraphConfig.NodeSubtypes;
  const EdgeTypes = GraphConfig.EdgeTypes;

  const [nodes, setNodes] = useState([
    {
      "id": 1,
      "title": "Node A",
      "x": 258.3976135253906,
      "y": 331.9783248901367,
      "type": "empty"
    },
    {
      "id": 2,
      "title": "Node B",
      "x": 593.9393920898438,
      "y": 260.6060791015625,
      "type": "empty"
    },
    {
      "id": 3,
      "title": "Node C",
      "x": 237.5757598876953,
      "y": 61.81818389892578,
      "type": "empty"
    },
    {
      "id": 4,
      "title": "Node D",
      "x": 600.5757598876953,
      "y": 600.81818389892578,
      "type": "empty"
    }
  ]);
  const [edges, setEdges] = useState([
    {
      "source": 1,
      "target": 2,
      "type": "emptyEdge"
    },
    {
      "source": 3,
      "target": 4,
      "type": "emptyEdge"
    }
  ]);
  const [selected, setSelected] = useState([]);

  function onSelectNode(node, event) {
    console.log("onSelectNode", node, event);
  }

  function onCreateNode(node, event) {
    console.log("onCreateNode", node, event);
  }

  function onUpdateNode(node, event) {
    console.log("onUpdateNode", node, event);
  }

  function onDeleteNode(node, event) {
    console.log("onDeleteNode", node, event);
  }

  function onSelectEdge(node, event) {
    console.log("onSelectEdge", node, event);
  }

  function onCreateEdge(node, event) {
    console.log("onCreateEdge", node, event);
  }

  function onSwapEdge(node, event) {
    console.log("onSwapEdge", node, event);
  }

  function onDeleteEdge(node, event) {
    console.log("onDeleteEdge", node, event);
  }

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <GraphView
        nodeKey="id"
        nodes={nodes}
        edges={edges}
        selected={selected}
        nodeTypes={NodeTypes}
        nodeSubtypes={NodeSubtypes}
        edgeTypes={EdgeTypes}
        onSelectNode={onSelectNode}
        onCreateNode={onCreateNode}
        onUpdateNode={onUpdateNode}
        onDeleteNode={onDeleteNode}
        onSelectEdge={onSelectEdge}
        onCreateEdge={onCreateEdge}
        onSwapEdge={onSwapEdge}
        onDeleteEdge={onDeleteEdge} 
      />
    </div>
  );
}
export default App;