import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/homePages/home/Home';
import WhoAreWe from './components/whoAreWe/WhoAreWe';
import Photos from './components/photos/Photos';
import Contact from './components/contact/Contact';
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import PopUp from './components/pop-up/PopUp';


function App() {


  return (
    <div className="App">
      
    <BrowserRouter>
      
      <Topbar></Topbar>
      <Navbar></Navbar>

      <Routes>

          <Route path='/' element={<Home />} />
          <Route path="/whoarewe" element={<WhoAreWe />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer></Footer>

    </BrowserRouter>
    </div>
  );
}

export default App;
