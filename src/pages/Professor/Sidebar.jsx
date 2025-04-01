import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="min-h-screen bg-white border-r w-48">
      <ul className='text-[#515151] mt-5'>
        {/* Dashboard */}
        <div className='flex items-center gap-2 py-3 px-4'>
          <img className='w-4' src="" alt='' />
          <p className='font-bold text-base'>Professor Dashboard</p>
        </div>

        {/* Booked Meetings */}
        <div className='flex items-center gap-2 py-3 px-4'>
          <img className='w-4' src="" alt='' />
          <Link to="/professor-home">
            <p className='text-base'>Booked Meetings</p>
          </Link>
        </div>

        {/* Calendar */}
        <div className='flex items-center gap-2 py-3 px-4'>
          <img className='w-4' src="" alt='' />
          <Link to="/professor-calendar">
            <p className='text-base'>Calendar</p>
          </Link>
        </div>

        {/* Profile */}
        <div className='flex items-center gap-2 py-3 px-4'>
          <img className='w-4' src="" alt='' />
          <Link to="/professor-profile">
            <p className='text-base'>Profile</p>
          </Link>
        </div>

        {/* Settings */}
        <div className='flex items-center gap-2 py-3 px-4'>
          <img className='w-4' src="" alt='' />
          <Link to="/professor-settings">
            <p className='text-base'>Settings</p>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
