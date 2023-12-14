// ShoppingCart.js
import  useAppContext  from "../context/useAppContext";

const ShoppingCart = () => {
  const { state } = useAppContext();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.cart.map((item) => (
          <li key={item.idCode}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;

