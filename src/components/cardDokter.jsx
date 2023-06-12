// import dokter1 from '../assets/dokter/dokter1.png';
import '../css/carddokter.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://64527770a2860c9ed40d2a69.mockapi.io/doctor")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);
  const displayedUsers = users.slice(0, 4);

  
  return (

<div className="dokterRekomendasi">
<div className="row dokter">
          <div className="col-sm-10">
            <h3 className="rekomendasi-title">Dokter Rekomendasi</h3>
          </div>
          <div className="col-sm-2 text-end">
            <a href="/cari-dokter" className="btn btn-success">
              Lihat selengkapnya
            </a>
          </div>
      </div>
      <div className="row dokter-daftar">
        {displayedUsers.map((user, index) => (
          <div key={index} className="col-sm-3">
            <div className="card border-0">
              <div className="card-body">
                <div className="row">
                  <div className="comp-1 col-sm-12">
                    <img
                      src={user.avatar}
                      alt="Gambar"
                      className="dokter-image"
                    />
                  </div>
                  <div className="comp-2 col-sm-12">
                    <h5 className="card-title">dr. {user.name.substring(0, 12)}</h5>
                    <p className="card-text">{user.job}</p>
                    <div className="card-price">Mulai Dari <span>$. {user.price.toLocaleString('us-USD')}</span></div>
                    <Link  className="btn btn-success" to={`/profil-dokter/${user.id}`}>Mulai Konsultasi</Link>

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

export default UserList;
