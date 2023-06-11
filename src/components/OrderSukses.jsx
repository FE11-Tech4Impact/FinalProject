import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import sukses from '../assets/sukses.png';
import { useHistory } from 'react-router-dom';
import '../css/sukses.css';

const OrderSukses = () => {
  const history = useHistory();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      history.push('/');
    }, 5000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [history]);

  return (
    <div>
      <div className="suksesorder">
        <img src={sukses} alt="" className="image-sukses" />
        <h2>Selamat Pembayaran Anda Telah Terverifikasi</h2>
        <h5>Anda akan dialihkan ke halaman utama dalam beberapa detik...</h5>
        <Button variant="primary" onClick={() => history.push('/')}>
          Kembali ke Halaman Utama
        </Button>
      </div>
    </div>
  );
};

export default OrderSukses;
