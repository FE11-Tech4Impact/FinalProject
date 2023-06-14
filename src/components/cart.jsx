import React, { useContext, useEffect, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link, useNavigate } from 'react-router-dom';
import '../css/cart.css';
import { ProductContext } from '../context/ProductContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Cart = () => {
  const { cartItems, fallbackImage, removeFromCart } = useContext(ProductContext);
  const [cart, setCart] = useState(cartItems);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
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

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };

  const handleCheckout = () => {
    // Checkout logic here, you can send payment data to Midtrans API or another payment gateway provider
    console.log('Checkout:', cart, address, paymentMethod);

    // Reset the cart to empty
    setCart([]);

    // Redirect to the success page
    navigate('/sukses-order');
  };

  const onSuccess = (details, data) => {
    // Logic to be executed after successful payment
    console.log('Payment succeeded:', details, data);
    // Perform appropriate actions, e.g., send payment data to the server
    handleCheckout();
    // Clear the cart
    handleClearCart();
  };

  const onCancel = (data) => {
    // Logic to be executed if payment is canceled
    console.log('Payment canceled:', data);
  };

  const onError = (err) => {
    // Logic to be executed if an error occurs
    console.error('Error during payment:', err);
  };

  const handleClearCart = () => {
    setCart([]);
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
                          <div className="cart-item-details">
                            <div className="cart-item-image">
                              <img
                                src={item.image || fallbackImage}
                                alt="Gambar"
                                className="product-image"
                              />
                            </div>
                            <div className="cart-item-info">
                              <h5 className="cart-item-title">{item.name}</h5>
                              <p className="cart-item-price">Rp. {item.price}</p>
                            </div>
                          </div>
                          <div className="cart-item-actions">
                            <div className="counter">
                              <button
                                className="counter-btn counter-decrease"
                                onClick={() => handleDecreaseQuantity(item.id)}
                                disabled={item.quantity === 1}
                              >
                                -
                              </button>
                              <span className="counter-quantity">{item.quantity}</span>
                              <button
                                className="counter-btn counter-increase"
                                onClick={() => handleIncreaseQuantity(item.id)}
                              >
                                +
                              </button>
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
                      {/* <p>Price: {totalItems}</p> */}
                      <p>Total Harga:<strong className='totalprice'>Rp.{getTotalPrice()} </strong></p>
                      <div className="paypalbutton">
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
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="alamat">
                  <h4>Alamat Pembeli</h4>
                  <Form>
                    <div className="nama">
                      <Form.Group controlId="name">
                        <Form.Label>Nama</Form.Label>
                        <div className="row">
                          <div className="col-sm-12 col-md-6">
                            <Form.Control
                              type="text"
                              placeholder="Masukkan nama depan"
                              value={firstName}
                              onChange={handleFirstNameChange}
                              className="firstname"
                            />
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <Form.Control
                              type="text"
                              placeholder="Masukkan nama belakang"
                              value={lastName}
                              onChange={handleLastNameChange}
                              className="lastname"
                            />
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="kontak">
                      <Form.Group controlId="contact">
                        <Form.Label>Kontak</Form.Label>
                        <div className="row">
                          <div className="col-sm-12 col-md-6">
                            <Form.Control
                              type="email"
                              placeholder="Masukkan email"
                              value={email}
                              onChange={handleEmailChange}
                              className="email"
                            />
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <Form.Control
                              type="text"
                              placeholder="Masukkan nomor telepon"
                              value={phone}
                              onChange={handlePhoneChange}
                              className="phone"
                            />
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="alamat-form">
                      <Form.Group controlId="address">
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={address}
                          onChange={handleAddressChange}
                        />
                      </Form.Group>
                    </div>
                    <div className="kota">
                      <Form.Group controlId="cityPostal">
                        <Form.Label>Kota dan Kode Pos</Form.Label>
                        <div className="row">
                          <div className="col-sm-12 col-md-6">
                            <Form.Control
                              type="text"
                              placeholder="Masukkan kota"
                              value={city}
                              onChange={handleCityChange}
                              className="city"
                            />
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <Form.Control
                              type="text"
                              placeholder="Masukkan kode pos"
                              value={postalCode}
                              onChange={handlePostalCodeChange}
                            />
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                  </Form>
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