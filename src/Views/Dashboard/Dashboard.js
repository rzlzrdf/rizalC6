import React from 'react'
import logo from '../../Assets/Images/img_car.svg'
import style from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className='text-center'>
      <h1 className='text-primary fw-light '>Halaman Dashboard Admin</h1>
      <h3 className='text-primary fw-bolder '>Welcome</h3>
      <img src={logo} />
  
    </div>
  )
}

export default Dashboard