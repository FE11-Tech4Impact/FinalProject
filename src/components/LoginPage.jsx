import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../globalstyle.css";

const LoginPage = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
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
        // Login berhasil
        // Lakukan penanganan login berhasil
        login(username); // Set isAuthenticated ke true
        window.location.href = "/";
        console.log('Login berhasil');
      } else {
        alert('Salah Kontol')
        // Login gagal
        // Lakukan penanganan login gagal
        setErrorMessage('Username atau password salah');
      }
    } catch (error) {
      console.error('Terjadi kesalahan', error);
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h2>Login Page</h2>
      {isAuthenticated ? (
        <></>
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
            <button type="submit">Login</button>
          </form>
        </>
      )}
    </div>
  );
};

export default LoginPage;
