import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import '../css/toko.css';
import CardJenisSakit from '../components/cardJenisSakit';
import Footer from '../components/footer';


const Toko = () => {
  return (
      <div>
        <div className="toko">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active="active">Obat</Breadcrumb.Item>
          </Breadcrumb>
          <h2>Cari Obat</h2>
        <CardJenisSakit />
      </div>
      <Footer />
    </div>
  );
};

export default Toko;

