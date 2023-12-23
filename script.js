document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');

    let cart = [];

    // Add a product to the cart
    function addToCart(name, price) {
        cart.push({ name, price });
    }

    // Remove a product from the cart by index
    function removeFromCart(index) {
        cart.splice(index, 1);
    }

    // Update the cart UI
    function updateCartUI() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((product, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${product.name} - $${product.price} <button class="remove-from-cart" data-index="${index}">Remove</button>`;
            cartItems.appendChild(li);
            total += product.price;
        });

        cartTotal.textContent = `$${total}`;
    }

    products.forEach((product, index) => {
        const addToCartButton = product.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', () => {
            const productName = product.querySelector('h2').textContent;
            const productPrice = parseFloat(product.querySelector('p').textContent.replace('Price: $', ''));
            addToCart(productName, productPrice);
            updateCartUI();
        });
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart')) {
            const index = event.target.getAttribute('data-index');
            removeFromCart(index);
            updateCartUI();
        }
    });
});
