React-UseContext :

   - This React application demonstrates how to create a shopping cart using the Context API for state management. The cart allows users to increase or decrease the quantity of items, automatically updating the total quantity and amount.

Features :

   - Display a list of products with their price, quantity, and total cost.
   - Increase or decrease the quantity of each item.
   - Automatically update the total quantity and amount in the cart.

Technologies Used :

   - React
   - Context API
   - React Hooks

Usage :

   - The initial product list will be displayed on the screen.
   - Use the "+" and "-" buttons to increase or decrease the quantity of each item.
   - The total quantity and amount will update automatically as you adjust item quantities.

File Structure :

   - `src/context/CartContext.js`: Contains the context and reducer for managing the cart state.
   - `src/components/Cart.js`: Component for displaying the cart.
   - `src/components/Product.js`: Component for displaying individual products.
   - `src/App.js`: Main application component.

 How It Works :

   - The application uses React's Context API to manage the cart's state, ensuring that any changes to item quantities are immediately reflected across the application. This setup provides a seamless user experience and efficient state management.    

License :

   - This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
