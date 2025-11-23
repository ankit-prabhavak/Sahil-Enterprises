import './App.css';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductListing from './Pages/ProductListing';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal-care" element={<ProductListing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
