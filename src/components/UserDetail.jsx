import React, { useContext, useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";

import "../css/dokter.css";
import "../css/detailDokter.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const UserDetail = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const { id } = useParams();
  const {
    handleScheduleChange,
    updateInputValue,
    setRating,
    handleRatingChange,
  } = useContext(UserContext);
  const [userDetail, setUserDetail] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState("");
  const [selectedConsultFilter, setSelectedConsultFilter] =
    useState("Konsultasi Chat");
  const [isClicked, setIsClicked] = useState(false);
  const [isConfirm, setIsConfirm] = useState(true);

  const handleFeatureChange = (event) => {
    setSelectedFeature(event.target.value);
  };

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await axios.get(
          `https://64527770a2860c9ed40d2a69.mockapi.io/doctor/${id}`
        );
        setUserDetail(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetail();
  }, [id]);

  if (!userDetail) {
    return <p className="load">Loading...</p>;
  }

  const handleConsult = (event) => {
    setSelectedConsultFilter(event.target.value);
    console.log(selectedConsultFilter);
  };

  // const generateRandomNumber = () => {
  //   const min = 3;
  //   const max = 5;
  //   const randomNumber = Math.random() * (max - min) + min;
  //   return randomNumber.toFixed(2); // Menggunakan 2 digit desimal
  // };

  // const randomDecimal = generateRandomNumber();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Fitur yang dipilih:", selectedFeature);
    console.log("Konsultasi yang dipilih:", selectedConsultFilter);
    setIsClicked(true);
    setIsConfirm(false);
    handleScheduleChange(selectedFeature);
    updateInputValue(selectedConsultFilter);

    // Lakukan pengolahan data yang diperlukan dengan nilai yang dipilih
  };

  return (
    <div>
      <div className="profil-dokter">
        <div className="profil-detail">
          <div className="card-profil-dokter">
            <div className="card-profil-img">
              <img
                src={userDetail.avatar}
                alt="Gambar"
                className="dokter-image"
              />
            </div>
            <div className="card-profil-body">
              <h3>{userDetail.name}</h3>
              <p>{userDetail.job}</p>
              <div className="icon-star">
                <p>{userDetail.rating}</p>
                <Icon className="ic-star" icon="ic:outline-star" />
                <Icon className="ic-star" icon="ic:outline-star" />
                <Icon className="ic-star" icon="ic:outline-star" />
                <Icon className="ic-star" icon="ic:outline-star" />
                <Icon className="ic-star" icon="ic:outline-star" />
              </div>
            </div>
          </div>
          <div className="card-order">
            <h3>Tipe Konsultasi</h3>
            <div className="type-consult">
              <Icon icon="carbon:chat" className="ic" />
              <select value={selectedConsultFilter} onChange={handleConsult}>
                <option value="Konsultasi Video">Konsultasi Video</option>
                <option value="Konsultasi Chat">Konsultasi Chat</option>
              </select>
            </div>
            <h3>Jadwal Konsultasi</h3>

            <form onSubmit={handleSubmit}>
              <label className="jadwal-btn">
                <input
                  type="radio"
                  value={
                    userDetail.day1 + ", " + userDetail.date1.substring(0, 10)
                  }
                  checked={
                    selectedFeature ===
                    userDetail.day1 + ", " + userDetail.date1.substring(0, 10)
                  }
                  onChange={handleFeatureChange}
                />
                {userDetail.day1}, {userDetail.date1.substring(0, 10)}
              </label>
              <label>
                <input
                  type="radio"
                  value={
                    userDetail.day2 + ", " + userDetail.date2.substring(0, 10)
                  }
                  checked={
                    selectedFeature ===
                    userDetail.day2 + ", " + userDetail.date2.substring(0, 10)
                  }
                  onChange={handleFeatureChange}
                />
                {userDetail.day2}, {userDetail.date2.substring(0, 10)}
              </label>
              <label>
                <input
                  type="radio"
                  value={
                    userDetail.day3 + ", " + userDetail.date3.substring(0, 10)
                  }
                  checked={
                    selectedFeature ===
                    userDetail.day3 + ", " + userDetail.date3.substring(0, 10)
                  }
                  onChange={handleFeatureChange}
                />
                {userDetail.day3}, {userDetail.date3.substring(0, 10)}
              </label>
              <button
                type="submit"
                className={isClicked ? "clicked" : "button-form"}
                disabled={isClicked}
              >
                Pilih Jadwal
              </button>
              <div className="next-page">
                {isConfirm ? (
                  <Link
                  className="disabled"
                  to={`/login`}
                  
                >
                  Lanjutkan Pemesanan
                </Link>
                ) : (
                    <>
                    {loggedInUser ? (
                    <Link
                    className="button-form"
                    to={`/order-dokter/${userDetail.id}`}
                    
                  >
                    Lanjutkan Pemesanan
                  </Link>) : (
                    <Link
                    className="button-form"
                    to={`/login`}
                    
                  >
                    Lanjutkan Pemesanan
                  </Link>)  
                    }

                    </>
                )
              
                }
              </div>
            </form>
          </div>
          <div className="card-profil-detail">
            <h3>Tentang Dokter</h3>
            <p>{userDetail.about}</p>
            <h3>STR</h3>
            <p>16638767167144</p>
            <h3>Pengalaman Praktek</h3>
            <h6>RSUD</h6>
            <span className="tahun">202192-102928</span>
            <h6>RSUD</h6>
            <p>202192-102928</p>
            <h3>Pendidikan Terakhir</h3>
            <h6>{userDetail.educate}</h6>
            <p>{userDetail.date}</p>
          </div>
        </div>

        <div className="order-dokter">
          <div className="card-order">
            <h3>Tipe Konsultasi</h3>
            <div className="type-consult">
              <Icon icon="carbon:chat" className="ic" />
              <select value={selectedConsultFilter} onChange={handleConsult}>
                <option value="Konsultasi Video">Konsultasi Video</option>
                <option value="Konsultasi Chat">Konsultasi Chat</option>
              </select>
            </div>
            <h3>Jadwal Konsultasi</h3>

            <form onSubmit={handleSubmit}>
              <label className="jadwal-btn">
                <input
                  type="radio"
                  value={
                    userDetail.day1 + ", " + userDetail.date1.substring(0, 10)
                  }
                  checked={
                    selectedFeature ===
                    userDetail.day1 + ", " + userDetail.date1.substring(0, 10)
                  }
                  onChange={handleFeatureChange}
                />
                {userDetail.day1}, {userDetail.date1.substring(0, 10)}
              </label>
              <label>
                <input
                  type="radio"
                  value={
                    userDetail.day2 + ", " + userDetail.date2.substring(0, 10)
                  }
                  checked={
                    selectedFeature ===
                    userDetail.day2 + ", " + userDetail.date2.substring(0, 10)
                  }
                  onChange={handleFeatureChange}
                />
                {userDetail.day2}, {userDetail.date2.substring(0, 10)}
              </label>
              <label>
                <input
                  type="radio"
                  value={
                    userDetail.day3 + ", " + userDetail.date3.substring(0, 10)
                  }
                  checked={
                    selectedFeature ===
                    userDetail.day3 + ", " + userDetail.date3.substring(0, 10)
                  }
                  onChange={handleFeatureChange}
                />
                {userDetail.day3}, {userDetail.date3.substring(0, 10)}
              </label>
              <button
                type="submit"
                className={isClicked ? "clicked" : "button-form"}
                disabled={isClicked}
              >
                Pilih Jadwal
              </button>
              <div className="next-page">
                {isConfirm ? (
                   <Link
                  className="disabled"
                  to={`/login`}
                >
                  Lanjutkan Pemesanan
                </Link>
                ) : (
                    <>
                    {loggedInUser ? (
                    <Link
                    className="button-form"
                    to={`/order-dokter/${userDetail.id}`}
                    
                  >
                    Lanjutkan Pemesanan
                  </Link>) : (
                    <Link
                    className="button-form"
                    to={`/login`}
                    
                  >
                    Lanjutkan Pemesanan
                  </Link>)  
                    }

                    </>
                )
              
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
