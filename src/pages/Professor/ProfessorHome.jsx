import React from 'react';
import ProfNavbar from './ProfNavbar'; // Navbar import
import Sidebar from './Sidebar'; // Sidebar import
import ProfessorDashboard from './ProfessorDashboard'; // ProfessorDashboard page

const ProfessorHome = () => {
  return (
    <div>
      {/* Always show the navbar at the top */}
      <ProfNavbar />
      
      {/* Main layout with Sidebar and dynamic content */}
      <div className="flex">
        {/* Sidebar stays fixed on the left */}
        <Sidebar className="w-1/4"/>

        {/* Main content area */}
        <div className="flex-1 p-4">
          {/* You can add specific routes or page content here */}
          {/* Example: render both ProfessorDashboard and ProfessorProfile */}
          <ProfessorDashboard />
        </div>
      </div>
    </div>
  );
};

export default ProfessorHome;
