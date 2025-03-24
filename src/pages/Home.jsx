import React from 'react'
import Header from '../components/Header'
import TopProfessors from '../components/TopProfessors'
import Banner from '../components/Banner'
import DepartmentMenu from '../components/DepartmentMenu'

const Home = () => {
  return (
    <div>
      <Header />
      <DepartmentMenu />
      <TopProfessors />
      <Banner />
    </div>
  )
}

export default Home