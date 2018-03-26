'use strict';

var userNameElement = document.getElementById('user');

function validateInput(event) {
  event.preventDefault();

  //proof of life
  alert(event.target.name.value);
}

userNameElement.addEventListener('submit', validateInput);