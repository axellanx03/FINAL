document.addEventListener('DOMContentLoaded', function() {
    updateCheckoutInterface();
    
    document.getElementById('backToMenu').addEventListener('click', () => {
        window.location.href = 'menu.html';
    });
    
    document.querySelector('.continue-button').addEventListener('click', () => {
        // Add payment processing logic here
        console.log('Processing payment...');
    });

    // Open credit card modal
    document.querySelector('.payment-button').addEventListener('click', function() {
        document.getElementById('creditCardModal').style.display = 'flex';
    });

    // Close modal when the close button is clicked
    document.getElementById('closeModal').addEventListener('click', function() {
        document.getElementById('creditCardModal').style.display = 'none';
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('creditCardModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.getElementById('cashButton').addEventListener('click', function() {
        document.getElementById('cashNotification').style.display = 'block'; // Show the notification panel
    });

    // Close notification panel
    document.getElementById('closeNotification').addEventListener('click', function() {
        document.getElementById('cashNotification').style.display = 'none'; // Hide the notification panel
    });

    const paymentButtons = document.querySelectorAll('.payment-button');
    const continueButton = document.getElementById('continueButton');

    paymentButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'selected' class from all buttons
            paymentButtons.forEach(btn => btn.classList.remove('selected'));
            // Add 'selected' class to the clicked button
            this.classList.add('selected');
        });
    });

    // Handle the Credit/Debit Card submission
    document.getElementById('creditCardForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Display notification
        const notification = document.createElement('div');
        notification.className = 'notification-panel';
        notification.innerText = 'Information saved';
        document.body.appendChild(notification);

        // Automatically remove the notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);

        // Optionally, you can add your form submission logic here
        // For example, send the data to a server or process it
    });

    // Handle the Continue button click
    continueButton.addEventListener('click', function() {
        // Remove 'selected' class from all buttons when Continue is clicked
        paymentButtons.forEach(btn => btn.classList.remove('selected'));
    });
});

function updateCheckoutInterface() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Update order count in title
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const orderCount = document.querySelector('h2');
    orderCount.textContent = `Review order (${totalItems})`;
    
    // Update preparation time message
    const timeMessage = document.querySelector('p');
    if (totalItems === 0) {
        timeMessage.textContent = 'Ready in 0 minutes';
    } else {
        const preparationTime = totalItems * 4;
        const minTime = preparationTime;
        const maxTime = preparationTime + 2;
        timeMessage.textContent = `Ready in around ${minTime}–${maxTime} minutes`;
    }
    
    // Update order items
    const orderSummary = document.querySelector('.order-summary');
    let subtotal = 0;
    
    orderSummary.innerHTML = '';
    
    if (cart.length === 0) {
        orderSummary.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h3 style="color: #666;">Your cart is empty</h3>
                <p style="color: #888;">Add items from our menu to start your order</p>
            </div>
        `;
        return;
    }
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        const itemElement = `
            <div class="order-item">
                <img src="${item.image}" alt="${item.name}" class="order-image">
                <div class="order-details">
                    <h4>${item.name}</h4>
                    <p>Quantity: ${item.quantity}</p>
                    <p>₱${item.price.toFixed(2)} each</p>
                    <p>Total: ₱${itemTotal.toFixed(2)}</p>
                </div>
                <button class="remove-item" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
        orderSummary.insertAdjacentHTML('beforeend', itemElement);
        subtotal += itemTotal;
    });
    
    // Calculate and display total (removed tax calculation)
    const totalsElement = `
        <div class="total">
            <p>Subtotal: ₱${subtotal.toFixed(2)}</p>
            <h3>Total: ₱${subtotal.toFixed(2)}</h3>
        </div>
    `;
    orderSummary.insertAdjacentHTML('beforeend', totalsElement);
}

// Add this new function for removing items
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Remove the item from cart
    cart.splice(index, 1);
    
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update the checkout interface
    updateCheckoutInterface();
    updateCartNotificationCount(); // Update notification count in the menu
}