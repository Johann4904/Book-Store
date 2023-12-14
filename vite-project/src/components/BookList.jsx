// BookList.js
import useAppContext from "../context/useAppContext";

const BookList = () => {
  const { state, dispatch } = useAppContext();

  const addToCart = (book) => {
    dispatch({ type: 'ADD_TO_CART', payload: book });
  };

  return (
    <div className="bookBox">
      <h2>Book List</h2>
      <ul>
        {state.books.map((book) => (
          <li key={book.idCode}>
            <img src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`} alt={book.title} />
            <div>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <button onClick={() => addToCart(book)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
