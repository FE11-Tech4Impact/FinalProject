import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/cardsakit.css';
import Anak from '../assets/penyakit/Anak.png';
import Umum from '../assets/penyakit/umum.png';
import Jantung from '../assets/penyakit/jantung.png';
import Jiwa from '../assets/penyakit/jiwa.png';
import Kandungan from '../assets/penyakit/Kandungan.png';
import Mata from '../assets/penyakit/Mata.png';
import Ortopedi from '../assets/penyakit/Ortopedi.png';
import BedahUmum from '../assets/penyakit/BedahUmum.png';
import Otak from '../assets/penyakit/otak.png';
import Paru from '../assets/penyakit/Paru.png';
import THT from '../assets/penyakit/tht.png';
import PenyakitDalam from '../assets/penyakit/Penyakit Dalam.png';

const CardJenisSakit = () => {
  const [cards] = useState([
    { image: Umum, title: 'Umum', path: '/umum' },
    { image: Otak, title: 'Otak', path: '/otak' },
    { image: Jiwa, title: 'Jiwa', path: '/jiwa' },
    { image: Kandungan, title: 'Kandungan', path: '/kandungan' },
    { image: Anak, title: 'Anak', path: '/anak' },
    { image: PenyakitDalam, title: 'Penyakit Dalam', path: '/penyakit-dalam' },
    { image: Jantung, title: 'Jantung', path: '/jantung' },
    { image: Mata, title: 'Mata', path: '/mata' },
    { image: Ortopedi, title: 'Ortopedi', path: '/ortopedi' },
    { image: BedahUmum, title: 'Bedah Umum', path: '/bedah-umum' },
    { image: Paru, title: 'Paru', path: '/paru' },
    { image: THT, title: 'THT', path: '/tht' },
  ]);

  return (
    <div>
      <div className="card-jenissakit">
        <div className="row">
          {cards.map((card, index) => (
            <div className="col-sm-2" key={index}>
             <Link to={card.path} className="card-sakit custom-link">
                <div className="card-body">
                  <img
                    src={card.image}
                    alt={card.title}
                    border="0"
                    width="64px"
                    height="64px"
                  />
                  <h5 className="card-title">{card.title}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardJenisSakit;