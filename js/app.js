document.addEventListener('DOMContentLoaded', function () {

  var form = document.querySelector('form');
  var errorMessage = document.querySelector('.error-message');
  var successMessage = document.querySelector('.success-message');
  var email = document.querySelector('#email');
  var name = document.querySelector('#name');
  var surname = document.querySelector('#surname');
  var agree = document.querySelector('#agree');

  form.addEventListener('submit', function (event) {
    var errors = [];

    if (email.value.indexOf('@') === -1) errors.push("Email address must include @");
    if (name.value.length < 6) errors.push("Your name is too short");
    if (surname.value.length < 3) errors.push("Your company name is too short");
    if (agree.checked === false) errors.push('You have to accept my terms');

    if (errors.length > 0) {
      event.preventDefault();
      errorMessage.innerText = errors.join('\n');
      successMessage.innerText = '';
    } else {
      errorMessage.innerText = '';
      successMessage.innerText = 'Contact form correct!';
    }
  });

});

jQuery(document).ready(function($) {

  // Hook up the current state to the nav bar
  $('nav').onePageNav();

});
