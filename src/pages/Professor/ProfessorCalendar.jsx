import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const ProfessorCalendar = () => {
  const [date, setDate] = useState(new Date())

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Professor Calendar</h1>
      <div style={{ maxWidth: '1000px', margin: '0 auto', background: '#f3f3f3', padding: '1rem', borderRadius: '8px' }}>
        <Calendar
          onChange={setDate}
          value={date}
        />
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          Selected Date: {date.toDateString()}
        </p>
      </div>
    </div>
  )
}

export default ProfessorCalendar
