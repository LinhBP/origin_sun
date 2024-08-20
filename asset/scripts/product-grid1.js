document.addEventListener('DOMContentLoaded', async function () {
    const productGrid = document.getElementById('product-display-g');

    // Fetch products from JSON Server
    async function fetchProducts() {
        const response = await fetch('http://localhost:3000/products');
        const products = await response.json();
        return products;
    }

    // Render products in the grid
    function renderProducts(products) {
        productGrid.innerHTML = '';
        products.forEach(product => {
            const productHtml = `
                <div class="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer">
                    <img src="${product.image}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h2 class="font-bold text-lg mb-2">${product.title}</h2>
                        <p class="text-gray-700 mb-4">${product.price}</p>
                        <button data-id="${product.id}" class="buy-now bg-green-500 text-white px-4 py-2 rounded">
                            Buy Now
                        </button>
                    </div>
                </div>
            `;
            productGrid.innerHTML += productHtml;
        });
        attachBuyNowListeners();
    }

    // Attach click event to "Buy Now" buttons
    function attachBuyNowListeners() {
        const buyNowButtons = document.querySelectorAll('.buy-now');
        buyNowButtons.forEach(button => {
            button.addEventListener('click', async function () {
                const productId = this.getAttribute('data-id');
                const product = await fetchProductById(productId);
                openProductDetailModal(product);
            });
        });
    }

    // Fetch product by ID
    async function fetchProductById(id) {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        const product = await response.json();
        return product;
    }

    // Open product detail modal
    function openProductDetailModal(product) {
        // Use the data from product to fill in the details in your modal
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div class="bg-white p-8 rounded-lg max-w-md">
                    <h2 class="font-bold text-xl mb-4">${product.title}</h2>
                    <img src="${product.image}" class="w-full h-48 object-cover mb-4">
                    <p class="text-gray-700 mb-4">${product.desc}</p>
                    <p class="text-gray-700 mb-4">${product.price}</p>
                    <button id="addToCart" class="bg-blue-500 text-white px-4 py-2 rounded">
                        Add to Cart
                    </button>
                    <button id="closeModal" class="bg-red-500 text-white px-4 py-2 rounded mt-2">
                        Close
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        document.getElementById('closeModal').addEventListener('click', () => {
            modal.remove();
        });

        document.getElementById('addToCart').addEventListener('click', () => {
            addToCart(product);
            alert('Product added to cart!');
            modal.remove();
        });
    }

    // Add product to cart
    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Initial load
    const products = await fetchProducts();
    renderProducts(products);
});
