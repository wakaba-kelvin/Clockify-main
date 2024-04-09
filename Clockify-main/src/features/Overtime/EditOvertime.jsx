import React from 'react'
import { useEditOvertimeMutation } from './overtimeApi';
import { useState } from 'react';
import { ErrorToast, LoadingToast, SuccessToast, ToasterContainer } from '../../components/Toaster/Toaster';
import { useNavigate } from 'react-router-dom';

const EditOvertime = ({overtime, onClose}) => {

    const[userId,setUserId]=useState(overtime?overtime.user_id:'');
    const[rateperhour, setRateperHour]=useState(overtime?overtime.rate_per_hours:'');
    const[numberofhours,setNumberofHours]=useState(overtime?overtime.number_of_hours:'');
    const[EditOvertime]=useEditOvertimeMutation()
    const navigate=useNavigate()
    

      


    
const handleEditOverTime=async(e)=>{
   
    try {
        // LoadingToast(true)
        e.preventDefault()
         const ratePerHourValue=e.target.ratePerHour.value
         const userIdValue=e.target.userIdValue.value
         const numberofHoursValue=e.target.numberofHoursValue.value

         console.log(ratePerHourValue,userIdValue,numberofHoursValue)
        const response=await EditOvertime({rate_per_hours:ratePerHourValue,number_of_hours:numberofHoursValue,user_id:userIdValue}).unwrap()
        
       
        console.log(response)
        // LoadingToast(true)
        SuccessToast(response.message)
        e.target.reset()
        setTimeout(()=>{
           navigate('/overtime')
           onClose()
          
        },3000)
        
        
    } catch (error) {
        console.log(error)
        ErrorToast(error.data.message)
    }
    finally{
      LoadingToast(false)
    }

}



  return (
    <div className='create-position-container'>
    <ToasterContainer/>
            <div className='add-group-modal'>
 

 <form action="" onSubmit={handleEditOverTime}>
   <h3 className='create-group-header'>Edit Overtime for {overtime.firstname} {overtime.lastname}</h3>
    <div className="textarea">
        <input  type='number' placeholder='rate per hour ' id='ratePerHour'
           onChange={(e)=>{setRateperHour(e.target.value)}}
           value={rateperhour}
        
        />

        </div>

   <div className="textarea">
      <input type="number" placeholder='number of hours' id='numberofHoursValue'
            onChange={(e)=>{setNumberofHours(e.target.value)}}
            value={numberofhours}
         
         />
   </div>

   <div className="textarea">
      <input type="text" placeholder='employee id' id='userIdValue'
            onChange={(e)=>{setUserId(e.target.value)}}
            value={userId}
         
         />
   </div>
       
        <div className="footer">
         <div className="btn">
            <button type='submit' >Edit</button>
         </div>
         </div>
      </form>
     
    
    </div>
    </div>
  )
}

export default EditOvertime