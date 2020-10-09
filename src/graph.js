export const buildNodes = (path) => [
  {
    "id": 0,
    "color": path && path.find(node => node.id == 0) ? "lightgreen" : "wheat"
  },
  {
    "id": 1,
    "color": path && path.find(node => node.id == 1) ? "lightgreen" : "wheat"
  },
  {
    "id": 2,
    "color": path && path.find(node => node.id == 2) ? "lightgreen" : "wheat"
  },
  {
    "id": 3,
    "color": path && path.find(node => node.id == 3) ? "lightgreen" : "wheat"
  },
  {
    "id": 4,
    "color": path && path.find(node => node.id == 4) ? "lightgreen" : "wheat"
  },
  {
    "id": 5,
    "color": path && path.find(node => node.id == 5) ? "lightgreen" : "wheat"
  },
  {
    "id": 6,
    "color": path && path.find(node => node.id == 6) ? "lightgreen" : "wheat"
  },
  {
    "id": 7,
    "color": path && path.find(node => node.id == 7) ? "lightgreen" : "wheat"
  },
  {
    "id": 8,
    "color": path && path.find(node => node.id == 8) ? "lightgreen" : "wheat"
  },
  {
    "id": 9,
    "color": path && path.find(node => node.id == 9) ? "lightgreen" : "wheat"
  }
]

export const edges = [
  {
    "source": 0,
    "target": 1,
  },
  {
    "source": 0,
    "target": 2,
  },
  {
    "source": 0,
    "target": 3,
  },
  {
    "source": 1,
    "target": 4,
  },
  {
    "source": 1,
    "target": 5,
  },
  {
    "source": 2,
    "target": 6,
  },
  {
    "source": 2,
    "target": 7,
  },
  {
    "source": 3,
    "target": 8,
  },
  {
    "source": 3,
    "target": 9,
  },
]

export const bfs = (start, end) => {
  if (start.id == end.id)
    return {
      success: true,
      visited: [end]
    };

  let visited = [];
  let unvisited = [];

  unvisited.push(start);
  while (unvisited.length > 0) {
    let currentNode = unvisited.shift();
    if (currentNode == null || visited.find(node => node.id == currentNode.id))
      continue;

    visited.push(currentNode);

    if (currentNode.id == end.id) 
      return {
        success: true,
        visited: visited
      };

      unvisited = unvisited.concat(findAdjacentNodes(currentNode));
  }

  return {
    success: false,
    visited: visited
  };
}

export const dfs = (start, end) => {
  if (start.id == end.id)
    return {
      success: true,
      visited: [end]
    };

  let visited = [];
  let unvisited = [];

  unvisited.push(start);
  while (unvisited.length > 0) {
    let currentNode = unvisited.pop();
    if (currentNode == null || visited.find(node => node.id == currentNode.id))
      continue;

    visited.push(currentNode);

    if (currentNode.id == end.id) 
      return {
        success: true,
        visited: visited
      };

      unvisited = unvisited.concat(findAdjacentNodes(currentNode));
  }

  return {
    success: false,
    visited: visited
  };
}

export const findNodeWithId = (id) => {
  return buildNodes([]).find(node => node.id == id);
}

const findAdjacentNodes = (node) => {
  let nodeEdges = edges.filter(edge => edge.source == node.id);
  if (nodeEdges == null || nodeEdges.length < 1)
    return [];

  let adjacentNodes = [];
  for (let edge of nodeEdges) {
    let adjacentNode = findNodeWithId(edge.target);
    if (adjacentNode != null)
      adjacentNodes.push(adjacentNode);
  }
  return adjacentNodes;
}