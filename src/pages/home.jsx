import '../css/home.css';
import ImageCover from '../assets/dokter-cover.png';
import Testimonial from '../components/testimonial';
import CardDokter from '../components/cardDokter';
import Artikel from '../components/artikel';
import CardJenisSakit from '../components/cardJenisSakit';
import Footer from '../components/Footer';
import BannerDaftar from '../components/BannerDaftar';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <> 
        < div className = "banner" > 
        <div className="row align-items-center">
            <div className="col-sm-6">
                <div className="banner-cover">
                    <div className="card-body">
                        <h5 className="banner-title">Dapatkan Konsultasi Kesehatan</h5>
                        <p className="banner-text">Dengan mudah, cepat, dan aman</p>
                        <Link to="/cari-dokter" className="ban-btn btn btn-success ">
                            Cari Dokter
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 text-center">
                <img src={ImageCover} alt="Gambar" width={500} height={437}/>
            </div>
        </div>
    </div>

    <div className="JenisSakit">
        <div className="row">
            <div className="col-sm-10">
                <h3 className="cardSakit-title">Cari Obat</h3>
            </div>

            <div className="col-sm-2 text-end">
                <a href="/toko" className="btn btn-success">
                    Lihat Semuanya 
                </a>
            </div>
            <CardJenisSakit/>
       
        </div>
    </div>

    <CardDokter/>
    <Testimonial />
    <BannerDaftar />
    <Artikel />
    <Footer />

</>
    );
};

export default Home;
