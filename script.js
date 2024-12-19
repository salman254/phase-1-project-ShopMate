// Wait for the DOM content to load  
document.addEventListener('DOMContentLoaded', async () => { 
    const apiURL = 'https://fakestoreapi.com/products'; 
    let products = []; 
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve the cart from localStorage or initialize as an empty array if no data exists
    updateCart();

    // Load products from API or Cache
    await loadProducts();

    async function loadProducts() {
        const cachedProducts = localStorage.getItem('products'); 
        if (cachedProducts) {
            products = JSON.parse(cachedProducts); 
            displayProducts(products); 
        } else {
            await fetchProducts(); 
        }
    }

    // Function to fetch products from the API and handle errors and also display the products
    async function fetchProducts() {
        try { 
            const response = await fetch(apiURL); 
            if (!response.ok) throw new Error('Network response was not ok'); 
            products = await response.json(); 
            localStorage.setItem('products', JSON.stringify(products)); 
            displayProducts(products); 
        } catch (error) {
            console.error('Error fetching products:', error); 
        }
    }

    // Displaying products on the webpage
    function displayProducts(products) {
        const productList = document.getElementById('product-list'); 
        productList.innerHTML = ''; 
        products.forEach(product => {
            const productCard = document.createElement('div'); // A div for the product card
            productCard.classList.add('product'); // CSS class product - Style in CSS 
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" style="width:100px;height:auto;"> <!-- Product image -->
                <h3>${product.title}</h3> <!-- Product title -->
                <p>${product.description.substring(0, 60)}...</p> <!-- Truncated product description -->
                <p><strong>$${product.price}</strong></p> <!-- Product price -->
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button> <!-- Add to Cart button -->
            `;
            productList.appendChild(productCard); 
        });
    }

    // Search products based on user input
    document.getElementById('search').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase(); 
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm) // To Filter products by title
        );
        displayProducts(filteredProducts); // Display the filtered products
    });

    // Filter products by category
    document.getElementById('category').addEventListener('change', (e) => {
        const category = e.target.value; // To get the selected category
        const filteredProducts = category
            ? products.filter(product => product.category === category) // Filter products by category
            : products; // Show all products if no category is selected
        displayProducts(filteredProducts); // Display the filtered products
    });

    // Add a product to the cart
    document.getElementById('product-list').addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) { // Check if the clicked element is Add to Cart button
            const productId = e.target.dataset.id; 
            addToCart(productId); // Call the function to add the product to the cart
        }
    });

    // Function to add a product to the cart
    function addToCart(productId) {
        const product = products.find(p => p.id == productId); 
        if (product) {
            cart.push(product); // Add the product to the cart array
            updateCart(); 
            saveCartToLocalStorage(); 
        } else {
            console.error('Product not found:', productId); 
        }
    }

    // Function to update the cart UI and calculate the total price
    function updateCart() {
        const cartItems = document.getElementById('cart-items'); 
        const totalElement = document.getElementById('cart-total'); 

        cartItems.innerHTML = ''; 
        let total = 0; 

        cart.forEach((item, index) => {
            const li = document.createElement('li'); 
            li.textContent = `${item.title} - $${item.price}`; // Display the product title and price

            // Create a Remove button for each cart item
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove'; 
            removeButton.classList.add('remove-from-cart'); // Add a CSS class for styling
            removeButton.dataset.index = index; 
            li.appendChild(removeButton); 
            cartItems.appendChild(li); 

            total += item.price; 
        });

        totalElement.textContent = `Total: $${total.toFixed(2)}`; 
    }

    // Remove a product from the cart
    document.getElementById('cart-items').addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-from-cart')) { 
            const index = e.target.dataset.index; 
            removeFromCart(index); 
        }
    });

    // Function to remove a product from the cart by index
    function removeFromCart(index) {
        cart.splice(index, 1); 
        updateCart(); 
        saveCartToLocalStorage(); 
    }

    // Clear all items from the cart
    document.getElementById('clear-cart').addEventListener('click', () => {
        cart.length = 0; 
        updateCart(); 
        saveCartToLocalStorage(); 
    });

    // Function to save the cart to localStorage
    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart)); 
    }

    // Toggle light/dark mode
    document.getElementById('toggle-theme').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode'); // To add or remove the dark-mode class
    });

    // Add dark mode styles dynamically
    const style = document.createElement('style'); // Create a new style element
    style.textContent = `
      .dark-mode {
          background-color: #121212;
          color: #ffffff;
      }
      .dark-mode header {
          background-color: #1f1f1f;
      }
      .dark-mode #cart {
          background-color: #1e1e1e;
          border-left: 1px solid #333;
      }
    `;
    document.head.appendChild(style); 
});
