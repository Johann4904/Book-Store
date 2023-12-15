// ShoppingCart.js
import  useAppContext  from "../context/useAppContext";

const ShoppingCart = () => {
  const { state } = useAppContext();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {state.cart.map((item) => (
              <li key={item.idCode}>{item.title}</li>
            ))}
          </ul>
          {/* Add functionality for updating quantity or removing items */}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

