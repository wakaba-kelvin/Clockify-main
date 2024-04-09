import React from 'react'
import '../Schedule/CreateSchedule.scss'
import { useCreateNewScheduleMutation } from './scheduleApi';
import { useState } from 'react';
import { ErrorToast, SuccessToast, ToasterContainer } from '../../components/Toaster/Toaster';









const CreateSchedule = () => {

    const [in_time,setInTime]=useState('');
    const[out_time,setOutTime]=useState('');
    const [schedule_description, setScheduleDescription]=useState('')
    const [createNewSchedule]=useCreateNewScheduleMutation()

    const handleCreateSchedule=async(e)=>{
        e.preventDefault()

        const inTime=e.target.inTime.value;
        const outTime=e.target.outTime.value;
        const scheduleDescription=e.target.scheduleDescription.value
        console.log(outTime,inTime, scheduleDescription)

        try {
            if(inTime== ''|| outTime=='' || scheduleDescription==''){
                ErrorToast("input fields cannot be empty. Please input the required data")
            }
            else{
                const response=await createNewSchedule({in_time:inTime,out_time:outTime,schedule_description:scheduleDescription}).unwrap()
                console.log(response)
    
                SuccessToast(response.message)
                e.target.reset()
                

            }

           
        } catch (error) {
            console.log(error)
            ErrorToast(error.data.message)
            e.target.reset()
        }

 

    }







  return (
    



    <div className='create-position-container'>
    <ToasterContainer/>
            <div className='add-group-modal'>
 

 <form action="" onSubmit={handleCreateSchedule}>
   <h3 className='create-group-header'>Create Schedule</h3>
    <div className="textarea">
        <input  type='time' placeholder='in time ' id='inTime'
           onChange={(e)=>{setInTime(e.target.value)}}
        
        />

        </div>

   <div className="textarea">
      <input type="time" placeholder='outTime' id='outTime'
            onChange={(e)=>{setOutTime(e.target.value)}}
         
         />
   </div>

   <div className="textarea">
      <input type="text" placeholder='schedule description' id='scheduleDescription'
            onChange={(e)=>{setScheduleDescription(e.target.value)}}
         
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

export default CreateSchedule