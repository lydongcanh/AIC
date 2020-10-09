import React, { useState } from "react";
import { Graph } from "react-d3-graph";
import { Button, Select, Pane, InlineAlert } from 'evergreen-ui'
import { bfs, dfs, edges, findNodeWithId, buildNodes } from "./graph";

function App() {

  const [nodes, setNodes] = useState(buildNodes([]));
  const [startId, setStartId] = useState(0);
  const [endId, setEndId] = useState(9);
  const [lastResult, setLastResult] = useState(null);

  const search = (searchMethod) => {
    const result = searchMethod(findNodeWithId(startId), findNodeWithId(endId));
    setNodes(buildNodes(result.visited));
    setLastResult(result);
  }

  const badge = () => {
    if (lastResult == null)
      return null;

    const visitedString = lastResult.visited.map(n => n.id).join(", ");
    const message = lastResult.success 
      ? `Tìm thấy đường: ${visitedString}` 
      : `Không tìm thấy đường: ${visitedString}, X`;
    const intent = lastResult.success ? "success": "danger";

    return <InlineAlert isRemoveable={true} marginTop={16} appearance="card" intent={intent} children={message} />
  }

  return (
    <Pane style={{ height: "100vh", width: "100vw" }}>
      <Pane padding={16} style={{ height: "5vh", width: "100vw" }}>
        <Select marginRight={8} onChange={event => setStartId(event.target.value)}>
          <option value="0" selected="selected">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </Select>

        <Select marginRight={16} onChange={event => setEndId(event.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9" selected="selected">9</option>
        </Select>

        <Button marginRight={8} onClick={() => search(bfs)}>
          BFS
        </Button>
        <Button marginRight={16} onClick={() => search(dfs)}>
          DFS
        </Button>

        {badge()}
      </Pane>

      <Pane style={{ height: "95vh", width: "100vw" }}>
        <Graph
          id="graph-id"
          data={{
            nodes: nodes,
            links: edges
          }}
          config={{
            width: window.innerWidth,
            height: window.innerHeight,
            directed: true,
            nodeHighlightBehavior: true,
            d3: {
              gravity: -1000,
              linkLength: 300
            },
            node: {
              size: 2000,
              fontSize: 10,
              highlightFontSize: 15
            },
            // link: {
            //   type: "CURVE_SMOOTH"
            // }
          }}
        />
      </Pane>
    </Pane>
  );
}
export default App;