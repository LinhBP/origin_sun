document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        fetch(`http://localhost:3000/products/${productId}`)
            .then(response => response.json())
            .then(product => {
                if (product) {
                    //product details
                    document.querySelector('.h1').textContent = product.title;
                    document.querySelector('.mb-2:nth-child(2)').textContent = product.brand;
                    document.querySelector('.mb-2:nth-child(3)').textContent = product.price;
                    document.querySelector('.overflow-scroll').textContent = product.desc;
                    document.querySelector('.slider-img1').src = product.image;
                } else {
                    console.error('Product not found');
                }
            })
            .catch(error => console.error('Error fetching product details:', error));
    } else {
        console.error('No product ID found in URL');
    }
});
