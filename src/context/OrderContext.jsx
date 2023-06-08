import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [price, setPrice] = useState('');
  const [selectedPay, setSelectedPay] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://64527770a2860c9ed40d2a69.mockapi.io/doctor/');
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const updatePrice = (value) => {
    setPrice(value);
  };

  const updateSelectedPay = (value) => {
    setSelectedPay(value);
  
  }


  return (
    <OrderContext.Provider value={{ users, updatePrice, updateSelectedPay, setPrice, setSelectedPay }}>
      {children}
    </OrderContext.Provider>
  );
};
