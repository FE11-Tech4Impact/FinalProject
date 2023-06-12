import React from 'react';
import { Button } from 'react-bootstrap';
import sukses from '../assets/sukses.png';
import '../css/sukses.css';

export const SuksesDokter = () => {
  return (
    <div>
      <div className="suksesorder">
        <img src={sukses} alt="" className="image-sukses" />
        <h2>Selamat Pembayaran anda telah Terverifikasi</h2>
        <h5>Anda akan di arahkan langsung ke halaman konsultasi</h5>
        <Button variant="primary" href="/chat">
          Konsultasi
        </Button>
      </div>
    </div>
  );
};

export default SuksesDokter;
