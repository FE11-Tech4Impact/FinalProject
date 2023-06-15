import React, { useState, useEffect } from "react";
import "../css/dokter.css";
import "../globalstyle.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "bootstrap";
import { HiChevronDown } from "react-icons/hi";

// import { userContext } from '../context/userContext'

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedJobs, setSelectedJobs] = useState([]);
  const usersPerPage = 8; // Jumlah data per halaman
  const [selectedPriceFilter, setSelectedPriceFilter] = useState("All");
  // const { doctor } = useContext( userContext );
  const [move, setMove] = useState(false);

  useEffect(() => {
    fetch("https://64527770a2860c9ed40d2a69.mockapi.io/doctor")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  // Menghitung indeks awal dan akhir data yang ditampilkan
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  // Filter data pengguna berdasarkan kata kunci pencarian
  const filteredUsers = users.filter((user) => {
    const isNameMatched = user.name
      .toLowerCase()
      .includes(searchKeyword.toLowerCase());
    const isJobMatched =
      selectedJobs.length === 0 || selectedJobs.includes(user.job);
    const isPriceMatched =
      selectedPriceFilter === "All" ||
      (selectedPriceFilter === "Below 50" && user.price < 50000) ||
      (selectedPriceFilter === "50-70" &&
        user.price >= 50000 &&
        user.price <= 70000) ||
      (selectedPriceFilter === "Above 70" && user.price > 70000);
    return isNameMatched && isJobMatched && isPriceMatched;
  });

  const displayedUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Fungsi untuk memperbarui kata kunci pencarian
  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
    setCurrentPage(1); // Reset halaman ke 1 saat melakukan pencarian
  };

  // Fungsi untuk memperbarui spesialis yang dipilih
  const handleJobSelection = (event) => {
    const job = event.target.value;
    if (event.target.checked) {
      setSelectedJobs([...selectedJobs, job]);
    } else {
      setSelectedJobs(
        selectedJobs.filter((selectedJob) => selectedJob !== job)
      );
    }
    setCurrentPage(1); // Reset halaman ke 1 saat melakukan pemilihan pekerjaan
  };

  // Fungsi untuk memperbarui filter harga
  const handlePriceFilter = (event) => {
    setSelectedPriceFilter(event.target.value);
    setCurrentPage(1); // Reset halaman ke 1 saat melakukan pemilihan filter umur
  };

  if (!users) {
    return <p className="load">Loading...</p>;
  }

  return (
    <div className="hal-dokter">
      <div className="search-bar">
        <input
          className="search-dokter"
          type="text"
          value={searchKeyword}
          onChange={handleSearch}
          placeholder="Cari Nama Dokter..."
        />

        <div className="price-filter">
          <p>Filter Harga</p>
          <select value={selectedPriceFilter} onChange={handlePriceFilter}>
            <option value="All">Semua Harga</option>
            <option value="Below 50">Dibawah 50.000</option>
            <option value="50-70">50.000 - 70.000</option>
            <option value="Above 70">Diatas 70.000</option>
          </select>
        </div>
      </div>

      <div className="page-dokter">
        <div className="filtering fil1">
          <div className="jenis-spesialis">
            <p>Jenis Spesialis :</p>
            <label>
              <input
                type="checkbox"
                value="Umum"
                checked={selectedJobs.includes("Umum")}
                onChange={handleJobSelection}
              />
              Umum
            </label>
            <label>
              <input
                type="checkbox"
                value="Mata"
                checked={selectedJobs.includes("Mata")}
                onChange={handleJobSelection}
              />
              Mata
            </label>
            <label>
              <input
                type="checkbox"
                value="Jiwa"
                checked={selectedJobs.includes("Jiwa")}
                onChange={handleJobSelection}
              />
              Jiwa
            </label>
            <label>
              <input
                type="checkbox"
                value="Otak"
                checked={selectedJobs.includes("Otak")}
                onChange={handleJobSelection}
              />
              Otak
            </label>
            <label>
              <input
                type="checkbox"
                value="Kandungan"
                checked={selectedJobs.includes("Kandungan")}
                onChange={handleJobSelection}
              />
              Kandungan
            </label>
            <label>
              <input
                type="checkbox"
                value="Anak"
                checked={selectedJobs.includes("Anak")}
                onChange={handleJobSelection}
              />
              Anak
            </label>
            <label>
              <input
                type="checkbox"
                value="Penyakit Dalam"
                checked={selectedJobs.includes("Penyakit Dalam")}
                onChange={handleJobSelection}
              />
              Penyakit Dalam
            </label>
            <label>
              <input
                type="checkbox"
                value="Spesialis THT"
                checked={selectedJobs.includes("THT")}
                onChange={handleJobSelection}
              />
              THT
            </label>
            <label>
              <input
                type="checkbox"
                value="Ortopedi"
                checked={selectedJobs.includes("Ortopedi")}
                onChange={handleJobSelection}
              />
              Ortopedi
            </label>
            <label>
              <input
                type="checkbox"
                value="Paru"
                checked={selectedJobs.includes("Paru")}
                onChange={handleJobSelection}
              />
              Paru
            </label>
            <label>
              <input
                type="checkbox"
                value="Bedah Umum"
                checked={selectedJobs.includes("Bedah Umum")}
                onChange={handleJobSelection}
              />
              Bedah Umum
            </label>
            <label>
              <input
                type="checkbox"
                value="Jantung"
                checked={selectedJobs.includes("Jantung")}
                onChange={handleJobSelection}
              />
              Jantung
            </label>
          </div>
        </div>

        <div className="res-filter" onClick={() => setMove(!move)}>
          Pilih Jenis Spesialis
          <HiChevronDown className="dropdown-button" />
        </div>
        {move && (
          <>
            <motion.div
              className="filtering fil2"
              animate={{ y: move ? 10 : -50, scale: move ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="jenis-spesialis">
                <p>Jenis Spesialis :</p>
                <label>
                  <input
                    type="checkbox"
                    value="Umum"
                    checked={selectedJobs.includes("Umum")}
                    onChange={handleJobSelection}
                  />
                  Umum
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Mata"
                    checked={selectedJobs.includes("Mata")}
                    onChange={handleJobSelection}
                  />
                  Mata
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Jiwa"
                    checked={selectedJobs.includes("Jiwa")}
                    onChange={handleJobSelection}
                  />
                  Jiwa
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Otak"
                    checked={selectedJobs.includes("Otak")}
                    onChange={handleJobSelection}
                  />
                  Otak
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Kandungan"
                    checked={selectedJobs.includes("Kandungan")}
                    onChange={handleJobSelection}
                  />
                  Kandungan
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Anak"
                    checked={selectedJobs.includes("Anak")}
                    onChange={handleJobSelection}
                  />
                  Anak
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Penyakit Dalam"
                    checked={selectedJobs.includes("Penyakit Dalam")}
                    onChange={handleJobSelection}
                  />
                  Penyakit Dalam
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="THT"
                    checked={selectedJobs.includes("THT")}
                    onChange={handleJobSelection}
                  />
                  THT
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Ortopedi"
                    checked={selectedJobs.includes("Ortopedi")}
                    onChange={handleJobSelection}
                  />
                  Ortopedi
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Paru"
                    checked={selectedJobs.includes("Paru")}
                    onChange={handleJobSelection}
                  />
                  Paru
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Bedah"
                    checked={selectedJobs.includes("Bedah")}
                    onChange={handleJobSelection}
                  />
                  Bedah Umum
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Jantung"
                    checked={selectedJobs.includes("Jantung")}
                    onChange={handleJobSelection}
                  />
                  Jantung
                </label>
              </div>
            </motion.div>
          </>
        )}

        <div className="dokterRekomendasi">
          <div className="row main-row">
            {displayedUsers.map((user, index) => (
              <div key={index} className="col-sm-3 main">
                <div className="card border-0">
                  <div className="card-body border-0">
                    <div className="row border-0">
                      <div className="col-sm-12 image">
                        <img
                          src={user.avatar}
                          alt="Gambar"
                          className="dokter-image"
                        />
                      </div>
                      <div className="comp-2 col-sm-12">
                        <h5 className="card-title">
                          dr. {user.name.substring(0, 12)}
                        </h5>
                        <p className="card-text">{user.job}</p>
                        <div className="card-price">
                          Mulai Dari{" "}
                          <span>Rp. {(user.price* 1000).toLocaleString()}</span>
                        </div>
                        <Link
                          className="btn btn-success"
                          to={`/profil-dokter/${user.id}`}
                        >
                          Mulai Konsultasi
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {filteredUsers.length > 0 && (
          <ul className="daftar-dokter">
            {Array.from(
              { length: Math.ceil(filteredUsers.length / usersPerPage) },
              (_, i) => (
                <li
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={currentPage === i + 1 ? "dokter-active" : ""}
                >
                  {i + 1}
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserList;
