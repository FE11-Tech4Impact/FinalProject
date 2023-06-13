import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/detailartikel.css';


export default function DetailArtikel() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://64527375bce0b0a0f7475dda.mockapi.io/blog-posts/${articleId}`)
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .catch((error) => console.log(error));
  }, [articleId]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <div className="detailartikel">
        <h2>{article.title}</h2>
      <img src={article.image} alt="Gambar" style={{ width: '100%', height: 'auto' }} />
      <p>{article.text}</p>
        </div>
    </div>
  );
}
