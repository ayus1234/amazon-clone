// Shopping Cart functionality
let cartCount = 0;
const cartIcon = document.querySelector('.nav-cart');

function updateCart() {
    cartCount++;
    if (!document.querySelector('.cart-count')) {
        const cartBadge = document.createElement('span');
        cartBadge.className = 'cart-count';
        cartIcon.insertBefore(cartBadge, cartIcon.firstChild);
    }
    document.querySelector('.cart-count').textContent = cartCount;
}

// Search functionality
const searchInput = document.querySelector('.search-input');
const searchSelect = document.querySelector('.search-select');

// Add more categories
const categories = ['All', 'Arts & Crafts', 'Automotive', 'Baby', 'Beauty & Personal Care', 'Books', 'Computers', 'Digital Music', 'Electronics', 'Fashion', 'Home & Kitchen'];
categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category.toLowerCase();
    option.textContent = category;
    searchSelect.appendChild(option);
});

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Add to cart animation
function addToCartAnimation(event) {
    const button = event.currentTarget;
    button.classList.add('added');
    setTimeout(() => {
        button.classList.remove('added');
    }, 1500);
    updateCart();
}

// Initialize "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCartAnimation);
    });
});
