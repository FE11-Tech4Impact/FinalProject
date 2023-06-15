import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { penyakit } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://64757770e607ba4797dbeafb.mockapi.io/product');
        const data = await response.json();

        const filteredProducts = data.filter((product) => product.penyakit === penyakit);

        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [penyakit]);

  const fallbackImage =
    'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/03/06082237/kucing-domestik.jpg'; // Replace with your fallback image URL

  const addToCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex !== -1) {
      // Jika item sudah ada dalam keranjang, tingkatkan jumlahnya
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // Jika item belum ada dalam keranjang, tambahkan sebagai item baru
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    // Menghitung total item ketika cartItems berubah
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    // Menyimpan total item ke dalam localStorage atau tempat lainnya jika diperlukan
    localStorage.setItem('totalItems', totalItems.toString());
  }, [cartItems]);

  return (
    <ProductContext.Provider
      value={{ products, fallbackImage, addToCart, removeFromCart, cartItems }}
    >
      {children}
    </ProductContext.Provider>
  );
};
