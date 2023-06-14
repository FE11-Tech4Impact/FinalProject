import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import Button from 'react-bootstrap/Button';

import '../css/productlist.css';

const ProductList = () => {
  const { products, fallbackImage, addToCart } = useContext(ProductContext);
  const { penyakit } = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on category and search term
  const filteredProducts = products.filter((product) => {
    return (
      product.category === penyakit &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="obat">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="rekomendasi-title">{penyakit}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Cari obat..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="row">
        {filteredProducts.map((product, index) => (
          <div key={index} className="col-sm-3">
            <div className="card-obat">
              <div className="card-body">
                <img
                  src={product.image || fallbackImage}
                  alt="Gambar"
                  className="product-image"
                />
                <h5 className="card-title">{product.name}</h5>
                <p className="card-price">Rp.{product.price}</p>
                <Button
                  variant="outline-success"
                  className="btn-product"
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      image: product.image,
                      name: product.name,
                      price: product.price,
                    })
                  }
                >
                  Tambahkan Ke Keranjang
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
