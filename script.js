// script.js

// Function to toggle visibility of project details
function toggleProjectDetails(projectId) {
    const projectDetails = document.getElementById(projectId);
    projectDetails.classList.toggle('hidden');
}

// Function to send a contact form (you can implement this as needed)
function sendContactForm() {
    // Add your contact form logic here
    alert('Contact form submitted!');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners or additional initialization logic here
});


// script.js

// Function to send a contact form
function sendContactForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform any necessary validation before submitting the form

    // For demonstration purposes, we'll just log the form data to the console
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // You can add AJAX or other logic to submit the form data to your server here

    // Prevent the form from submitting in the traditional way
    event.preventDefault();
}
