// filepath: /c:/Users/hassa/OneDrive/Bureau/projet Feronnier/templatemo_528_elegance/js/form.js
$(function() {

    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };

        // Send the form using EmailJS.
        emailjs.send('service_hjqbqna', 'template_n790vgc', formData)
            .then(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('bg-danger');
                $(formMessages).addClass('bg-success');

                // Set the message text.
                $(formMessages).text('Your message successfully sent');

                // Clear the form.
                $('#name, #email, #message').val('');
            }, function(error) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('bg-success');
                $(formMessages).addClass('bg-danger');

                // Set the message text.
                $(formMessages).text('Oops! An error occurred and your message could not be sent.');
            });
    });

});