'use strict';

var currentPlayer = JSON.parse(localStorage.getItem('currentPlayer'));
//get list element from DOM
var leaderList = document.getElementById('leaders');
console.log('currentplayer', currentPlayer);
// leaderList.textContent((currentPlayer.name + (currentPlayer.finalScore = currentPlayer.energy + currentPlayer.time + currentPlayer.money)));
// console.log(currentPlayer.finalScore);

// TODO: load playerArray from local storage
var playerArray = [];

//function to sort through the playerArray by points for leaderboard
function compareInArray( a, b ){
  //TODO: Add a points system or change .points to be something else
  return b.points - a.points;
}
//sorts array by player scores
playerArray.sort(compareInArray);

//TODO: display sorted list on DOM
