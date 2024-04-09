import React from 'react'
import '../Content/Content.scss'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import AdminDashboard from '../../pages/AdminDashboard/AdminDashboard'
import EmployeeListing from '../../pages/EmployeeListing/EmployeeListing'
import Positions from '../../pages/Positions/Positions'
import Attendance from '../../pages/Attendance/Attendance'
import Schedules from '../../pages/Schedules/Schedules'
import Deductions from '../../pages/Deductions/Deductions'
import Overtime from '../../pages/Overtime/Overtime'
import CashAdvances from '../../pages/CashAdvances/CashAdvances'
import Payroll from '../../pages/Payroll/Payroll'
import EmployeeDashboard from '../../pages/EmployeeDashboard/EmployeeDashboard'
import { Navigate } from 'react-router-dom'




const Content = () => {
  return (
    <div className='content-container'>
        {/* <p>Content Container</p> */}

         <Routes>
         <Route
              path="/*"
              element={<Navigate to="/admin" replace />}
            />
            <Route path='/admin' element={<AdminDashboard/>}/>
            <Route path='/employeelisting' element={<EmployeeListing/>}/>
            <Route path='/positions' element={<Positions/>}/>
            <Route path='/attendance' element={<Attendance/>}/>
            <Route path='/schedules' element={<Schedules/>}/>
            <Route path='/deductions' element={<Deductions/>}/>
            <Route path='/overtime' element={<Overtime/>}/>
            <Route path='/advances' element={<CashAdvances/>}/>
            <Route path='/payroll' element={<Payroll/>}/>
            <Route path='/employee' elment={<EmployeeDashboard/>}/>
         </Routes>
    </div>
  )
}


export default Content