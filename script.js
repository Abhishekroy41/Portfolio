(function(){
    emailjs.init("abhiroy8986@gmail.com");
})();

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_q6yh4j7", "template_iq9y9w4", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        document.getElementById("form-message").textContent = "Message sent successfully!";
        contactForm.reset();
    }, function(error) {
        document.getElementById("form-message").textContent = "Failed to send message. Please try again.";
        console.error("EmailJS Error:", error);
    });
});
