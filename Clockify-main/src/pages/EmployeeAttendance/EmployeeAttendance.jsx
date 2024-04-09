import React from 'react'
import { BarChart } from '@mui/x-charts'
import useLocalStorage from '../../hooks/useLocalStorage';
import {useCreateCheckInMutation, useCreateCheckOutMutation, useGetAllAttendanceRecordsQuery } from '../../features/Attendance/attendanceApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { ErrorToast, LoadingToast, SuccessToast, ToasterContainer } from '../../components/Toaster/Toaster';
import { PuffLoader } from 'react-spinners';
import { calculateTheNumberofHourWorked } from '../Attendance/Attendance';


const EmployeeAttendance = () => {
    
    const [userDetails, setUserDetails] = useLocalStorage('user');
    const [attendanceRecords,setAttendanceRecords]=useState([])
    const [CreateCheckIn]=useCreateCheckInMutation()
    const [CreateCheckOut]=useCreateCheckOutMutation()
    // console.log(userDetails)
    const loggedInUser=userDetails.user_id

    const{data:attendance, isError, isLoading,isFetching}=useGetAllAttendanceRecordsQuery()

    console.log(`data:${attendance}, isError:${isError}`)
    
   const handleClockIn=async(e)=>{
       try {
        const response=await CreateCheckIn(loggedInUser).unwrap()
        console.log(response.message)
        LoadingToast(true)
        SuccessToast(response.message)
        LoadingToast(false)
        
        
       } catch (error) {
        console.log(error)
        ErrorToast(error.data.message)
        
       }
       finally{
        LoadingToast(false)
       }

   }

   const handleClockOut=async(e)=>{
     try {
        const response=await CreateCheckOut(loggedInUser).unwrap()
        console.log(response.message)
        LoadingToast(true)
        SuccessToast(response.message)
     } catch (error) {
        console.log(error)
        ErrorToast(error.data.message)
        
     }
     finally{
        LoadingToast(false)
       }
   }







  return (
    <div className='attendance-container'>
        <ToasterContainer/>
    <div className='title-bar'>

      <span>Attendance </span>
  </div>
  <div className='content-wrapper'>
      <div className='graphs'>
          

          </div>
          <div className='search-add-new-btn'>
          <form action="">
                  {/* <input type="search" name="" id="" placeholder='search for an position' /> */}
          </form>
          <div  className='button-wrapper'>
                  <button className='add-new-btn'  onClick={handleClockIn}>Clock In</button>
                  <button className='add-new-btn' onClick={handleClockOut}>Clock Out</button>
          </div>
      
         
      </div>
      {(isLoading)? (<div className="status-loader">
            <div className='status-loader-content'>
               <PuffLoader loading={true} size={150} />
                <p>Please wait .........</p>
             </div>
           </div>):   <table>
          <thead>
              <tr>
                  <th>Employee Id</th>
                  <th>Employee Name</th>
                  <th>Created At</th>
                  <th>Time in</th>
                  <th>Time Out</th>
                  <th>Working hours</th>
                  <th>Reporting State</th>
                  
              </tr>
          </thead>
          <tbody>
            {attendance&&attendance.map((record,index)=>(

             <tr key={index}>


                
                 <td>{userDetails.user_id}</td>
                 <td>{userDetails.firstname}{userDetails.lastname}</td>
                 <td>{formatDate(record.date)}</td>
                 <td>{record.time_in ? formatDate(record.time_in):'-'}</td>
                 {/* <td>{Date(record.time_out)}</td> */}
                 <td>{record.time_out ? formatDate(record.time_out) : '-'}</td>
                 <td>{(calculateTheNumberofHourWorked(record.time_in,record.time_out)).toFixed(4)}</td>
                 <td>{record.reporting_state}</td>
            
                 
             </tr>



            ))}

           
              
           



              
             
          </tbody>
      </table>}
      
  </div>

</div>
  )
}


export const formatDate = (time) => {
    const formattedTime = new Date(time).toUTCString(); 
    return formattedTime;
};





export default EmployeeAttendance


