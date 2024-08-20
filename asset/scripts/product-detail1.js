// This will handle product details and adding to cart from the detail view
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.getElementById('addToCart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            fetchProductAndAddToCart(productId);
        });
    }

    async function fetchProductAndAddToCart(productId) {
        const response = await fetch(`http://localhost:3000/products/${productId}`);
        const product = await response.json();
        addToCart(product);
    }

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
    }
});
