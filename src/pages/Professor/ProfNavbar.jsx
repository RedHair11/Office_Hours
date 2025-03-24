import React from 'react'

const ProfNavbar = () => {

  return (
    <div className='h-[100px] bg-primary w-screen fixed left-0 top-0 flex justify-between items-center px-4 sm:px-10 py-3 border-b z-50'>
      <div className='flex items-center gap-2 text-xs'>
        <img className='w-36 sm:w-40 cursor-pointer scale-[.50]' src="" alt="" />
        {/*<p className='bg-secondary border px-2.5 py-0.5 rounded-full border-gray-500 text-white'>Professor</p>*/}
      </div>
      <button className='bg-white text-black text-lg px-10 py-2 rounded-full hover:bg-[#9e8a56]'>Login</button>
    </div>
  )
}

export default ProfNavbar
