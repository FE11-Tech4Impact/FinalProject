import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CariDokter from './pages/cariDokter';
import Artikel from './pages/Artikel';
import Toko from './pages/toko';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import ProductList from './components/ProductList';
import { ProductProvider } from './context/ProductContext';
import Cart from './components/cart';
import { UserProvider } from './context/UserContext';
import { OrderProvider } from './context/OrderContext';
import DokterDetail from './pages/ProfilDokter';
import OrderDokter  from './components/Order-Dokter';
import SuksesDokter from './components/SuksesDokter';
import Chat from './components/Chat';


function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
      <UserProvider>
      <OrderProvider>
        <Header />
        <Routes>
          <Route path="/:penyakit" element={<ProductList />} />
          <Route path="/" element={<Home />} />
          <Route path="/cari-dokter" element={<CariDokter />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/tokoobat" element={<Toko />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profil-dokter/:id" element={<DokterDetail />} />
          <Route path="/order-dokter/:id" element={<OrderDokter />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sukses-order-dokter" element={<SuksesDokter />} />
          <Route path="/chat-dokter" element={<Chat /> } />
        </Routes>
        </OrderProvider>
        </UserProvider>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
