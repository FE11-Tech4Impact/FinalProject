import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../globalstyle.css";
import "../css/login.css";

const LoginPage = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Periksa apakah username dan password kosong
    if (username.trim() === "" || password.trim() === "") {
      window.alert("Username dan password harus diisi");
      return;
    }

    try {
      const response = await fetch(
        "https://6454643dc18adbbdfeb53cd7.mockapi.io/api/fe-11/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        // Login berhasil
        // Lakukan penanganan login berhasil
        login(username); // Set isAuthenticated ke true
        window.location.href = "/";
        console.log("Login berhasil");
      } else {
        window.alert("Login tidak berhasil");
        // Login gagal
        // Lakukan penanganan login gagal
      }
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {isAuthenticated ? (
        <></>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Masuk</h2>
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
