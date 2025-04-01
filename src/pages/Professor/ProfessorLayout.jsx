import React from 'react';
import ProfNavbar from './ProfNavbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';  // Outlet will render the content based on nested routes

const ProfessorLayout = () => {
  return (
    <div>
      <ProfNavbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Outlet /> {/* This renders either the Professor Dashboard or Professor Profile */}
        </div>
      </div>
    </div>
  );
};

export default ProfessorLayout;