
// Add your JavaScript code here
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // You can add code here to handle form submission, such as sending data to a server or displaying a confirmation message.
    alert("Form submitted successfully!");
       // Reload the page after 2 seconds (2000 milliseconds)
       setTimeout(function() {
        location.reload();
    }, 2000);
});
