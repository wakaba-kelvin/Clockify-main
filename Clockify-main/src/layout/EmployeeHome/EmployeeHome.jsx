import React from 'react'
import '../EmployeeHome/EmployeeHome.scss'
import HeaderAdmin from '../Header-Admin/HeaderAdmin'
import MainContentEmployee from '../MainContentEmployee/MainContentEmployee'

const EmployeeHome = () => {
    const  DashboardType='Employee Dashboard'
  return (
    // <div>EmployeeHome</div>
  
    <>
        <HeaderAdmin Dashboard={DashboardType}/>
        <MainContentEmployee/>
    </>
    

  )
}

export default EmployeeHome