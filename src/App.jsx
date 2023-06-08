import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import CariDokter from './pages/cariDokter';
import Artikel from './pages/Artikel';
import Toko from './pages/toko';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import ProductList from './components/ProductList';
import { ProductProvider } from './context/ProductContext';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/:penyakit" element={<ProductList />} />
          <Route path="/" element={<Home />} />
          <Route path="/cariDokter" element={<CariDokter />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/tokoobat" element={<Toko />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
