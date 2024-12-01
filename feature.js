// Function to show featured content
function showFeatured() {
    // Create featured content container
    const featuredContent = `
        <div class="featured-container">
            <div class="back-button-container">
                <button onclick="goBack()" class="back-button">
                    <i class="fas fa-arrow-left"></i> Back
                </button>
            </div>
            
            <div class="featured-banner">
                <img src="seasonal-drinks-banner.jpg" alt="Seasonal Featured Drinks">
            </div>

            <div class="featured-content">
                <h1 class="featured-title">PEPPERMINT, SPICE & EVERYTHING NICE</h1>
                <p class="featured-subtitle">For a Limited Time!</p>

                <div class="featured-items">
                    <div class="featured-item">
                        <h2>Peppermint Bark Velvet Ice</h2>
                        <p>Flavors of sweet cream and white chocolate blended with Espresso Dolce concentrate and garnished with whipped cream, a drizzle of chocolate syrup and crushed peppermint pieces.</p>
                    </div>

                    <div class="featured-item">
                        <h2>Butter Rum Latte</h2>
                        <p>Rich butter rum flavors combined with espresso, white chocolate sauce, steamed milk and topped with a caramel drizzle.</p>
                    </div>

                    <div class="featured-item">
                        <h2>Peppermint Bark Latte</h2>
                        <p>PJ's classic Latte sweetened with Ghirardelli white chocolate and peppermint syrup and garnished with whipped cream, a chocolate syrup drizzle and crushed peppermint pieces.</p>
                    </div>

                    <div class="featured-item">
                        <h2>Cookie Butter Latte</h2>
                        <p>PJ's NEW Cookie Butter Latte blends rich, spiced cookie butter with smooth espresso and creamy steamed milk. The Belgian-inspired sweetness, with hints of cinnamon, nutmeg, and ginger, creates a velvety, warm indulgence perfect for cozying up.</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Get the main content area
    const mainContent = document.querySelector('main');
    
    // Save the current content before replacing it
    if (!window.originalContent) {
        window.originalContent = mainContent.innerHTML;
    }

    // Replace main content with featured content
    mainContent.innerHTML = featuredContent;

    // Update active state of navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById('featuredBtn').classList.add('active');
}

// Function to go back
function goBack() {
    const mainContent = document.querySelector('main');
    if (window.originalContent) {
        mainContent.innerHTML = window.originalContent;
    } else {
        window.location.href = 'index.html';
    }
}

// Add these event listeners when the document loads
document.addEventListener('DOMContentLoaded', function() {
    // Handle featured button click
    const featuredBtn = document.getElementById('featuredBtn');
    if (featuredBtn) {
        featuredBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showFeatured();
        });
    }
});

