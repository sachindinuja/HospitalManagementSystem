
import './App.css';
import React from 'react';
import Header from './components/Header';

import Addappointments from './components/Addappointments';
import Manegeappointments from './components/Manegeappointments';
import Updateappointment from './components/Updateappointment';
import GenerateAppointmentPDF from './components/GenerateAppointmentPDF'
import {BrowserRouter , Routes, Route} from "react-router-dom"
import About from './components/About';
import Home from './components/Home';
import Footer from './footer/footer';





function App() {
  return (
    <div className="APP">
      <BrowserRouter>
      <Header/>
        <div className='component'>
      <Routes>
        
        {/*<Route path="/" element={<ALLappointment/>}/>*/}

        <Route path="/Home" element={<Home/>}/>
        <Route path="/add" element={<Addappointments/>}/>
        <Route path="/Manegeappointments" element={<Manegeappointments/>}/>
        <Route path="/update/:id" element={<Updateappointment/>}/>
        <Route path="/GenerateAppointmentPDF" element={<GenerateAppointmentPDF/>}/>
        <Route path="/About" element={<About/>}/>
        
        
        {/*Addappointment*/}
        
    
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
