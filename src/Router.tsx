import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';


const AppRouter: React.FC = () => {
  const [query, setQuery] = useState('');
  return (
    <Router>
      <Header query={query} onSearch={setQuery} />
      <Routes>
        <Route path="/" element={<Home query={query} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
