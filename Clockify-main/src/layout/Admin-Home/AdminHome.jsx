import React from 'react'
import HeaderAdmin from '../Header-Admin/HeaderAdmin'
import './AdminHome.scss'
import SideNavbarAdmin from '../SideNavbarAdmin/SideNavbarAdmin'
import MainContent from '../MainContent/MainContent'



const AdminHome = () => {
  const  DashboardType='Admin Dashboard'
  return (
    <div className='admin-home-container'>
      
         <HeaderAdmin Dashboard={DashboardType}/>
         <MainContent/>

    </div>
  )
}


export default AdminHome