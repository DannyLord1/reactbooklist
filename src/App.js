import React from 'react';
import Navbar from './Components/navbarComponent';
import BookList from './Components/listComponent';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './Components/themeToggle';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
