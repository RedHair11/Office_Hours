import React from 'react'
import { departmentData } from '../assets/assets'
import { Link } from 'react-router-dom'

const DepartmentMenu = () => {
    return (
        <div id='department' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
            <h1 className='text-3xl font-medium'>Find by Department</h1>
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '>
                {departmentData.map((item, index) => (
                    <Link to={`/professors/${item.department}`} onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index}>
                        <img className='w-16 sm:w-24 mb-2 ' src={item.image} alt="" />
                        <p>{item.department}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default DepartmentMenu