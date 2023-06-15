import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import '../css/toko.css';
import CardJenisSakit from '../components/cardJenisSakit';
import BannerDaftar from '../components/BannerDaftar';
import Footer from '../components/Footer';



const Toko = () => {
  return (
      <div>
        <div className="toko">
          <div className="breadcumb">
            <Breadcrumb>
            <Breadcrumb.Item>
              <Link to='/' className='bread-item'>Home</Link>
            </Breadcrumb.Item>
            
            <Breadcrumb.Item active="active" className='bread-item-active'>Toko</Breadcrumb.Item>
      </Breadcrumb>
          </div>
        
          <h2>Cari Obat</h2>
        <CardJenisSakit />
      </div>
      <BannerDaftar />
    <Footer />
    </div>
    
  );
};

export default Toko;