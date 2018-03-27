'use strict';

// TODO: get this working ... better

// TODO: create current user variable to access later

var endPoint = 20;

//holding the various options
var optionArray = [];
//holding the varius player
var playerArray = [];

// getting the elements from the dom
var optionsElement = document.getElementById('options');
var questionText = document.getElementById('questionText');

// creating constructor function for new player instances
function Player(name, time, money, energy, distanceTravelled = 0) {

  this.name = name;
  this.time = time;
  this.money = money;
  this.energy = energy;
  this.distanceTravelled = distanceTravelled;
  playerArray.push(this);
}


// to create new questions / options
function Option(name, time, money, energy, distance) {

  this.name = name;
  this.time = time;
  this.money = money;
  this.energy = energy;
  this.distance = distance;
  optionArray.push(this);
}

<<<<<<< HEAD
// create question constructor
function Question(Qtext, type, amount) {
  // what the question is
  this.text = Qtext;
  // type is a resource as a string
  this.resource = type;
  // amount is the number taken from that resource
  this.amount = amount;
}
// add method to question to load question on page
Question.prototype.loadText = function () {
  questionText.textContent = this.text;
};

// creating instances
var initialQuest = new Question('Choose an option!', 'energy', 0);

// pull the userName from validateInput in app.js
=======

>>>>>>> dd46a57b2e2eb00215092536fe2b0fc8192e61c2
function getUser() {
  var newUser = localStorage.getItem('validateInput');

  newUser = JSON.parse(newUser);
  // TODO:
  // FIXME: numbers are filler for now.

  var progress = localStorage.getItem('playerArray');
  if (progress === null) {
    var newPlayer = new Player(newUser, 10, 10, 10);
  } else {
    playerArray = JSON.parse(progress);
    var checkUser = checkName(newUser);
    if (checkUser === false) {
      newPlayer = new Player(newUser, 10, 10, 10);
    }
  }
}

// to go through local storage to see if name is a previous player
function checkName(playerName) {
  for (var n in playerArray) {
    if (playerName === n.name) {
      var player = n;
      return player;
    }
  }
  return false;
}

// save playerArray into LS
function saveProgress() {
  // storing player array in local storage.
  localStorage.setItem('playerArray', JSON.stringify(playerArray));
}

function findPlayer(element) {
  return element.name === JSON.parse(localStorage.getItem('validateInput'));
}

// var testOption1 = new Option('test', 5, 5, 5);
// var testOption2 = new Option('test2', 3, 3, 3);
// var testOption3 = new Option('test3', 1, 1, 1);

// creating click event function
function optionClick(event) {

  // button user clicked on
  var clickedOption = event.target.id;

  // change the players resources based on the option that they clicked on
  if (clickedOption === 'option1') {
    currentPlayer.money -= 5;
    currentPlayer.distanceTravelled += 3;
    console.log(currentPlayer);
  } else if
  (clickedOption === 'option2') {
    currentPlayer.time -= 5;
    currentPlayer.distanceTravelled += 2;
    console.log(currentPlayer);
  }
  else if
  (clickedOption === 'option3') {
    currentPlayer.energy -= 5;
    currentPlayer.distanceTravelled++;
    console.log(currentPlayer);
  }
  else if (clickedOption === 'saveProgress') {
    saveProgress();
  }
  // if user at end, they win
  if (currentPlayer.distanceTravelled >= endPoint) {
    //this is where the game ends
    optionsElement.removeEventListener('click', optionClick);
    console.log('game won');
  }
  // if player has 0 of any resource = LOSER
  else if ((currentPlayer.money <= 0) || (currentPlayer.energy <= 0) || (currentPlayer.time <= 0)) {
    optionsElement.removeEventListener('click', optionClick);
    console.log('game lost');
  }


}

// making the event listener listen (lol)
optionsElement.addEventListener('click', optionClick);

// calling the function if the user stored in LS
getUser();

// checks the player on page load
var currentPlayer = playerArray[playerArray.findIndex(findPlayer)];

// calling the Question function
initialQuest.loadText();






