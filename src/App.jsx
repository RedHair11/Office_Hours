{/* import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Professors from './pages/Professors'
import Login from './pages/Login'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import ProfessorDashboard from './pages/Professor/ProfessorDashboard'
import ProfNavbar from './pages/Professor/ProfNavbar'
import Sidebar from './pages/Professor/Sidebar'
import ProfessorHome from './pages/Professor/ProfessorHome'

const App = () => {
  
  return (

    
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/professors' element={<Professors />} />
        <Route path='/professors/:department' element={<Professors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/appointment/:profId' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/professor-dashboard' element={<ProfessorDashboard />} />
        <Route path='/prof-navbar' element={<ProfNavbar />} />
        <Route path='/sidebar' element={<Sidebar />} />
        <Route path='/professor-home' element={<ProfessorHome />} />
      </Routes>
    </div>
  )
}

export default App
*/}

{/*
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Professors from './pages/Professors';
import Login from './pages/Login';
import Appointment from './pages/Appointment';
import MyAppointments from './pages/MyAppointments';
import MyProfile from './pages/MyProfile';
import ProfessorHome from './pages/Professor/ProfessorHome';
import ProfessorProfile from './pages/Professor/ProfessorProfile';

const App = () => {
  const location = useLocation();

  // List of paths where Navbar should be hidden
  const noNavbarPaths = [
    '/professor-home',
    '/professor-profile',
  ];

  const hideNavbar = noNavbarPaths.includes(location.pathname);

  return (
    <div className='mx-4 sm:mx-[10%]'>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/professors' element={<Professors />} />
        <Route path='/professors/:department' element={<Professors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/appointment/:profId' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/professor-home' element={<ProfessorHome />} />
        <Route path='/professor-profile' element={<ProfessorProfile />} />
      </Routes>
    </div>
  );
};

export default App;
*/}

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Professors from './pages/Professors';
import Login from './pages/Login';
import Appointment from './pages/Appointment';
import MyAppointments from './pages/MyAppointments';
import MyProfile from './pages/MyProfile';
import ProfessorHome from './pages/Professor/ProfessorHome';
import ProfessorProfile from './pages/Professor/ProfessorProfile';
import ProfessorDashboard from './pages/Professor/ProfessorDashboard';
import ProfessorLayout from './pages/Professor/ProfessorLayout';  // Import ProfessorLayout

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      {/* Navbar is visible globally except on specific routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professors" element={<Professors />} />
        <Route path="/professors/:department" element={<Professors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment/:profId" element={<Appointment />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/my-profile" element={<MyProfile />} />
        
        {/* Professor-related routes wrapped in the ProfessorLayout */}
        <Route path="/professor-home" element={<ProfessorHome />} />
        
        {/* Wrap ProfessorDashboard and ProfessorProfile with ProfessorLayout */}
        <Route element={<ProfessorLayout />}>
          <Route path="/professor-dashboard" element={<ProfessorDashboard />} />
          <Route path="/professor-profile" element={<ProfessorProfile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;


