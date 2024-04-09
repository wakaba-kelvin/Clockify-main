import React from 'react'
import '../AdminDashboard/AdminDashboard.scss'
import { SlPeople } from "react-icons/sl";
import {BarChart} from '@mui/x-charts/BarChart'
import { useGetAllEmployeesByGenderQuery, useGetAllEmployeesQuery } from '../../features/EmployeeListing/EmployeeListing';
import { useState } from 'react';
import { useGetAllPositionsQuery } from '../../features/Position/positionApi';
import { useGetAllSchedulesQuery } from '../../features/Schedule/scheduleApi';
import { useGetAttendanceReportStatisticsQuery } from '../../features/Attendance/attendanceApi';
import { useEffect } from 'react';
import GenderChart from '../../components/GenderChart/GenderChart';
import AttendanceChart from '../../components/AttendanceChart/AttendanceChart';


const AdminDashboard = () => {


   const{data:employees, isError, isLoading}=useGetAllEmployeesQuery()
   const [numberofEmployees, setNumberofEmployees]=useState()

   const {data:positions }=useGetAllPositionsQuery();
   const [numberofPositions, setNumberofPositions]=useState()

   const{data:schedules}=useGetAllSchedulesQuery()
   const[numberofSchedules,setNumberofSchedules]=useState()

   const{data:gendersStatistics}=useGetAllEmployeesByGenderQuery()
   const[genders,setGenders]=useState(gendersStatistics)

   console.log('gender statistics',gendersStatistics)

   const{data:attendanceStatistics}=useGetAttendanceReportStatisticsQuery()

   console.log(attendanceStatistics)
   const[attendanceStats,setAttendanceStatistics]=useState(attendanceStatistics)


   
  return (
    <div className='admin-dashboard-container'>
        <div className='title-bar'>
            <span>Home | Dashboard</span>
        </div>
        <div className='content-wrapper'>
            <div className='dashboard-cards'>
                 <div className='dashboard-card'>
                  <div className='icon-title'>
                     <SlPeople />
                  <span className='card-title'> Employees</span>
                  </div>
                
                  <span className='numbers'>{employees? employees.length : '-'}</span>
                      
                 </div>

                 <div className='dashboard-card'>
                  <div className='icon-title'>
                     <SlPeople />
                  <span className='card-title'>Positions</span>
                  </div>
                
                  <span className='numbers'> {positions? positions.length:'-'}</span>
                      
                 </div>
                 <div className='dashboard-card'>
                  <div className='icon-title'>
                     <SlPeople />
                  <span className='card-title'>Schedules </span>
                  </div>
                
                  <span className='numbers'>{schedules? schedules.length :'-'}</span>
                      
                 </div>
                 <div className='dashboard-card'>
                  <div className='icon-title'>
                     <SlPeople />
                  <span className='card-title'>Active Employee</span>
                  </div>
                
                  <span className='numbers'> 100</span>
                      
                 </div>
            </div>

            <div className='graphs'>


             <GenderChart genderData={gendersStatistics}/>
             <AttendanceChart reportingData={attendanceStatistics}/>
       



               {/* <BarChart
                   series={[
                     { data: [35, 44, 24, 34] },
                     { data: [51, 6, 49, 30] },
                     { data: [15, 25, 30, 50] },
                     { data: [60, 50, 15, 25] },
                   ]}
                   height={290}
                   xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                   margin={{ top: 50, bottom: 30, left: 40, right: 10 }}
               
               
               
               
               />
                <BarChart
                   series={[
                     { data: [35, 44, 24, 34] },
                     { data: [51, 6, 49, 30] },
                     { data: [15, 25, 30, 50] },
                     { data: [60, 50, 15, 25] },
                   ]}
                   height={290}
                   xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                   margin={{ top: 50, bottom: 30, left: 40, right: 10 }}
               
               /> */}

               

            </div>

        </div>
    </div>
  )
}

export default AdminDashboard