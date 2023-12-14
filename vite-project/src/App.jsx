// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Hier wird 'Routes' hinzugefügt
import { AppProvider } from './context/AppContext';
import BookList from './components/BookList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
  <BrowserRouter>
      <AppProvider>
        <Routes>  {/* Hier wird 'Routes' statt 'Routers' verwendet */}
          <Route path="/" element={<BookList />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </AppProvider>
      </BrowserRouter>
  );
}

export default App;
