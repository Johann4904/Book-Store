// BookList.js
import useAppContext from "../context/useAppContext";
import { useNavigate } from 'react-router-dom';

const BookList = () => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const addToCart = (book) => {
    dispatch({ type: 'ADD_TO_CART', payload: book });
  };

  return (
    <div className="bookBox">
      <h2>Book List</h2>
      <p>Welcome, {state.userName}!</p>
      <ul>
        {state.books.map((book) => (
          <li key={book.idCode}>
            {/* ... (vorheriger Code bleibt unverändert) */}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/cart')}>Go to Cart</button>
    </div>
  );
};

export default BookList;
