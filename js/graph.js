'use strict';

function Graph(head = null){
  this.head = head;
}

function searchGraph(node, targetName){
  var result = traverseGraphFor(node, targetName);
  for (let i of nodeArray){
    i.explored = false;
    console.log(i);
  }
  return result;
}

function traverseGraphFor(node, targetName){
  node.explored = true;
  if (node.name === targetName){
    return node;
  }
  else if (Object.keys(node.edges).length > 0){
    for (var n in node.edges){
      if (node.edges.hasOwnProperty(n)){
        if (!node.edges[n].explored){
          var result = traverseGraphFor(node.edges[n], targetName);
        }
        else {
          result = false;
        }
        if (result.name === targetName){
          return result;
        }
      }
    }
    return false;
  }
  else {
    return false;
  }
}


//Data will be whatever object the node is storing and links is an array of Nodes this can vist
function Node( name, edge = {}){
  // this.data = data;
  this.name = name;
  if (edge.name){
    this.edges[edge.name] = edge;
  }
  else {
    this.edges = {};
  }
  this.explored = false;
}

// var graph = new Graph(startNode);
var startNode = new Node('Your House');
var endNode = new Node('CodeFellows');
var nodeArray = [startNode, endNode];


function generateRandomGraph(){
  let randomAmount = Math.floor(Math.random() * 6) + 4;
  console.log(randomAmount);
  for (let i = 0; i < randomAmount; i++){
    let newNode = new Node(i.toString());
    nodeArray.push(newNode);
  }
  while (searchGraph(startNode, 'CodeFellows') === false){
    for (let n = 0; n < nodeArray.length; n++){
      let randomAmount = Math.ceil(Math.random() * 3);
      for (let x = 0; x < randomAmount; x++){
        let randomIndex = Math.floor(Math.random() * nodeArray.length);
        if (randomIndex !== n){
          nodeArray[n].edges[nodeArray[randomIndex].name] = nodeArray[randomIndex];
          nodeArray[randomIndex].edges[nodeArray[n].name] = nodeArray[n];
        }
      }
    }
  }
}
