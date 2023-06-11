import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../globalstyle.css';
import '../css/login.css';

const RegisterPage = () => {
  const { register } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        'https://6454643dc18adbbdfeb53cd7.mockapi.io/api/fe-11/user',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password, email }),
        }
      );

      if (response.ok) {
        // Registrasi berhasil
        // Lakukan penanganan registrasi berhasil
        register(username); // Set isAuthenticated ke true
        window.location.href = '/';
        console.log('Registrasi berhasil');
      } else {
        alert('Registrasi tidak berhasil');
        // Registrasi gagal
        // Lakukan penanganan registrasi gagal
        setError('Registrasi tidak berhasil');
      }
    } catch (error) {
      console.error('Terjadi kesalahan', error);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
