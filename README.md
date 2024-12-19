# ShopMate
ShopMate is a dynamic, responsive, and interactive e-commerce website that allows users to browse, search, and filter products from an API. It features a shopping cart with functionality to add, remove, and clear items, as well as a toggleable light/dark mode for enhanced usability.

## Features
### 1. **Dynamic Product Display**
- Fetches product data from [FakeStoreAPI](https://fakestoreapi.com/).
- Displays products with images, titles, descriptions, and prices.
- Allows users to add items to the shopping cart.

### 2. **Search and Filter**
- **Search Bar**: Instantly search for products by their title.
- **Category Filter**: Narrow down the product list by selecting a category.

### 3. **Shopping Cart**
- Displays selected items with their prices.
- Calculates and displays the total cost of items.
- Options to remove individual items or clear the entire cart.
- Cart state persists across page reloads using `localStorage`.

### 4. **Light/Dark Mode**
- Easily switch between light and dark themes.
- Smooth transitions for a seamless experience.

### 5. **Responsive Design**
- Optimized for desktops, tablets, and mobile devices.
- Dynamic layout adapts to different screen sizes.

## Tech Stack

### Frontend
- **HTML**: For semantic structure and layout.
- **CSS**: For styling, animations, and responsiveness.
- **JavaScript**: For dynamic functionality and interactivity.
### API
- [FakeStoreAPI](https://fakestoreapi.com/): Provides sample e-commerce product data.

## Installation and Usage

### Steps to Run Locally
1. **Clone the repository**:

   git clone git@github.com:salman254/phase-1-project-ShopMate.git

2. **Navigate to the project directory**
    
    cd phase-1-project-ShopMate

3. **Open index.html in your browser**
    
    Open index.html via terminal using code . then run the live server.

**Code Structure**

**HTML**
- index.html: The main structure of the app, including the header, product list, and shopping cart.

**CSS**
- styles.css: Contains all the styling for the app, including responsive and dark mode styles.

**JavaScript**
- script.js: Handles all app logic:
1. Fetching and displaying products.
2. Managing the shopping cart.
3. Implementing search, filtering, and theme toggling.

**Key Functions**

## Product Management
- Fetches and displays products from the API.
- Allows filtering by categories and searching by name.

## Shopping Cart
- Add to Cart: Adds selected products to the cart.
- Remove from Cart: Removes specific items.
- Clear Cart: Empties the entire cart.
- LocalStorage: Persists cart items across sessions.

## Light/Dark Mode
- Toggles between light and dark themes using CSS classes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any imformation or help feel free to reach out at 
Email - salmaanmohamed700@gmail.com
Phone - +254 714383839
