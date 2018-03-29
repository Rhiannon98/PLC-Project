'use strict';

// TODO: get this working ... better


var endPoint = 99;


//holding the various options
var optionArray = [];
//holding the varius player
var playerArray = [];
//holding our questions
var questionArray = [];

// getting the elements from the dom
var optionsElement = document.getElementById('options');
var questionText = document.getElementById('questionText');
var energyElement = document.getElementById('energy');
var moneyElement = document.getElementById('money');
var timeElement = document.getElementById('time');
var canvasElement = document.getElementById('map');

// creating constructor function for new player instances
function Player(name, time, money, energy, distanceTravelled = 0) {

  this.name = name;
  this.time = time;
  this.money = money;
  this.energy = energy;
  this.distanceTravelled = distanceTravelled;
  playerArray.push(this);
}

// TODO: add default players to render in the leaderboard screen
// so other 'players' can be weirded out and baffled is all

// to create new options
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
  // pushing stuff into the array
  questionArray.push(this);
}
// add method to question to load question on page
Question.prototype.loadText = function () {
  questionText.textContent = this.text;
};

// function to randomize questions from position[1+]
function getRandomQuestion() {
  var randomNum = Math.ceil(Math.random() * (questionArray.length - 1));
  console.log('This is the index of the random question chosen ' + randomNum);
  //removes and returns the chosen question based on the index
  //returns a one element array from our question array
  //splice prevents repeated questions by removing it from the array
  return questionArray.splice(randomNum, 1)[0];
}

// creating initial question
var initialQuestion = new Question('Good Morning! Recently, you\'ve made the decision to change career path and become a Web Developer. However, your coding skills need work. You\'ve enrolled into CodeFellows, Seattle\'s premier coding bootcamp. However, the only thing preventing you from obtaining your new career goals is the dreaded Puget Sound Regional Transit. You have to navigate your way to the school without running out of money, energy, or time. This morning, you\'ve made it to the first transit station of your commute with time to spare. Everything looks like it is on-time but you are smart and know that won\'t last. Choose your method of transport below keeping in mind, you have a long commute ahead!', 'energy', 0);
//creating questions
new Question('You see a friend on your commute! She has an extra coffee and a donut! Your energy level is increased by 11! Choose the next method of transportation below to your next stop.', 'energy', -11);
new Question('You are exhausted from partying last night! Your energy level suffers (-5 energy). Choose the next method of transportation', 'energy', 5);
new Question('Rich Uncle Pennybags has passed away. Luckily you were his most favorite of the neices and nephews. Collect your inheritance! (Money +20)', 'money', -20);
new Question('Whomp Whomp! A $8 billion dollar tunnel-digging machine has broked down after colliding with a coca-cola bottle cap. This is causing a slowdown  on every route! (Time -20)', 'time', 20);
new Question('That was weird! Your transit route went exactly as expected. How long will that last?', 'energy', -1);
new Question('Where is all the traffic? Does everyone else have a holiday except for you? (Time +5)', 'time', -5);
new Question('Not again! Somehow a third avenue crazy has interupted your commute. You try to politely say that you do not have spare money but get bombarded with insults. (Energy -5)', 'energy', 5);



// pull the userName from validateInput in app.js
// confirm that this user is or is not the same as one in the playerArray

function getUser() {
  var newUser = localStorage.getItem('validateInput');

  newUser = JSON.parse(newUser);
  // TODO:
  // FIXME: numbers are filler for now.

  var progress = localStorage.getItem('playerArray');
  if (progress === null) {
    //if playerArray DNE, make user
    new Player(newUser, 100, 100, 100);

  } else {
    playerArray = JSON.parse(progress);
    var checkUser = checkName(newUser);
    if (checkUser === false) {
      //if player DNE, make player
      new Player(newUser, 100, 100, 100);
    }
  }
}

// to go through local storage to see if name is a previous player
function checkName(playerName) {
  for (var i in playerArray) {
    if (playerName === i.name) {
      //I is the current player
      console.log('I is: ' + i);
      return i;
    }
  }
  //returns false if the current player DNE
  return false;
}

// save playerArray into LS
function saveProgress() {
  // storing player array in local storage.
  localStorage.setItem('playerArray', JSON.stringify(playerArray));
}

//This will be passed to an array that will use it to find the playerName that was entered in localStorage
function findPlayer(element) {
  return element.name === JSON.parse(localStorage.getItem('validateInput'));
}

