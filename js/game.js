'use strict';
var endPoint = 20;

//holding the various options
var optionArray = [];
//holding the varius player
var playerArray = [];

var optionsElement = document.getElementById('options');

// function checkName() {
//   for(var n in playerArray){
//     if(playerName === n.name){
//       var player = n;
//       return player;
//     }
//   }
// }



function Player(name, time, money, energy, distanceTravelled = 0){
  this.name = name;
  this.time = time;
  this.money = money;
  this.energy = energy;
  this.distanceTravelled = distanceTravelled;
  playerArray.push(this);
}

function Option (name, time, money, energy, distance) {
  this.name = name;
  this.time = time;
  this.money = money;
  this.energy = energy;
  this.distance = distance;
  optionArray.push(this);
}

// var testOption1 = new Option('test', 5, 5, 5, 0);
// var testOption2 = new Option('test2', 3,3,3, 0);
// var testOption3 = new Option('test3', 1, 1, 1, 0);

function optionClick(event) {
  for (var i in playerArray.length){

    var clickedOption = event.target.id;

    if(clickedOption === 'option1') {
      Player[i-1].money -= 10;
      Player[i].distanceTravelled +=3;
      console.log('clicked 1');
    } else if
    (clickedOption === 'option2') {
      Player[i].time-= 10;
      Player[i].distanceTravelled +=2;
      console.log('clicked 2');
    }
    else if
    (clickedOption === 'option3'){
      Player[i].energy -= 10;
      Player[i].distanceTravelled ++;
      console.log('clicked 3');
    }
    if (Player[i].distanceTravelled >= endPoint){
    //this is where the game ends
      optionsElement.removeEventListener('click', optionClick);
      console.log('game won');
    }
    else if ((Player[i].money <= 0) || (Player[i].energy <= 0) || (Player[i].time <= 0)){
      optionsElement.removeEventListener('click', optionClick);
      console.log('game lost');
    }
    localStorage.setItem('playerArray', JSON.stringify(playerArray));
  }
}




optionsElement.addEventListener('click', optionClick);

// checkName();






