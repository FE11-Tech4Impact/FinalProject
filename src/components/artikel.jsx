import React, { useState, useEffect } from 'react';
import '../css/artikel.css';
import { Link } from 'react-router-dom';

const Artikel = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://64527375bce0b0a0f7475dda.mockapi.io/blog-posts')
      .then((response) => response.json())
      .then((data) => {
        const updatedArticles = data.slice(0, 3).map((article) => {
          const truncatedText = article.text.split(' ').slice(0, 20).join(' ');
          const ellipsis = article.text.split(' ').length > 20 ? '...' : '';
          return { ...article, text: truncatedText + ellipsis };
        });
        setArticles(updatedArticles);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="artikel">
      <div className="row artikel-1">
  <div className="col-sm-10">
    <h3 className="artikel-title">Artikel Kesehatan</h3>
  </div>
  <div className="col-sm-2 text-end bt1">
    <a href="/artikel" className="btn btn-success">Lihat selengkapnya</a>
  </div>
</div>


          <div className="artikel-list">
            <div className="row">
              {articles.map((article) => (
                <div className="col-sm-4" key={article.id}>
                  <div className="card-body border-0">
                    <img src={article.image} alt="Gambar" style={{ width: '100%', height: 'auto' }} />
                    <h5 className="article-tittle">{article.title}</h5>
                    <p className="card-text">{article.text}</p>
                    <Link to={`/detail-artikel/${article.id}`} className="btn btn-success btn-more">
                  Lihat Selengkapnya
                </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-sm-2 text-end bt2">
            <a href="/artikel" className="btn btn-outline-success btn-viewmore">
              Lihat Semuanya
            </a>
          </div>

      </div>
    </div>
  );
};

export default Artikel;
