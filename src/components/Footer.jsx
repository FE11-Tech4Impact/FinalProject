import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/footer.css';
import Logo from '../assets/logo.png';
import '../globalstyle.css';

export const Footer = () => {
  return (
    <div>
    <div className="footer-section">
        <div className="company">

            <img src={Logo} alt="Not Found" className="logo-footer" />        
            <p className="company-item" id="description">Medkit  berkomitmen untuk menyediakan
                layanan telemedicine yang aman, andal, dan
                terangkau bagi semua orang</p>
        </div>

    <div className="about">
        <div className="fitur">
            <h6 className="title">Fitur</h6>
            <div className="fitur-item">
                <a href="#">Booking</a>
                <a href="">promo</a>
                <a href="">Artikel</a>
                <a href="">Cek Dokter</a>
                <a href="">Penyakit</a>

            </div>
    </div>

    <div className="fitur">
        <h6 className="title">Perusahaan</h6>
       <div className="fitur-item">
        <a href="">Tentang Kami</a>
        <a  href="">Karir</a>
        <a href="">Kontak Kami</a>
       </div>
        
    </div>

    <div className="fitur">
        <h6 className="title">Dukungan</h6>
        <div className="fitur-item">
        <a href="">Privacy Policy</a>
        <a href="">Kebijakan Editorial</a>
        <a href="">Direktory Tag</a>
        <a href="">Pusat Bantuan</a>
    </div>
    </div>
</div>
</div>
<div class="copyright">
  <p>@ . 2023 All Right Reserved</p>
</div>
</div>

  );
};

export default Footer;
