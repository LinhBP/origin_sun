document.addEventListener('DOMContentLoaded', () => {
    loadCartItems();

    function loadCartItems() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const tableBody = document.querySelector('tbody');

        if (cart.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="6" class="text-center py-4">Your cart is empty</td></tr>';
        } else {
            //Nhom items voi title or id 
            const groupedCart = cart.reduce((acc, product) => {
                const existingProduct = acc.find(item => item.title === product.title);
                if (existingProduct) {
                    existingProduct.quantity += 1;
                } else {
                    acc.push({ ...product, quantity: 1 });
                }
                return acc;
            }, []);

            tableBody.innerHTML = '';
            groupedCart.forEach((product, index) => {
                const row = `
                    <tr class="border-b odd:bg-white">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${product.title}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.brand}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.price}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <img src="${product.image}" alt="${product.title}" class="w-20 h-20 object-cover">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.quantity}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button class="text-red-500 remove-btn" data-index="${index}">Remove</button>
                        </td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });

            //remove
            document.querySelectorAll('.remove-btn').forEach(button => {
                button.addEventListener('click', (event) => {
                    const index = event.target.getAttribute('data-index');
                    removeCartItem(index, groupedCart);
                });
            });
        }
    }

    function removeCartItem(index, groupedCart) {
        const productToRemove = groupedCart[index];
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Giam quantity hoac remove item
        cart = cart.filter(product => {
            if (product.title === productToRemove.title) {
                if (productToRemove.quantity > 1) {
                    productToRemove.quantity -= 1;
                    return true;
                } else {
                    return false;
                }
            }
            return true;
        });

        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartItems(); // reload lai cart items
    }
});
