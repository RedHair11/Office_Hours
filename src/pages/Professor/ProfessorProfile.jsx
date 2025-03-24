import React, { useState } from 'react';
import { assets } from '../../assets/assets';

const ProfessorProfile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [profileData, setProfileData] = useState({
    name: 'John Smith',
    department: 'Engineering',
    image: assets.default_icon,
    about: 'Engineering department professor with over 10 years of teaching experience.',
    email: 'jonhnsmith@dusty.tamiu.edu',
    officeHours: 'Mon - Wed: 2 PM - 4 PM',
  });

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm py-10'>
      {/* Profile Picture */}
      <img className='w-36 rounded' src={profileData.image} alt="Professor" />

      {/* Name - Non-editable */}
      <div className='flex items-center justify-between'>
        {isEdit ? (
          <input
            className='bg-gray-50 text-3xl font-medium max-w-60 mt-4'
            type="text"
            value={profileData.name}
            onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
          />
        ) : (
          <p className='font-medium text-3xl text-neutral-800 mt-4'>{profileData.name}</p>
        )}
      </div>

      <hr className='bg-zinc-400 h-[1px] border-none' />

      <div>
        <p className='text-neutral-500 underline mt-3'>PROFESSOR INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          {/* Department - Non-editable */}
          <p className='font-medium'>Department:</p>
          <p className='text-blue-500'>{profileData.department}</p>

          {/* Email */}
          <p className='font-medium'>Email:</p>
          {isEdit ? (
            <input
              className='bg-gray-100 max-w-52'
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
            />
          ) : (
            <p className='text-blue-500'>{profileData.email}</p>
          )}

          {/* Office Hours */}
          <p className='font-medium'>Office Hours:</p>
          {isEdit ? (
            <input
              className='bg-gray-100 max-w-52'
              type="text"
              value={profileData.officeHours}
              onChange={(e) => setProfileData(prev => ({ ...prev, officeHours: e.target.value }))}
            />
          ) : (
            <p className='text-gray-600'>{profileData.officeHours}</p>
          )}

          {/* About Section */}
          <p className='font-medium'>About:</p>
          {isEdit ? (
            <textarea
              className='w-full outline-primary p-2 bg-gray-100 mt-1'
              rows={5}
              value={profileData.about}
              onChange={(e) => setProfileData(prev => ({ ...prev, about: e.target.value }))}
            />
          ) : (
            <p className='text-gray-600 mt-1'>{profileData.about}</p>
          )}
        </div>
      </div>

      {/* Save / Edit Button */}
      <div className='mt-10'>
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'
          >
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfessorProfile;
