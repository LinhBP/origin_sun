document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(productsData => {
            window.products = productsData;  
            displayProducts(products);  

            document.querySelectorAll('.green-btn').forEach((button, index) => {
                button.addEventListener('click', () => {
                    addToCart(products[index]);
                });
            });

            document.querySelectorAll('.text-lg.font-semibold').forEach((titleElement, index) => {
                titleElement.style.cursor = 'pointer'; 
                titleElement.addEventListener('click', () => {
                    window.location.href = `product-detail.html?id=${products[index].id}`;
                });
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}
