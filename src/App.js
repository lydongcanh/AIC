import React, { useState } from "react";
import { Graph } from "react-d3-graph";
import { bfs, dfs, edges, findNodeWithId, buildNodes } from "./graph";

function App() {

  const [nodes, setNodes] = useState(buildNodes([]));
  const [startId, setStartId] = useState(0);
  const [endId, setEndId] = useState(0);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div style={{ height: "5vh", width: "100vw" }}>
        <select name="startNode" id="startNode" onChange={item => setStartId(item.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>

        <select name="endNode" id="endNode" onChange={item => setEndId(item.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>

        <button onClick={() => {
          const path = bfs(findNodeWithId(startId), findNodeWithId(endId));
          console.log(path);
          setNodes(buildNodes(path.visited));
        }}>
          BFS
        </button>
        <button onClick={() => {
          const path = dfs(findNodeWithId(startId), findNodeWithId(endId));
          console.log(path);
          setNodes(buildNodes(path.visited));
        }}>
          DFS
        </button>
      </div>

      <div style={{ height: "95vh", width: "100vw" }}>
        <Graph
          id="graph-id"
          data={{
            nodes: nodes,
            links: edges
          }}
          config={{
            directed: true,
            nodeHighlightBehavior: true,
            node: {
              size: 500
            }
          }}
          // onClickNode={onClickNode}
          // onDoubleClickNode={onDoubleClickNode}
          // onRightClickNode={onRightClickNode}
          // onClickGraph={onClickGraph}
          // onClickLink={onClickLink}
          // onRightClickLink={onRightClickLink}
          // onMouseOverNode={onMouseOverNode}
          // onMouseOutNode={onMouseOutNode}
          // onMouseOverLink={onMouseOverLink}
          // onMouseOutLink={onMouseOutLink}
          // onNodePositionChange={onNodePositionChange}
        />
      </div>
    </div>
  );
}
export default App;