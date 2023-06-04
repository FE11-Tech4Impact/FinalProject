import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import '../css/productlist.css';

const ProductList = () => {
  const { products, fallbackImage } = useContext(ProductContext);
  const { penyakit } = useParams();

  // Filter products based on category
  const filteredProducts = products.filter((product) => product.category === penyakit);

  return (
    <div className="obat">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="rekomendasi-title">{penyakit}</h3>
        </div>
      </div>
      <div className="row">
        {filteredProducts.map((product, index) => (
          <div key={index} className="col-sm-3">
            <div className="card-obat">
              <div className="card-body">
                <img src={product.image || fallbackImage} alt="Gambar" className="product-image" />
                <h5 className="card-title">{product.name}</h5>
                <p className="card-price">{product.price}</p>
                <a href="/cart" className="btn btn-success btn-product">
                  Tambahkan Ke Keranjang
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
