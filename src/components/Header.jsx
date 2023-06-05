import { NavLink } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { Button } from 'react-bootstrap';
import { HiShoppingCart, HiSearch, HiChevronDown } from 'react-icons/hi';
import '../css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext, useRef, useEffect } from "react";
import Logo from '../assets/logo.png';
import '../globalstyle.css';


export const Header = () => {
  const { cartItems } = useContext(ProductContext);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const ref = useRef(null);

  const toggleMenu = () => {
    setClickCount(clickCount + 1);

    if (clickCount === 1) {
      setIsOpen(false);
      setClickCount(0);
    } else {
      setIsOpen(true);
    }
  };
  
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
      setClickCount(0);

    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);


  const exit =() => {
    // logout();
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  }

  return (
    <div>
      <div className="navbar">
        <div className="menubar">
          <img src={Logo} alt="Not Found" className="logo" />
          <div className="menu">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Beranda
            </NavLink>
            <NavLink to="/cari-dokter" className="nav-link" activeClassName="active">
              Cari Dokter
            </NavLink>
            <NavLink to="/artikel" className="nav-link" activeClassName="active">
              Artikel
            </NavLink>
            <NavLink to="/tokoObat" className="nav-link" activeClassName="active">
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
            {!loggedInUser ?(
              <>
            <Button variant="outline-success">Daftar</Button>
            <a href='/login' className="btn btn-success">Masuk</a> 
            </>
            )
            : (
              <>
              <div className="info-title">
              <div className='name'>
                {loggedInUser.username.toString().charAt(0).toUpperCase()}
              </div>
              <h6 className="navbar-info-title">{loggedInUser.username.toString().charAt(0).toUpperCase() + loggedInUser.username.toString().slice(1)}</h6>
              <div className="dropdown" ref={ref}>

               <button onClick={toggleMenu}><HiChevronDown className='dropdown-button' /></button>
               {isOpen && (
                <div className="dropdown-content">
                  <a href="#" className='dropdown-item'>Profil</a>
                  <a href="#" className='dropdown-item'>Pengaturan</a>
                  <button onClick={exit} className='dropdown-item'>Keluar</button>
                </div>
               )}
              </div>

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
