import React from 'react'
import '../SideNavbarAdmin/SideNavbarAdmin.scss'
// import { TbLayoutDashboard} from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa6";
import { TbCashOff } from "react-icons/tb";
import { GrSchedules } from "react-icons/gr";
import { LiaCashRegisterSolid } from "react-icons/lia";
import { PiTimerFill } from "react-icons/pi";
import { MdOutlinePayments } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';


const SideNavbarAdmin = () => {
    // const [token , setToken]=useLocalStorage('')
    const [token, setToken] = useLocalStorage('token ', null);


    const logOut=()=>{
        // localStorage.removeItem('token')
        localStorage.removeItem('user')
        setToken(null)

    }

    const sideNavAdminLinks=[
        {
            icon:<FaHome/>,
            path:'/admin',
            linkContent:"Home"
        },
        {
            icon: <FaPeopleGroup/>,
            path:'/employeelisting',
            linkContent:'Employees'
        },
        {
            icon: <FaBusinessTime/>,
            path:'/attendance',
            linkContent:'Attendance'
        },
        {
            icon: <FaPeopleGroup/>,
            path:'/positions',
            linkContent:"Positions"
        },
        {
            icon: <GrSchedules/> ,
            path:'/schedules',
            linkContent:'Schedules'
        },
        {
            icon: <TbCashOff/> ,
            path:'/deductions',
            linkContent:'Deductions'
        },
        {
            icon: <LiaCashRegisterSolid/> ,
            path:'/advances',
            linkContent:'Cash Advances'
        },
        {
            icon:<LiaCashRegisterSolid/> ,
            path:'/overtime',
            linkContent:'Overtime'
        },
        {
            icon: <MdOutlinePayments/>,
            path:'/payroll',
            linkContent:'Payroll'
        },
        {
            icon: <CiLogout/>,
            path:'/',
            linkContent:'Log out'
            
        }
        
        

    ]
  return (
    <div className='sidenavbar-container'>
       <div>
  {sideNavAdminLinks && sideNavAdminLinks.map((item, index) => (
    <NavLink className='nav-icon-wrapper' key={index} to={item.path}> 
      {item.icon}
      <span>{item.linkContent}</span>
    </NavLink>
  ))}

  </div>

       {/* <div className='nav-icon-wrapper'>
          <FaHome/>
            <span>Home</span>
        </div> */}

        

        
<button onClick={logOut}>Log out </button>
         
      


    </div>
  )
}

export default SideNavbarAdmin