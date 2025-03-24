import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Sidebar = () => {
  return (
    <div className="min-h-screen bg-white border-r">
      <ul className='text-[#515151] mt-5'>
        {/* Dashboard */}
        <div className='flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72'>
          <img className='min-w-5' src="" alt='' />
            <p className='font-bold'>Professor Dashboard</p>
        </div>

        {/* Booked Meetings (Example) */}
        <div className='flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72'>
          <img className='min-w-5' src="" alt='' />
          <Link to="/professor-home" className='hidden md:block'>
            <p>Booked Meetings</p>
          </Link>
        </div>

        {/* Professor Profile - This is where the navigation happens */}
        <div className='flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72'>
          <img className='min-w-5' src="" alt='' />
          <Link to="/professor-profile" className='hidden md:block'>
            <p>Profile</p> {/* Clicking this will navigate to the professor profile page */}
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
