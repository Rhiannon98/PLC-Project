'use strict';

var leaderList = document.getElementById('leaders');

// TODO: load playerArray from local storage

var playerArray = [];

//function to sort through the playerArray by points for leaderboard

function compareInArray( a, b ){

  return b.points - a.points;
}

playerArray.sort(compareInArray);

