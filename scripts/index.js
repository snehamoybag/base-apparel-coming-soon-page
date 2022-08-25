'use strict'
/* ---------------------- */
const EMAIL_INPUT = document.querySelector('#email-input');

EMAIL_INPUT.addEventListener('invalid', function(event) {
  // hides the invalid tooltip
  event.preventDefault();
  // shows error when user tries to submit an empty email
  this.parentElement.classList.add('active');
});

EMAIL_INPUT.addEventListener('focus', function() {
  // removes error msg when user focuses/opens on/the input field
  this.parentElement.classList.remove('active');
});