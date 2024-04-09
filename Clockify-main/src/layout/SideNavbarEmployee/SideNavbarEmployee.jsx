import React from 'react'
import '../SideNavbarEmployee/SideNavbarEmployee.scss'
import { FaHome } from 'react-icons/fa'
import { FaBusinessTime, FaPeopleGroup } from 'react-icons/fa6'
import { GrSchedules } from 'react-icons/gr'
import { MdOutlinePayments } from 'react-icons/md'
import { CiLogout } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'

const SideNavbarEmployee = () => {
    const sideNavbarEmployeeLinks=[
        {
            icon:<FaHome/>,
            path:'/employee',
            linkContent:"Home"
        },

        {
            icon: <FaPeopleGroup/>,
            path:'/profile',
            linkContent:'Profile'
        },
        {
            icon: <FaBusinessTime/>,
            path:'/attendance-employee',
            linkContent:'Attendance'
        },
        // {
        //     icon: <FaBusinessTime/>,
        //     path:'/checkinout',
        //     linkContent:'Time in /Time Out'
        // },
        {
            icon: <MdOutlinePayments/>,
            path:'/payroll-employee',
            linkContent:'Payroll'
        },
        {
            icon: <CiLogout/>,
            path:'/',
            linkContent:'Log out'
            
        }

    ]
  return (
    // <div>SideNavbarEmployee</div>
    <div className='sidenavbar-container'>
        <div>
            {sideNavbarEmployeeLinks && sideNavbarEmployeeLinks.map((item, index) => (
            <NavLink className='nav-icon-wrapper' key={index} to={item.path}> 
                    {item.icon}
                    <span>{item.linkContent}</span>
            </NavLink>
            ))}
        </div>
    </div>
  )
}

export default SideNavbarEmployee