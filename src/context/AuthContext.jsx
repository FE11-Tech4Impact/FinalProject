import React, { createContext, useState } from 'react';
import { json } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUsername] = useState('');

  const login = (username) => {
    localStorage.setItem("loggedInUser", JSON.stringify({ username }));
    setIsAuthenticated(true);
    setUsername({ username });
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

 




  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;