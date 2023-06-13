import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const login = (username) => {
    localStorage.setItem('loggedInUser', JSON.stringify({ username }));
    setIsAuthenticated(true);
    setUsername({ username });
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const register = (username) => {
    // Lakukan penanganan registrasi, seperti menyimpan data pengguna ke database
    // atau melakukan tindakan lain yang diperlukan
    // Misalnya, Anda dapat menggunakan API untuk mengirim permintaan POST ke endpoint registrasi
    // Setelah berhasil mendaftar, Anda dapat melanjutkan dengan login otomatis
    login(username);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};