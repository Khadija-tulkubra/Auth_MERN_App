import './App.css'
import { Navigate } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom'
import ForgotPassword from './Pages/ForgotPassword.jsx'
import { useState } from 'react'
import RefreshHandler from './refereshHandler.jsx'
import ResetPassword from './Pages/RestPassword.jsx'

function App() {
  const [isAuthenticated,setIsauthenticated]=useState(false);
  const PrivateRouting=({element})=>{
    return isAuthenticated ? element: <Navigate to="/login"/>

  }
 

  return (
    <>
      <RefreshHandler setIsauthenticated={setIsauthenticated}/>
      <Routes>
        
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<PrivateRouting  element={<Home/>}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </>
  )
}


export default App
