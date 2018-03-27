'use strict';

function Tree(head = null){
  this.head = head;
}
//This function will search the Tree for the Parent, then add a node to its links. If the parent is not in the tree, it does nothing
function findNode(targetName, start){
  //if this is the right node, return it
  if (start.name === targetName){
    return start;
  }
  //If there are no more places to visit, return false
  else if (start.links === []){
    return false;
  }
  //otherwise recursively search each link, stopping at the first successful find
  else {
    for (let i in start.links){
      var result = findNode(targetName, start.links[i]);
      //if this branch has what we are looking for, return true
      if (result !== false){
        return result;
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
//zombiecode for removeNode function
// function removeNode(targetName, start){
//   nodeToRemove = findNode(targetName, start);
//   if (nodeToRemove === false){
//     return false;
//   }
//   else {
//    delete nodeToRemove
//    //if we ever need to use this, findNode will need to be able to handle Null
//   }
//}

//Data will be whatever object the node is storing and links is an array of Nodes this can vist
function Node( name, links = []){
  // this.data = data;
  this.name = name;
  this.links = links;
}

var startNode = new Node('start');
var tree = new Tree(startNode);

