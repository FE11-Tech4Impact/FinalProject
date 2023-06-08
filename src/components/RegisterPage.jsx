import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../globalstyle.css";

const RegisterPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://64527770a2860c9ed40d2a69.mockapi.io/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Registrasi berhasil
        // Lakukan penanganan registrasi berhasil
        window.location.href = "/login"; // Redirect ke halaman login
        console.log('Registrasi berhasil');
      } else {
        // Registrasi gagal
        // Lakukan penanganan registrasi gagal
        setError('Gagal melakukan registrasi');
      }
    } catch (error) {
      console.error('Terjadi kesalahan', error);
    }
  };

  return (
    <div>
      <h2>Registration Page</h2>
      {isAuthenticated ? (
        <p>Anda sudah terautentikasi.</p>
      ) : (
        <>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Register</button>
          </form>
        </>
      )}
    </div>
  );
};

export default RegisterPage;
