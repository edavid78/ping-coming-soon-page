$(document).ready(function() {
    $('#form').trigger("reset");
    $('#form').submit(function(e) {
      e.preventDefault();
      var email = $('#email').val();
  
      $(".error").remove();
  

      if (email.length < 1) {
        $('#submit').after('<span class="error">Whoops! It looks like you forgot to add your email</span>');
        $('#email').addClass('error-border');
        $('#submit').addClass('error-spacing');
      } else {
        var regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        var validEmail = regEx.test(email);
        if (!validEmail) {
          $('#submit').after('<span class="error">Please provide a valid email address</span>');
          $('#email').addClass('error-border');
          $('#submit').addClass('error-spacing');
        }else {
          
            $('#email').removeClass('error-border');
            $('#submit').addClass('error-spacing');
          
        }
      }
      
    });
  
  });