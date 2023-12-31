import React from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Page/Login';
import Signup from './Page/Signup';
import Admin from './Page/Admin';
import Vegapi from './Components/Vegapi';
function App() {
  return (
    
 
    // <div className='bg-[url()] h-screen'>
    <div className=''>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/api" element={<Vegapi />} />
      </Routes>
      <Footer/>
    </BrowserRouter>    
     </div>
    
  );
}

export default App;
