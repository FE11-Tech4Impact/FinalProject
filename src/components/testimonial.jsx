import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../css/testimonial.css';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([
    {
      stars: 5,
      text: 'Saya sangat terkesan dengan layanan telemedicine yang diberikan oleh Telemedicine. Saya memiliki gangguan kecemasan dan kesulitan untuk menghadiri konsultasi langsung dengan dokter.'
    },
    {
      stars: 5,
      text: 'Saya sangat senang menemukan Telemedicine. Saya tinggal di daerah pedesaan yang jauh dari kota, jadi sangat sulit untuk mengakses layanan kesehatan. Tetapi dengan layanan telemedicine, saya bisa berkonsultasi dengan dokter secara online tanpa harus melakukan perjalanan jauh'
    },
    {
      stars: 5,
      text: 'Saya menderita diabetes dan membutuhkan perawatan yang teratur. Namun, dengan jadwal kerja yang padat dan keterbatasan waktu, sulit bagiku untuk mengunjungi klinik secara teratur. Layanan telemedicine dari Telemedicine sangat membantu saya.'
    }
  ]);

  const truncateText = (text, limit) => {
    if (text.split(' ').length > limit) {
      return text.split(' ').slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div>
      <div className="testimonial">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="testimonial-title">Apa kata Mereka Tentang Kami</h3>
          </div>
        </div>
        <div className="card-testimonial">
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <div className="col-sm-4" key={index}>
                <div className="card border-0">
                  <div className="card-body">
                    <div className="bintang">
                      {[...Array(testimonial.stars)].map((_, starIndex) => (
                        <FaStar key={starIndex} />
                      ))}
                    </div>
                    <p className="card-text">{truncateText(testimonial.text, 22)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
