// JavaScript functionality for Hiba Fashion

// Cart array to store selected products
let cart = [];

// Function to add product to cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

// Function to update cart UI
function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalSpan = document.getElementById('cart-total');

    // Clear existing cart items
    cartItemsContainer.innerHTML = '';

    // Add all cart items
    let total = 0;
    cart.forEach((product) => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${product.name} - $${product.price}`;
        cartItemsContainer.appendChild(cartItem);
        total += product.price;
    });

    // Update total price
    cartTotalSpan.textContent = total.toFixed(2);
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productName = button.previousElementSibling.previousElementSibling.textContent;
        const productPrice = parseFloat(button.previousElementSibling.textContent.replace('Price: $', ''));
        addToCart(productName, productPrice);
    });
});
