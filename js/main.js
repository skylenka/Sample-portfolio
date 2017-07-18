jQuery(document).ready(function($) {

  var form = $('form');
  var errorMessage = $('.error-message');
  var successMessage = $('.success-message');
  var email = $('#email');
  var name = $('#name');
  var surname = $('#surname');
  var agree = $('#agree');

  form.submit(function(event) {
      var errors = [];

      if (email.val().indexOf('@') === -1) errors.push("Email address must include @");
      if (name.val().length < 6) errors.push("Your name is too short");
      if (surname.val().length < 3) errors.push("Your company name is too short");
      if (agree.checked === false) errors.push('You have to accept my terms');

      if (errors.length > 0) {
        event.preventDefault();
        errorMessage.text(errors.join(' & '));
        successMessage.text('');
      } else {
        errorMessage.text('');
        successMessage.text('Contact form correct!');
      }
  });

  $('nav').onePageNav();



});
