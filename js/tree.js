'use strict';

function Tree(head = null){
  this.head = head;
}
//This function will search the Tree for the Parent, then add a node to its links. If the parent is not in the tree, it does nothing
function addNode(node, targetName, start){
  //if this is the right parent, give it a new link
  if (start.name === targetName){
    start.links.push(node);
    return true;
  }
  //If there are no more places to visit, return false
  else if (start.links === []){
    return false;
  }
  //otherwise recursively search each link, stopping at the first successful find
  else {
    for (let i in start.links){
      var result = addNode(node, targetName, start.links[i]);
      //if this branch has what we are looking for, return true
      if (result === true){
        return true;
      }
    }
  }
}


//Data will be whatever object the node is storing and links is an array of Nodes this can vist
function Node( name, links = []){
  // this.data = data;
  this.name = name;
  this.links = links;
}

var startNode = new Node('start')
var tree = new Tree(startNode);

