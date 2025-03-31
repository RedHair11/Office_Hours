import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfNavbar = () => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/') // IDK why this is in the react rouder but home is labeled as '/'
  }

  return (
    <div className='h-[100px] bg-primary w-screen fixed left-0 top-0 flex justify-between items-center px-4 sm:px-10 py-3 border-b z-50'>
      {/* Left Side (Home Button only) */}
      <div>
        <button
          onClick={goToHome}
          className='bg-white text-primary font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition-all'
        >
          Home
        </button>
      </div>

      {/* Right Side (optional) */}
      <div></div>
    </div>
  )
}

export default ProfNavbar
