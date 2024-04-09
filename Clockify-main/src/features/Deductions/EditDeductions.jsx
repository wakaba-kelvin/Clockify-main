;import React from 'react'
import '../Position/CreatePosition.scss'
import { useState } from 'react';
import { useEditDeductionMutation } from './deductionsApi';
import { useNavigate } from 'react-router-dom';
import { ErrorToast, LoadingToast, SuccessToast, ToasterContainer } from '../../components/Toaster/Toaster';

const EditDeductions = ({deduction,onClose}) => {


    const[description,setDescription]=useState(deduction?deduction.description:'')
    const[amount,setAmount]=useState(deduction?deduction.amount:'');
    const[user_id, setUserID]=useState(deduction?deduction.user_id:'');
    const[editDeduction]=useEditDeductionMutation()
    const navigate=useNavigate()
  
    
    const handleEditDeduction=async(e)=>{
       e.preventDefault()
       try {
            const response=await editDeduction({description:description, amount:amount, user_id:user_id}).unwrap()
         
            LoadingToast(true)
            SuccessToast(response.message)
            e.target.reset()
            setTimeout(()=>{
               navigate('/deductions')
               onClose()
            },3000)
            
         
       } catch (error) {
         ErrorToast(error.data.message)
       }
    }


 

  return (
    
    <div className='create-position-container'>
    <ToasterContainer/>
            <div className='add-group-modal'>
 

 <form action="" onSubmit={handleEditDeduction}>
   <h3 className='create-group-header'>Edit Deductions for {deduction.firstname} {deduction.lastname}</h3>
    <div className="textarea">
        <input  type='text' placeholder='description ' id='description'
           onChange={(e)=>{setDescription(e.target.value)}}
           value={description}
        
        />

        </div>

   <div className="textarea">
      <input type="number" placeholder='amount' id='amount'
            onChange={(e)=>{setAmount(e.target.value)}}
            value={amount}
         
         />
   </div>

   <div className="textarea">
      <input type="text" placeholder='employee id' id='user_id'
            onChange={(e)=>{setUserID(e.target.value)}}
           value={user_id}


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

export default EditDeductions