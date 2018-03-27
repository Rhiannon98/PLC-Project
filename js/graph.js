'use strict';

function Graph(head = null){
  this.head = head;
}
//This function will search the Tree for the Parent, then add a node to its links. If the parent is not in the tree, it does nothing
//visited is always empty and never given a value by the user, only the function
function findNode(targetName, start, visited = []){
  //if this is the right node, return it
  if (start.name === targetName){
    return start;
  }
  //If there are no more places to visit, return false
  else if (start.links === []){
    visited.push(start);
    return false;
  }
  //otherwise recursively search each link, stopping at the first successful find
  else {
    //if we've been here before, return false because we already know this is a dead end
    for (let n in visited){
      if (start === visited[n]){
        return false;
      }
    }
    visited.push(start);
    for (let i in start.links){
      //if i is null, remove it from the links
      if (i === null){
        start.links.splice(i, 1);
      }
      else {
        var result = findNode(targetName, start.links[i]);
        //if this branch has what we are looking for, return true
        if (result !== false){
          return result;
        }
      }
    }
    return false;
  }
} 
//This function will find a target Node by its name, and then add a new Node to its links.
function addNode(node, targetName, start){
  var targetNode = findNode(targetName, start);
  if (targetNode !== false){
    targetNode.links.push(node);
    return true;
  }
  else {
    return false;
  }
}
//Links the linker to the linkee
function linkNodes(linkername, linkeename, start){
  var linker = findNode(linkername, start);
  var linkee = findNode(linkeename, start);
  if ((linker !== false) && ( linkee !== false)){
    linker.links.push(linkee);
    return true;
  }
  return false;
}
function removeNode(targetName, start){
  var nodeToRemove = findNode(targetName, start);
  if (nodeToRemove === false){
    return false;
  }
  else {
    nodeToRemove = null;
  }
}

//Data will be whatever object the node is storing and links is an array of Nodes this can vist
function Node( name, links = []){
  // this.data = data;
  this.name = name;
  this.links = links;
}

var startNode = new Node('start');
var graph = new Graph(startNode);

