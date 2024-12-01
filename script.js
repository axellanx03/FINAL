function exploreMenu() {
    alert("Exploring the menu...");
}

function orderNow() {
    alert("Ordering functionality not implemented.");
}

document.getElementById('signIn').addEventListener('click', function() {
    window.location.href = 'sign-in.html';
});

// Add event listener for the Menu button
document.querySelector('Menu').addEventListener('click', function() {
    window.location.href = 'menu.html';
});

document.getElementById('backToMenu').addEventListener('click', function() {
    window.location.href = 'menu.html'; // Redirect back to the menu
});

// Add functionality for the continue button if needed
document.querySelector('.continue-button').addEventListener('click', function() {
    // Proceed to the next step in the checkout process
    alert("Proceeding to payment...");
});

document.getElementById('editDetailsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form submission logic here
    alert('Changes saved successfully!');
});
