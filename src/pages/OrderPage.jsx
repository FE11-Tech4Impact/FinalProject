import React from 'react';
import { Link } from 'react-router-dom';
import '../css/toko.css';
import UserDetail from '../components/UserDetail';
import Footer from '../components/Footer';


const OrderPage = () => {
  return (
      <div>

        <UserDetail />
        <Footer />

      </div>
  );
};

export default OrderPage;

