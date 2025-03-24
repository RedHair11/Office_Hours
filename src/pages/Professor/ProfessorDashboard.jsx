import React from 'react';

const ProfessorDashboard = () => {
  // Mock data for demonstration purposes
  const mockDashData = {
    appointments: 5,
    students: 10,
    latestAppointments: [
      {
        userData: { name: "Student 1", image: "", studentID: "A01010101" },
        slotDate: "15_3_2025",
        isCompleted: false,
        cancelled: false,
        notes: "",
        _id: "1"
      },
      {
        userData: { name: "Student 2", image: "", studentID: "A02020202" },
        slotDate: "14_3_2025",
        isCompleted: true,
        cancelled: false,
        notes: "",
        _id: "2"
      },
      {
        userData: { name: "Student 3", image: "", studentID: "A03030303" },
        slotDate: "13_3_2025",
        isCompleted: false,
        cancelled: true,
        notes: "",
        _id: "3"
      },
      {
        userData: { name: "Student 4", image: "", studentID: "A04040404" },
        slotDate: "12_3_2025",
        isCompleted: true,
        cancelled: false,
        notes: "",
        _id: "4"
      },
      {
        userData: { name: "Student 5", image: "", studentID: "A05050505" },
        slotDate: "11_3_2025",
        isCompleted: true,
        cancelled: false,
        notes: "",
        _id: "5"
      }
    ]
  };

  // Simple date formatter function
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('_');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className='m-5'>
      <div className='flex flex-wrap gap-3'>
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src="" alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{mockDashData.appointments}</p>
            <p className='text-gray-400'>Booked Meetings</p>
          </div>
        </div>
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src="" alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{mockDashData.students}</p>
            <p className='text-gray-400'>Students</p>
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border'>
          <img src="" alt="" />
          <p className='font-semibold'>Latest Meetings</p>
        </div>
        <div className='pt-4 border border-t-0'>
          {/* Table header */}
          <div className='flex items-center px-6 py-3 gap-3 font-semibold text-gray-600'>
            <div className='flex-1'>Name</div>
            <div className='flex-1'>Student ID</div>
            <div className='flex-1'>Date</div>
            <div className='flex-1'>Action</div>
            <div className='flex-1'>Notes</div>
          </div>
          <div className='border-t'>
            {mockDashData.latestAppointments.map((item, index) => (
              <div className='flex items-center px-6 py-3 gap-3 hover:bg-gray-100' key={index}>
                <div className='flex-1'>
                  <p className='text-gray-800 font-medium'>{item.userData.name}</p>
                </div>
                <div className='flex-1'>
                  <p className='text-gray-600'>{item.userData.studentID}</p>
                </div>
                <div className='flex-1'>
                  <p className='text-gray-600'>{formatDate(item.slotDate)}</p>
                </div>
                <div className='flex-1'>
                  {item.cancelled
                    ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
                    : item.isCompleted
                      ? <p className='text-green-500 text-xs font-medium'>Completed</p>
                      : <div className='flex'>
                          <img className='w-10 cursor-pointer' src="" alt="✔" />
                          <img className='w-10 cursor-pointer' src="" alt="X" />
                        </div>
                  }
                </div>
                <div className='flex-1'>
                  <p className='text-gray-600'>{item.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorDashboard;
