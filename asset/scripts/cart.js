document.addEventListener('DOMContentLoaded', function () {
    const cartTableBody = document.querySelector('tbody');

    function renderCartItems() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartTableBody.innerHTML = ''; // Clear existing content
        cart.forEach((item, index) => {
            const itemHtml = `
                <tr class="border-b odd:bg-white">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <img src="${item.image}" alt="${item.title}" class="w-16 h-16 object-cover">
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.title}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.price}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.desc}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.category}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button data-index="${index}" class="remove-from-cart bg-red-500 text-white px-2 py-1 rounded">Remove</button>
                    </td>
                </tr>
            `;
            cartTableBody.innerHTML += itemHtml;
        });

        attachRemoveFromCartListeners();
    }

    function attachRemoveFromCartListeners() {
        const removeButtons = document.querySelectorAll('.remove-from-cart');
        removeButtons.forEach(button => {
            button.addEventListener('click', function () {
                const index = this.getAttribute('data-index');
                removeFromCart(index);
            });
        });
    }

    function removeFromCart(index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1); // Remove item at index
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
    }

    renderCartItems();
});
