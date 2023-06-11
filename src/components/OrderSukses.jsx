import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import sukses from '../assets/sukses.png';
import '../css/sukses.css';
import { useNavigate } from 'react-router-dom';

const OrderSukses = () => {
    const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
    navigate('/');
    }, 5000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div>
      <div className="suksesorder">
        <img src={sukses} alt="" className="image-sukses" />
        <h2>Selamat Pembayaran Anda Telah Terverifikasi</h2>
        <h5>Anda akan dialihkan ke halaman utama dalam beberapa detik...</h5>
        <Button variant="primary" onClick={() => navigate('/')}>
          Kembali ke Halaman Utama
        </Button>
      </div>
    </div>
  );
};

export default OrderSukses;
