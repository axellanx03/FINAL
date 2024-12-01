document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    // Placeholder for sign-in logic
    localStorage.setItem('isLoggedIn', 'true'); // Set login state
    window.location.href = 'index.html'; // Redirect to main interface
});

// Check for query parameters to display messages
const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get('message');
if (message) {
    alert(decodeURIComponent(message)); // Display the message in an alert
}