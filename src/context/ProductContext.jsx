import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
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

  const fallbackImage = 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/03/06082237/kucing-domestik.jpg'; // Replace with your fallback image URL

  return (
    <ProductContext.Provider value={{ products, fallbackImage }}>
      {children}
    </ProductContext.Provider>
  );
};
