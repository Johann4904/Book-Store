// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import BookList from './components/BookList';
import ShoppingCart from './components/ShoppingCart';
import UserNameInput from './components/UserNameInput';

function App() {
  const handleUserNameSubmit = (userName) => {
    // Hier können Sie die Logik implementieren, um den Benutzernamen zu speichern
    // oder andere Aktionen auszuführen, wenn der Benutzer seinen Namen eingibt.
    console.log('Submitted username:', userName);
  };

  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<UserNameInput onSubmit={handleUserNameSubmit} />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;

