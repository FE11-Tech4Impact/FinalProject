import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import '../css/toko.css';
import CardJenisSakit from '../components/cardJenisSakit';

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
          <h1>Cari Obat</h1>
          
        <CardJenisSakit />
      </div>
    </div>
  );
};

export default Toko;

