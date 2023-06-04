import React, { useContext, useEffect, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link, useNavigate } from 'react-router-dom';
import '../css/cart.css';
import { ProductContext } from '../context/ProductContext';
import Button from 'react-bootstrap/Button';

const Cart = () => {
  const { cartItems, fallbackImage, removeFromCart } = useContext(ProductContext);
  const [cart, setCart] = useState(cartItems);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [totalItems, setTotalItems] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  useEffect(() => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalItems(totalItems);
  }, [cart]);

  const handleRemove = (productId) => {
    removeFromCart(productId);
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
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

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleCheckout = () => {
    // Logika checkout di sini, Anda dapat mengirim data pembayaran ke API Midtrans atau penyedia payment gateway lainnya
    console.log('Checkout:', cart, address, paymentMethod);

    // Reset keranjang menjadi kosong
    setCart([]);

    // Redirect ke halaman sukses
    navigate('/');
  };

  const onSuccess = (details, data) => {
    // Logika yang akan dijalankan setelah pembayaran berhasil
    console.log('Pembayaran berhasil:', details, data);
    // Lakukan tindakan yang sesuai, misalnya, mengirim data pembayaran ke server
    handleCheckout();
  };

  const onCancel = (data) => {
    // Logika yang akan dijalankan jika pembayaran dibatalkan
    console.log('Pembayaran dibatalkan:', data);
  };

  const onError = (err) => {
    // Logika yang akan dijalankan jika terjadi kesalahan
    console.error('Terjadi kesalahan saat pembayaran:', err);
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "AZW_HIbX9o5c4fcxKEmvFqRqF6YRoedmZXM3UGQT287B_jFilCiFn19r6BOmlE3X4m8czW1l8X3urvW9" }}>
      <div>
        <div className="cart">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Keranjang</Breadcrumb.Item>
          </Breadcrumb>
          <div className="container-cart">
            <div className="row">
              <div className="col-sm-6">
                <div className="cart-pembungkus">
                  <h1>Keranjang</h1>
                  {cart.length > 0 ? (
                    <>
                      {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                          <div className="cart-item-image">
                            <img
                              src={item.image || fallbackImage}
                              alt="Gambar"
                              className="product-image"
                            />
                          </div>
                          <div className="cart-item-details">
                            <h5 className="cart-item-title">{item.name}</h5>
                            <p className="cart-item-price">$ {item.price}</p>
                            <div className="counter">
                              <button
                                onClick={() => handleDecreaseQuantity(item.id)}
                                disabled={item.quantity === 1}
                              >
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                            </div>
                            <Button
                              variant="outline-danger"
                              onClick={() => handleRemove(item.id)}
                            >
                              Hapus
                            </Button>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <p>Keranjang kosong.</p>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="cart-summary">
                  <h4>Total Order</h4>
                  {cart.length > 0 ? (
                    <>
                      <p>Total Item: {totalItems}</p>
                      <p>Total Harga: $ {getTotalPrice()}</p>
                      <form onSubmit={handleCheckout}>
                        <div className="form-group">
                          <label htmlFor="firstName">Nama Depan</label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="lastName">Nama Belakang</label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            value={lastName}
                            onChange={handleLastNameChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="address">Alamat Pengiriman</label>
                          <textarea
                            className="form-control"
                            id="address"
                            rows="3"
                            value={address}
                            onChange={handleAddressChange}
                            required
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label htmlFor="paymentMethod">Metode Pembayaran</label>
                        </div>
                        <PayPalButtons
                          style={{ layout: 'horizontal' }}
                          createOrder={(data, actions) => {
                            return actions.order.create({
                              purchase_units: [
                                {
                                  amount: {
                                    value: getTotalPrice().toString(),
                                    currency_code: 'USD',
                                  },
                                },
                              ],
                            });
                          }}
                          onApprove={(data, actions) => {
                            return actions.order.capture().then(function (details) {
                              onSuccess(details, data);
                            });
                          }}
                          onCancel={onCancel}
                          onError={onError}
                        />
                      </form>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default Cart;
