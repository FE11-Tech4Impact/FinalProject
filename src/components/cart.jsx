import React, { useContext, useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import './cart.css';
import { ProductContext } from '../context/ProductContext';
import Button from 'react-bootstrap/Button';

const Cart = () => {
  const { cartItems, fallbackImage, removeFromCart } = useContext(ProductContext);
  const [cart, setCart] = useState(cartItems);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleIncreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  };

  return (
    <div>
      <div className="cart">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active="active">Keranjang</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Keranjang</h1>
        <div className="cart-pembungkus">
          {cart.length > 0 ? (
            <>
              {cart.map((product) => (
                <div key={product.id} className="cart-item">
                  <div className="cart-item-image">
                    <img
                      src={product.image || fallbackImage}
                      alt="Gambar"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-item-details">
                    <h5 className="cart-item-title">{product.name}</h5>
                    <p className="cart-item-price">Rp {product.price}</p>
                    <div className="counter">
                      <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
                      <span>{product.quantity}</span>
                      <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
                    </div>
                    <Button
                      variant="outline-danger"
                      onClick={() => handleRemove(product.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
              <div className="total-price">Total: Rp {getTotalPrice()}</div>
            </>
          ) : (
            <p>Keranjang kosong</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
