function displayProducts(productsToDisplay) {
    const productDisplay = document.getElementById('product-display-g');
    productDisplay.innerHTML = ''; // Clear previous content

    productsToDisplay.forEach(product => {
        const productElement = `
            <div class=" product p-4 mb-4 flex flex-col items-center">
                <img class="mx-auto w-40" src="${product.image}" alt="${product.title}">
                <div class="justify-between">
                    <div class="mx-auto text-center">
                        <div class="text-gray-300">${product.brand}</div>
                        <h2 class="text-lg font-semibold mt-2">${product.title}</h2>
                        <div class="mt-4">${product.price}</div>
                        <div class="btn-cluster mx-auto mt-4">
                            <button data-i18n="buy_now" class="green-btn text-white border mr-2 py-2 px-4 rounded-lg">${product.buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productDisplay.innerHTML += productElement;
    });
}

function filterProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Display all products when the page loads
window.onload = function() {
    displayProducts(products);
};

function filterProductstag(tag) {
    const filteredProductstag = products.filter(product => product.tag === tag);
    displayProducts(filteredProductstag);
}