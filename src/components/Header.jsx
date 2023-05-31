import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiShoppingCart, HiSearch } from "react-icons/hi";

import './Header.css';
import Logo from '../assets/logo.png';
import '../globalstyle.css';

export const Header = () => {
  return (
    <div>
      <div className="navbar">
        <div className="menubar">
          <img src={Logo} alt="Not Found" className="logo" />
          <div className="menu">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Beranda
            </NavLink>
            <NavLink to="/cariDokter" className="nav-link" activeClassName="active">
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
          <HiShoppingCart className="cart-icon" 
          onClick={() => {
            window.location.href = "/cart";
          }}
          />
          <div className="button-header">
            <Button variant="outline-success">Daftar</Button>
            <Button variant="success">Masuk</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
