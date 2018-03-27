'use strict';

// TODO: get this working ... better

// TODO: create current user variable to access later


var endPoint = 100;


//holding the various options
var optionArray = [];
//holding the varius player
var playerArray = [];
//holding our questions
var questionArray = [];


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


// create question constructor
function Question(Qtext, type, amount) {
  // what the question is
  this.text = Qtext;
  // type is a resource as a string
  this.resource = type;
  // amount is the number taken from that resource
  this.amount = amount;
  // pushing shit into the array
  questionArray.push(this);
}
// add method to question to load question on page
Question.prototype.loadText = function () {
  questionText.textContent = this.text;
};

// function to randomize questions from position[1]
function getRandomQuest() {
  var randomNum = Math.ceil(Math.random() * (questionArray.length - 1));
  console.log(randomNum);
  return questionArray.splice(randomNum, 1);
}

// creating instances
var initialQuest = new Question('Choose an option!', 'energy', 0);
new Question('Choose a different option?', 'energy', 6);
new Question('Are you an idiot?', 'energy', -70);
new Question('Are you a donkry?', 'money', 10);
new Question('Are you an ogre?', 'time', 50);
new Question('Are you an orc?', 'energy', 1);
new Question('Are you a carrot?', 'time', 10);
new Question('Are you an elf?', 'money', -5);



// pull the userName from validateInput in app.js
// confirm that this user is or is not the same

function getUser() {
  var newUser = localStorage.getItem('validateInput');

  newUser = JSON.parse(newUser);
  // TODO:
  // FIXME: numbers are filler for now.

  var progress = localStorage.getItem('playerArray');
  if (progress === null) {

    var newPlayer = new Player(newUser, 100, 100, 100);

  } else {
    playerArray = JSON.parse(progress);
    var checkUser = checkName(newUser);
    if (checkUser === false) {
      newPlayer = new Player(newUser, 100, 100, 100);

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

  // saving
  var newQuestion = getRandomQuest()[0];
  // checking
  console.log(newQuestion.amount);
  // loading the text onto the page
  newQuestion.loadText();
  // TODO: fix this
  // FIXME : not computing differences
  if (newQuestion.resource === 'energy') {
    currentPlayer.energy -= newQuestion.amount;
    console.log('i am energy');

  } else if (newQuestion.resource === 'time') {
    currentPlayer.time -= newQuestion.amount;
    console.log('i am time');

  } else if (newQuestion.resource === 'money') {
    currentPlayer.money -= newQuestion.amount;
    console.log('i am money');
  }
  // change the players resources based on the option that they clicked on
  if (clickedOption === 'option1') {
    // currentPlayer.money -= 5;

    currentPlayer.distanceTravelled += 3;
    console.log(currentPlayer);
  } else if
  (clickedOption === 'option2') {
    // currentPlayer.time -= 5;

    currentPlayer.distanceTravelled += 2;
    console.log(currentPlayer);
  }
  else if
  (clickedOption === 'option3') {
    // currentPlayer.energy -= 5;
    currentPlayer.distanceTravelled++;
    console.log(currentPlayer);
  }
  // saving progress as the player goes
  saveProgress();

  // if user at end, they win
  if (currentPlayer.distanceTravelled >= endPoint) {
    //this is where the game ends
    optionsElement.removeEventListener('click', optionClick);
    console.log('game won');
    return;
  }
  // if player has 0 of any resource = LOSER
  else if ((currentPlayer.money <= 0) || (currentPlayer.energy <= 0) || (currentPlayer.time <= 0)) {
    optionsElement.removeEventListener('click', optionClick);
    console.log('game lost');
    return;
  }

}

// making the event listener listen (lol)
optionsElement.addEventListener('click', optionClick);

// calling the function if the user stored in LS
getUser();

// checks the player on page load
var currentPlayer = playerArray[playerArray.findIndex(findPlayer)];

// calling the first Question function
initialQuest.loadText();






