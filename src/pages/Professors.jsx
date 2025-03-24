import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Professors = () => {

  const { department } = useParams()
  const [filterProf, setFilterProf] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { professors } = useContext(AppContext)

  const applyFilter = () => {
    if (department) {
      setFilterProf(professors.filter(prof => prof.department === department))
    } else {
      setFilterProf(professors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [professors, department])

  return (
    <div>
      <p className='text-gray-600'>Browse through the professors by department.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => department === 'Math' ? navigate('/professors') : navigate('/professors/Math')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === 'Math' ? 'bg-indigo-100 text-black ' : ''}`}>Math</p>
          <p onClick={() => department === 'Engineering' ? navigate('/professors') : navigate('/professors/Engineering')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === 'Engineering' ? 'bg-indigo-100 text-black ' : ''}`}>Engineering</p>
          <p onClick={() => department === 'Business' ? navigate('/professors') : navigate('/professors/Business')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === 'Business' ? 'bg-indigo-100 text-black ' : ''}`}>Business</p>
          <p onClick={() => department === 'History' ? navigate('/professors') : navigate('/professors/History')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === 'History' ? 'bg-indigo-100 text-black ' : ''}`}>History</p>
          <p onClick={() => department === 'English' ? navigate('/professors') : navigate('/professors/English')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === 'English' ? 'bg-indigo-100 text-black ' : ''}`}>English</p>
          <p onClick={() => department === 'Art' ? navigate('/professors') : navigate('/professors/Art')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === 'Art' ? 'bg-indigo-100 text-black ' : ''}`}>Art</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterProf.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); window.scrollTo(0, 0) }} className='border border-indigo-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-indigo-50' src={item.image} alt="" />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                </div>
                <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
                <p className='text-zinc-600 text-sm'>{item.department}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Professors