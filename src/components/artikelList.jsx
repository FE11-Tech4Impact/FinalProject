import './artikelList.css'
import React, { useState, useEffect } from 'react';
// import DetailArtikel from './detailArtikel';

export default function ArtikelList() {
    const [articles, setArticles] = useState([]);
    

    useEffect(() => {
        fetch('https://64527375bce0b0a0f7475dda.mockapi.io/blog-posts')
        .then((response) => response.json())
        .then((data) => {
            const updatedArticles = data.slice(0, 10).map((article) => {
            const truncatedText = article.text.split(' ').slice(0, 20).join(' ');
            const ellipsis = article.text.split(' ').length > 20 ? '...' : '';
            return { ...article, text: truncatedText + ellipsis };
            });
            setArticles(updatedArticles);
        })
        .catch((error) => console.log(error));
    }, []);
    return(
        <div className="banner-article">       
        <div className="card-testimonial">
            <div className="row">
              {articles.map((article) => (
                <div className="col-sm-4" key={article.id}>
                  <div className="card-body">
                    <img src={article.image} alt="Gambar" style={{ width: '100%', height: 'auto' }} />
                    
                    <h5 className="card-title">{article.title}</h5>
                    
                    <p className="card-text">{article.text}</p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    )
}
