import React from 'react'
import RegisterPage from '../components/RegisterPage'
import { AuthProvider } from '../context/AuthContext'
import '../css/login.css'

export const Register = () => {
    return (
 
        <AuthProvider>
        <RegisterPage />
        </AuthProvider>
    )
  }
  
  export default Register