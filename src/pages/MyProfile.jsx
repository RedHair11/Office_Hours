import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

    const [isEdit, setIsEdit] = useState(false)

    const [userData, setUserData] = useState({
        name: "Jon Doe",
        nickname: 'Jon',
        image: assets.default_icon,
        email: 'jondoe@dusty.tamiu.edu',
        phone: '*956 101 1010',
        studentID: 'A00101010',
        major: 'Computer Science'
    })

    return (
        <div className='max-w-lg flex flex-col gap-2 text-sm'>
            <img className='w-36 rounded' src={userData.image} alt="" />

            {isEdit
                ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} value={userData.name} />
                : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
            }

            <hr className='bg-zinc-400 h-[1px] border-none' />
            <div>
                <p className='text-neutral-500 underline mt-3'>STUDENT INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
                
                    <p className='font-medium'>Student ID:</p>
                    <p className='text-blue-500'>{userData.studentID}</p>
                    <p className='font-medium'>Major:</p>
                    <p className='text-blue-500'>{userData.major}</p>
                    <p className='font-medium'>Nickname:</p>
                    {isEdit
                        ? <input className='bg-gray-100 max-w-52' type="text" onChange={(e) => setUserData(prev => ({ ...prev, nickname: e.target.value }))} value={userData.nickname} />
                        : <p className='text-blue-400'>{userData.nickname}</p>}
                    
                    <p className='font-medium'>Email:</p>
                    <p className='text-blue-500'>{userData.email}</p>
                    <p className='font-medium'>Phone:</p>
                    {isEdit
                        ? <input className='bg-gray-100 max-w-52' type="text" onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} value={userData.phone} />
                        : <p className='text-blue-400'>{userData.phone}</p>}
                </div>
            </div>
            <div>
            </div>
            <div className='mt-10'>
                {
                    isEdit
                        ? <button onClick={() => setIsEdit(false)} className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'>Save information</button>
                        : <button onClick={() => setIsEdit(true)} className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'>Edit</button>
                }
            </div>
        </div>
    )
}

export default MyProfile