import React from 'react'
import LoginPage from '../components/LoginPage'
import { AuthProvider } from '../context/AuthContext'
import '../css/login.css'

export const Login = () => {
    return (
 
        <AuthProvider>
        <LoginPage />
        </AuthProvider>
    )
  }
  
  export default Login