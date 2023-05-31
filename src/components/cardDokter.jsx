import React, { useState } from 'react';
import dokter1 from '../assets/dokter/dokter1.png';
import './CardDokter.css';

const CardDokter = () => {
  const [dokterData, setDokterData] = useState([
    {
      name: 'dr. John Doe',
      specialization: 'Spesialis Anak',
      price: 'Rp. 100.000',
      image: dokter1,
    },
    {
      name: 'dr. Jane Smith',
      specialization: 'Spesialis Bedah',
      price: 'Rp. 150.000',
      image: dokter1,
    },
    {
      name: 'dr. Michael Johnson',
      specialization: 'Spesialis Kandungan',
      price: 'Rp. 200.000',
      image: dokter1,
    },
    {
      name: 'dr. Sarah Davis',
      specialization: 'Spesialis Gigi',
      price: 'Rp. 120.000',
      image: dokter1,
    },
  ]);

  return (
    <div className="dokterRekomendasi">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="rekomendasi-title">Dokter Rekomendasi</h3>
        </div>
      </div>
      <div className="row">
        {dokterData.map((dokter, index) => (
          <div key={index} className="col-sm-3">
            <div className="card border-0">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12">
                    <img
                      src={dokter.image}
                      alt="Gambar"
                      className="dokter-image"
                    />
                  </div>
                  <div className="col-sm-12">
                    <h5 className="card-title">{dokter.name}</h5>
                    <p className="card-text">{dokter.specialization}</p>
                    <p className="card-price">{dokter.price}</p>
                    <a href="/cariDokter" className="btn btn-success">
                      Cari Dokter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDokter;