// TODO: STRETCH Use options instead of hardcoded values you apes
//(name, time, money, energy, distance)
var testOption1 = new Option('test', 3, 10, 2, 20);
var testOption2 = new Option('test2', 7, 5, 2, 10);
var testOption3 = new Option('test3', 15, 1, 10, 5);

//Renders the resource bar and map and progress bar
function render(){
  renderResources();
  renderProgressBar();
}
function renderResources(){
  energyElement.textContent = 'Energy: ' + currentPlayer.energy;
  moneyElement.textContent = 'Money: ' + currentPlayer.money;
  timeElement.textContent = 'Time: ' + currentPlayer.time;
}
//TODO: Write renderMap
// function renderMap(){

// }
//TODO: write renderProgressBar
function renderProgressBar(){
  if (canvasElement.getContext){
    console.log('Im here');
    var context = canvasElement.getContext('2d');
    var travelledAmount = currentPlayer.distanceTravelled/endPoint*canvasElement.width;
    var color = '#000000';
    console.log(context);

    if (currentPlayer.distanceTravelled/endPoint < 0.25){
      color = '#ff0000';
    }
    else if (currentPlayer.distanceTravelled/endPoint < 0.5) {
      color = '#ff6200';
    }
    else if (currentPlayer.distanceTravelled/endPoint < 0.75) {
      color = '#00ff00';
    }
    else {
      color = '#0000ff';
    }

    context.fillStyle = color;
    context.fillRect(0, canvasElement.height-30, travelledAmount, 30);

    context.fillStyle = '#000000';
    context.strokeRect(0, canvasElement.height-30, canvasElement.width, 30);

  }
  else {
    console.log('error');
  }

}

// creating click event function
function optionClick(event) {

  // button user clicked on
  var clickedOption = event.target.id;
  //get the first 6 letters of the id to see if they equal option
  var testOption = clickedOption.slice(0, 6);
  // console.log(clickedOption);
  //only run code if the user clicks on a button
  console.log(testOption);
  if (testOption !== 'option') {
    console.log('leaving');
    return;
  }
  // gets a new random question
  // checking
  // console.log(newQuestion.amount);
  // loading the text onto the page
  var newQuestion = getRandomQuestion();

  newQuestion.loadText();
  //computing differences in fantastic if else blocks
  if (newQuestion.resource === 'energy') {
    currentPlayer.energy -= newQuestion.amount;
    // console.log('i am energy');

  } else if (newQuestion.resource === 'time') {
    currentPlayer.time -= newQuestion.amount;
    // console.log('i am time');

  } else if (newQuestion.resource === 'money') {
    currentPlayer.money -= newQuestion.amount;
    // console.log('i am money');
  }
  // change the players resources based on the option that they clicked on
  if (clickedOption === 'option1') {
    // currentPlayer.money -= 5;

    currentPlayer.distanceTravelled += 3;
    // console.log(currentPlayer);
  } else if
  (clickedOption === 'option2') {
    // currentPlayer.time -= 5;

    currentPlayer.distanceTravelled += 2;
    // console.log(currentPlayer);
  }
  else if
  (clickedOption === 'option3') {
    // currentPlayer.energy -= 5;
    currentPlayer.distanceTravelled += 100;
    // console.log(currentPlayer);
  }
  // supposed saving progress as the player goes
  saveProgress();

  // if user at end, they win
  //TODO: Move player to leaderboard when game is over
  if (currentPlayer.distanceTravelled >= endPoint) {
    //this is where the game ends
    optionsElement.removeEventListener('click', optionClick);
    alert('YOU WIN');
    currentPlayer.finalScore = (currentPlayer.energy + currentPlayer.time + currentPlayer.money);
    localStorage.setItem('currentPlayer', JSON.stringify(currentPlayer));
    console.log(currentPlayer.finalScore);
    return;
  }
  // if player has 0 of any resource = LOSER
  else if ((currentPlayer.money <= 0) || (currentPlayer.energy <= 0) || (currentPlayer.time <= 0)) {
    optionsElement.removeEventListener('click', optionClick);
    alert('YOU LOSER');
    return;
  }
  render();
}


// making the event listener listen (lol)
optionsElement.addEventListener('click', optionClick);

// calling the function if the user stored in LS
getUser();

// checks the player on page load
var currentPlayer = playerArray[playerArray.findIndex(findPlayer)];

// calling the first Question function
initialQuestion.loadText();
render();






