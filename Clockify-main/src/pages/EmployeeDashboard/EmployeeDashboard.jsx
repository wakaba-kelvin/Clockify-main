import React from 'react'
import '../EmployeeDashboard/EmployeeDashboard.scss'
import { SlPeople } from "react-icons/sl";
import {BarChart} from '@mui/x-charts/BarChart'
import useLocalStorage from '../../hooks/useLocalStorage';
import { useGetAttendanceReportStatisticsByUserQuery } from '../../features/Attendance/attendanceApi';
import AttendanceChart from '../../components/AttendanceChart/AttendanceChart';
import LineChartAttendance from '../../components/LineChartAttendance/LineChartAttendance';


const EmployeeDashboard = () => {
 
   const [userDetails,setUserDetails]=useLocalStorage('user')
   const {data:userAttendanceData}=useGetAttendanceReportStatisticsByUserQuery(userDetails.user_id)

   console.log(userAttendanceData)


  return (
    <div className='employee-dashboard-container'>
    <div className='title-bar'>
        <span>Home | Dashboard</span>
    </div>
    <div className='content-wrapper'>
        <div className='dashboard-cards'>
             <div className='dashboard-card'>
              <div className='icon-title'>
                 <SlPeople />
              <span className='card-title'>Current Position</span>
              </div>
            
              <span className='numbers'>{userDetails.position_description}</span>
                  
             </div>

             <div className='dashboard-card'>
              <div className='icon-title'>
                 <SlPeople />
              <span className='card-title'>Schedule</span>
              </div>
            
              <span className='numbers'>{userDetails.schedule_description}</span>
                  
             </div>
             <div className='dashboard-card'>
              <div className='icon-title'>
                 <SlPeople />
              <span className='card-title'>Working Hours</span>
              </div>
            
              <span className='numbers'>9</span>
                  
             </div>
             <div className='dashboard-card'>
              <div className='icon-title'>
                 <SlPeople />
              <span className='card-title'>Total Working Hours</span>
              </div>
            
              <span className='numbers'> 360</span>
                  
             </div>
        </div>

        <div className='graphs'>

           <AttendanceChart reportingData={userAttendanceData}/>
           <LineChartAttendance  attendanceData={userAttendanceData}/>
           

          

        </div>

    </div>
</div>
  )
}

export default EmployeeDashboard