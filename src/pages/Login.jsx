import React from 'react'
import LoginPage from '../components/LoginPage'
import { AuthProvider } from '../context/AuthContext'

export const Login = () => {
    return (
 
        <AuthProvider>
        <LoginPage />
        </AuthProvider>
    )
  }
  
  export default Login