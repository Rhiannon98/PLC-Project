'use strict';

var leaders = [];
//this gets the current player out of local storage
var currentPlayer = JSON.parse(localStorage.getItem('currentPlayer'));
//get list element from DOM
var leaderList = document.getElementById('leaders');
leaderList.textContent = ('Here are the best players');
console.log('currentplayer', currentPlayer);

//TODO: we nwwd to make it create it's own <li>
var topPlayers = document.createElement('li');
topPlayers.textContent = ((currentPlayer.name + ' ' + (currentPlayer.finalScore = currentPlayer.energy + currentPlayer.time + currentPlayer.money)));
leaderList.appendChild(topPlayers);
leaders.push(topPlayers);
console.log(leaders);

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
