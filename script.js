// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display success message
    document.getElementById('form-message').classList.remove('hidden');
    
    // Optionally, you can clear the form fields here
    document.getElementById('contact-form').reset();
});
