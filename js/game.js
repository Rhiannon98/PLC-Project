'use strict';

// TODO: get this working ... better


var endPoint = 45;


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
  this.score = 0;
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
new Question('You see a friend on your commute! She has an extra coffee and a donut! Your energy level is increased by 11! Choose the next method of transportation below to your next stop.', 'energy', -4);
new Question('You are exhausted from partying last night! Your energy level suffers (-5 energy). Choose the next method of transportation', 'energy', 5);
new Question('Rich Uncle Pennybags has passed away. Luckily you were his most favorite of the neices and nephews. Collect your inheritance! (Money +20)', 'money', -20);
new Question('Whomp Whomp! A $8 billion dollar tunnel-digging machine has broked down after colliding with a coca-cola bottle cap. This is causing a slowdown  on every route! (Time -5)', 'time', 5);
new Question('That was weird! Your transit route went exactly as expected. How long will that last?', 'energy', -1);
new Question('Where is all the traffic? Does everyone else have a holiday except for you? (Time +5)', 'time', -5);
new Question('Not again! Somehow a third avenue crazy has interupted your commute. You try to politely say that you do not have spare money but get bombarded with insults. (Energy -5)', 'energy', 5);
new Question('You pass some tents, they are really close to the light intersection that you are at. Suddenly, a man pops out of the tent and begins dancing and prancing around with a large stick in the middle of the intersection. The police must get involved, you get interviewed about the incident for being a witness. You lose time.', 'time', 4);
new Question('Suddenly the clouds that have been hovering the entire day open up and let loose their tears. The rain comes pouring down in waves, soaking everything through, even those people inside buildings. Everyone begins to shiver with the cold. You pull your jacket closer to you and press on. Just as quickly as it appears it leaves. Classic Seattle.', 'energy', 3);
new Question('It starts as a little white coating that gets added to everything, just a tiny bit of snow. But soon enough it comes down in a giant, swirling storm. The blizzard creates a wall of ice that stops all transit for a little bit. However you are nothing if not resourceful and are able to scale the wall, but it takes a while.', 'time', 4);
new Question(' Quite suddenly an owl lands on you with a small letter attached to its leg. You take the letter out and begin to read it. It is an acceptance letter for Hogwarts. You debate to yourself the merits of dropping this whole web developer thing and becoming a wizard, but eventually decide that while being a wizard would be very cool, it would not pay the bills. You resume your journey a short time later.', 'time', 1);
new Question('A cat brushes your leg, so you move down to begin petting it. You notice that it is carrying a five dollar bill in its mouth. You attempt to remove the dollar from its mouth, but the cat will have none of it. You stare it down and prepare for the inevitable duel to the death. As you both circle each other, waiting for an opportunity to strike, a five dollar bill falls from the sky. You pick it up and you and the cat go on your way, death feud forgotten.', 'money', -5);
new Question('Disturbingly, transit is working and on time. Nothing goes wrong and nothing unusual happens. You are fairly certain you have entered an alternate universe somehow.', 'time', 0);
new Question('A section of the city has been closed off by police for reason they refuse to discuss. You have to take a large detour around them. When you finish the detour you notice that they have moved downward and you need to take another detour. Finally you get ahead of the police who seem to be methodically searching this stree for something or someone.', 'time', 2);
new Question('A bank robbery is occuring, but the robbers are short handed. They offer you a portion of the take if you help them out. You don your ridiculous face mask and take the fire extinguisher they give you, then walk into the bank. Several confusing minutes later you are getting out of a getaway van at your next stop, your pockets considerably heavier. +40 Money', 'money', -40);
new Question('You are on your usual commute, suddenly you here screaming coming from behind you. The man is just screaming \'CHOCOLATE\' as loudly as he can as he gets closer to you. He grabs you by your shirt collar and lets another scream reverberate your brain. He calmly put you down, hands you money and steals your chocolate bar. You are unsure about this situation....  the distraction delayed your commute.', 'time', 1);
new Question('Someone got offended, planet Earth stopped its orbit, and now everyone is dead. The planet gets to start over, but you lose.', 'energy', 100);
new Question('A pet pig ran into the street and totalled a Prius. Everyone stops to pet the pig, beacuse it\'s got and ouchy. You win 10 energy points, because one less Prius.', 'energy', -10);
new Question('A siren begins to blare, as usual in a over-populated city. You and everyone else stops to allow them to pass, you are minorly inconvenienced.', 'time', 1);
new Question('Miss Peregrine invited you in her time-loop, now you stuck in infinite commute.', 'time', 100);
new Question('You feel a grumbling in your stomach, and a slight discomfort. You hope your commute goes faster so that you are able to get to your destination to use the clean bathrooms there as opposed to anything that is public.', 'energy', 1);
new Question('You trip and faceplant the asphalt, your pride is hurt and you had most certainly slowed down. But! You have found a $10 bill, it almost gets you a hand-crated gluten free tulipmilk-latte.', 'money', -10);
new Question('There is a warning sign that you or anyone else have ever seen, judging from other bystanders faces. The sign is like an animal crossing sign, except you do not recognize the animals pictured. Suddenly, you understand as a hoard of tourists on segways goes by you. Oh lord, it is like an entire office building of people going by, you feel yourself aging and becoming more impatient as the hundreds of people on slow segways blow by.', 'time', 3);
new Question('It is really early today and as you pass a misty field, you see a gentleman shuffling towards you. On closer inspection OMFG! IT\'S THE ZOMBIE APOCALIPSE! You enter warp speed, and get to the school ahead of time. You Win! (At least for now, go get yourself a cat \'cause you know OMFG! IT\'S THE ZOMBIE APOCALIPSE!', 'distanceTravelled', -100);
new Question('You become lost in thought and are suddenly at your destination. Wait... no, this is the space needle. WHY ARE YOU HERE?!?! HOW DID YOU COMPLETELY MESS UP YOUR ROUTE LIKE THIS?!?! *sigh* you have to backtrack now. Bummer. -15 Distance To Destination.', 'distanceTravelled', -15);

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
    new Player(newUser, 40, 40, 40);

  } else {
    playerArray = JSON.parse(progress);
    var checkUser = checkName(newUser);
    if (checkUser === false) {
      //if player DNE, make player
      new Player(newUser, 40, 40, 40);
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
function render() {
  renderResources();
  renderProgressBar();
}
// creating a a list of the players resources as they update
function renderResources() {
  energyElement.textContent = 'Energy: ' + currentPlayer.energy;
  moneyElement.textContent = 'Money: ' + currentPlayer.money;
  timeElement.textContent = 'Time: ' + currentPlayer.time;
}

//TODO: Write renderMap
// function renderMap(){

// }

// name is self explanatory
function renderProgressBar() {
  // to ensure a browser supports canvas elements
  // we will refuse to draw the chart
  if (canvasElement.getContext) {
    // we need to get the drawing box (context) in order to render the canvas
    var context = canvasElement.getContext('2d');
    // calculated where the progress bar would be
    // % progress the player made = how 'full' the bar is
    var travelledAmount = currentPlayer.distanceTravelled / endPoint * canvasElement.width;
    // color var to be able to change the color later in this function
    var color = '#000000';
    // TODO: get good colours

    // rest of the ifs and else ifs are assigning the color for the bar at that % it os filled
    if (currentPlayer.distanceTravelled / endPoint < 0.40) {
      color = '#ff0000';
    }
    else if (currentPlayer.distanceTravelled / endPoint < 0.5) {
      color = '#ff6200';
    }
    else if (currentPlayer.distanceTravelled / endPoint < 0.75) {
      color = '#00ff00';
    }
    else {
      color = '#0000ff';
    }
    // draws the amount the player has progressed
    context.fillStyle = color;
    context.fillRect(0, canvasElement.height - 30, travelledAmount, 30);
    // drawng the empty box that they 'fill'
    context.fillStyle = '#000000';
    context.strokeRect(0, canvasElement.height - 30, canvasElement.width, 30);

  }
  // if browser does not render canvas element, console gets this
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
  if (newQuestion.resource === 'distanceTravelled') {
    currentPlayer.resources += newQuestion.amount;
  }
  else if (newQuestion.resource === 'energy') {
    currentPlayer.energy -= newQuestion.amount;

  } else if (newQuestion.resource === 'time') {
    currentPlayer.time -= newQuestion.amount;

  } else if (newQuestion.resource === 'money') {
    currentPlayer.money -= newQuestion.amount;
  }
  // change the players resources based on the option that they clicked on
  if (clickedOption === 'option1') {
    currentPlayer.time -= 3;
    currentPlayer.money -= 10;
    currentPlayer.energy -= 2;
    currentPlayer.distanceTravelled += 20;
  } else if
  (clickedOption === 'option2') {
    currentPlayer.time -= 7;
    currentPlayer.money -= 5;
    currentPlayer.energy -= 2;
    currentPlayer.distanceTravelled += 10;
  }
  else if
  (clickedOption === 'option3') {
    currentPlayer.time -= 15;
    currentPlayer.money -= 1;
    currentPlayer.energy -= 10;
    currentPlayer.distanceTravelled += 5;
  }

  currentPlayer.score = currentPlayer.energy + currentPlayer.time + currentPlayer.money;
  // supposed saving progress as the player goes
  saveProgress();

  // if user at end, they win
  //TODO: Move player to leaderboard when game is over
  if (currentPlayer.distanceTravelled >= endPoint) {
    //this is where the game ends
    optionsElement.removeEventListener('click', optionClick);
    alert('YOU WIN');
    localStorage.setItem('currentPlayer', JSON.stringify(currentPlayer));
    console.log(currentPlayer.finalScore);
    location.href = 'leaderboard.html';
    return;
  }
  // if player has 0 of any resource = LOSER
  else if (currentPlayer.money <= 0) {
    optionsElement.removeEventListener('click', optionClick);
    alert('There\'s a nice tent on third avenue with your name on it. You\'re out of money. You lose.');
    location.href = 'leaderboard.html';
    return;
  }
  else if (currentPlayer.energy <= 0) {
    optionsElement.removeEventListener('click', optionClick);
    alert('I get it, really. Go take a nap and try again another day. You\'re out of energy. You lose.');
    location.href = 'leaderboard.html';
    return;
  } else if (currentPlayer.time <= 0) {
    optionsElement.removeEventListener('click', optionClick);
    alert('HOW EMBARRASSING! You are way too late. You ran out of time. You lose.');
    location.href = 'leaderboard.html';
  }
  // calling the render function to render all of the canvas elements per click
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
// initial empty bar on page load
// unless progress cannot be shown... sucks for them....
render();






