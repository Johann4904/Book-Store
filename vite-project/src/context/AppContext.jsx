// AppContext.js
import { createContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

const initialState = {
  userName: '',
  books: [],
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return { ...state, userName: action.payload };
    case 'SET_BOOKS':
      return { ...state, books: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    // Add more cases for modifying the state as needed
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Fetch books from the provided API
    fetch('https://edwardtanguay.vercel.app/share/techBooks.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_BOOKS', payload: data });
      })
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
