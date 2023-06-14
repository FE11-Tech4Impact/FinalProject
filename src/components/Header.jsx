import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HiShoppingCart,
  HiSearch,
  HiChevronDown,
  HiMenu,
} from "react-icons/hi";
import React, { useState, useContext, useRef, useEffect } from "react";
import "../css/header.css";
import Logo from "../assets/logo.png";
import "../globalstyle.css";
import { Link } from "react-router-dom";
import { ProductContext } from '../context/ProductContext';


export const Header = () => {
  const { cartItems } = useContext(ProductContext);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const [isOpen, setIsOpen] = useState(false);
  const [clickHitung, setClickHitung] = useState(0);
  const [isBuka, setIsBuka] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const ref = useRef(null);
  const fer = useRef(null);
  const [isSide, setIsSide] = useState(false);

  const toggleMenu = () => {
    setClickCount(clickCount + 1);

    if (clickCount === 1) {
      setIsOpen(false);
      setClickCount(0);
    } else {
      setIsOpen(true);
    }
  };

  const toggleSide = () => {
    setClickHitung(clickHitung + 1);

    if (clickHitung === 1) {
      setIsSide(false);
      setClickHitung(0);
    } else {
      setIsSide(true);
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
      setClickCount(0);
    }

    if (fer.current && !fer.current.contains(event.target))
    {
      setIsSide(false);
      setClickHitung(0);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const exit = () => {
    // logout();
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <div>
      <div className="navbar">
        <div className="menubar">
          <img src={Logo} alt="Not Found" className="logo" />
          <div className="menu men-nav">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Beranda
            </NavLink>
            <NavLink
              to="/cari-dokter"
              className="nav-link"
              activeClassName="active"
            >
              Cari Dokter
            </NavLink>
            <NavLink
              to="/artikel"
              className="nav-link"
              activeClassName="active"
            >
              Artikel
            </NavLink>
            <NavLink
              to="/tokoObat"
              className="nav-link"
              activeClassName="active"
            >
              Toko Obat
            </NavLink>

            
          </div>
        </div>
        <div className="icons">
          <HiSearch className="search-icon" />
          <NavLink to="/cart" className="cart-icon">
            <HiShoppingCart />
            <span className="cart-item-count">{cartItems.length}</span>
          </NavLink>

          <div className="button-header">
            {!loggedInUser ? (
              <>
                <Button variant="outline-success">Daftar</Button>
                <Link to="/login" className="btn btn-success">
                  Masuk
                </Link>
              </>
            ) : (
              <>
                <div className="info-title">
                  <div className="name">
                    {loggedInUser.username.toString().charAt(0).toUpperCase()}
                  </div>
                  <h6 className="navbar-info-title">
                    {loggedInUser.username.toString().charAt(0).toUpperCase() +
                      loggedInUser.username.toString().slice(1)}
                  </h6>
                  <div class="dropdown" ref={ref}>
                    <button onClick={toggleMenu}>
                      <HiChevronDown className="dropdown-button" />
                    </button>
                    {isOpen && (
                      <div class="dropdown-content">
                        <a href="#" className="dropdown-item">
                          Profil
                        </a>
                        <a href="#" className="dropdown-item">
                          Pengaturan
                        </a>
                        <button onClick={exit} className="dropdown-item">
                          Keluar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
          <div class="dropdown-side" ref={fer}>
            <button onClick={toggleSide} className="side">
              <HiMenu className="burger-icon" />
            </button>
            {isSide && (
              <>
                <div className="menu men-side">
                  <Link
                    exact
                    to="/"
                    className="nav-link"
                    activeClassName="active"
                    onClick={{toggleSide}}
                  >
                    Beranda
                  </Link>
                  <Link
                    to="/cari-dokter"
                    className="nav-link"
                    activeClassName="active"
                    onClick={{toggleSide}}
                  >
                    Cari Dokter
                  </Link>
                  <Link
                    to="/artikel"
                    className="nav-link"
                    activeClassName="active"
                    onClick={{toggleSide}}
                  >
                    Artikel
                  </Link>
                  <Link
                    to="/tokoObat"
                    className="nav-link"
                    activeClassName="active"
                    onClick={{toggleSide}}
                  >
                    Toko Obat
                  </Link>
                  {!loggedInUser ? (
              <>
              
              </>
            ):(
              <>
              <button onClick={exit} className="keluar">
              Keluar
            </button>
              </>
            )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
