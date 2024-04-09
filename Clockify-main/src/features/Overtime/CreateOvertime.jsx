import React from 'react'
import { useState } from 'react'
import { useCreateNewOverTimeMutation } from './overtimeApi';
import { ErrorToast, LoadingToast, SuccessToast, ToasterContainer } from '../../components/Toaster/Toaster';




const CreateOvertime = ({closeModal}) => {
 const[userId,setUserId]=useState('')
 const[rateperhour, setRateperHour]=useState('');
 const[numberofhours,setNumberofHours]=useState('');
const[CreateNewOverTime]=useCreateNewOverTimeMutation()

const handleCreateOverTime=async(e)=>{
   
    try {
        // LoadingToast(true)
        e.preventDefault()
         const ratePerHourValue=e.target.ratePerHour.value
         const userIdValue=e.target.userIdValue.value
         const numberofHoursValue=e.target.numberofHoursValue.value

        //  console.log(ratePerHourValue,userIdValue,numberofHoursValue)
        const response=await CreateNewOverTime({rate_per_hours:ratePerHourValue,number_of_hours:numberofHoursValue,user_id:userIdValue}).unwrap()
        SuccessToast(response.message)
        console.log(response)
        LoadingToast(false)
        
    } catch (error) {
        console.log(error)
    }

}
 

  return (
    <div className='create-position-container'>
    <ToasterContainer/>
            <div className='add-group-modal'>
 

 <form action="" onSubmit={handleCreateOverTime}>
   <h3 className='create-group-header'>Create Overtime</h3>
    <div className="textarea">
        <input  type='number' placeholder='rate per hour ' id='ratePerHour'
           onChange={(e)=>{setRateperHour(e.target.value)}}
        
        />

        </div>

   <div className="textarea">
      <input type="number" placeholder='number of hours' id='numberofHoursValue'
            onChange={(e)=>{setNumberofHours(e.target.value)}}
         
         />
   </div>

   <div className="textarea">
      <input type="text" placeholder='employee id' id='userIdValue'
            onChange={(e)=>{setUserId(e.target.value)}}
         
         />
   </div>
       
        <div className="footer">
         <div className="btn">
            <button type='submit' >Create</button>
         </div>
         </div>
      </form>


   
   
   
      
    
    </div>
    </div>
  )
}

export default CreateOvertime