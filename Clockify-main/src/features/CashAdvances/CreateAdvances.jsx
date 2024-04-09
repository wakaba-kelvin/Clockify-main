import React from 'react'
import { useCreateCashAdvanceMutation } from './cashAdvancesApi'
import { useState } from 'react';
import { ErrorToast, LoadingToast, SuccessToast, ToasterContainer } from '../../components/Toaster/Toaster'
import { useNavigate } from 'react-router-dom';






const CreateAdvances = () => {

const [createCashAdvance]=useCreateCashAdvanceMutation();

 const [number_of_worked,setHoursofWorked]=useState('');
 const [amount,setAmount]=useState('')
 const [user_id, setUserID]=useState('')
 const navigate=useNavigate();
 const[loading, setLoading]=useState('')


const handleCreateCashAdvance=async(e)=>{
    e.preventDefault()

   
    const amountValue=e.target.amount.value
    const userIDValue=e.target.user_id.value
    



    try {


        if( amountValue=="" || userIDValue==""){
            ErrorToast("The input fields cannot be empty")
             navigate('/advances')

             
        }
        else{
            LoadingToast(true)
            const response=await createCashAdvance({amount:amountValue,user_id:userIDValue}).unwrap()
   
           SuccessToast(response.message)
           e.target.reset()
           LoadingToast(false)
           setTimeout(()=>{
              navigate('/advances')
           },1000)

           setLoading(true)


        }
      

    } catch (error) {
        console.log(error)
        ErrorToast(error.data.message)
        LoadingToast(false)
        setTimeout(()=>{
            navigate('/advances')
         },1000)
    }

    finally{
        // LoadingToast(true)
        navigate('/advances')
    }
}






  return (
    <div className='create-position-container'>
    <ToasterContainer/>
  
            <div className='add-group-modal'>
 

 <form action="" onSubmit={handleCreateCashAdvance}>
   <h3 className='create-group-header'>Create Advances</h3>
   

   <div className="textarea">
      <input type="number" placeholder='amount' id='amount'
            onChange={(e)=>{setAmount(e.target.value)}}
         
         />
   </div>

   <div className="textarea">
      <input type="text" placeholder='employee id' id='user_id'
            onChange={(e)=>{setUserID(e.target.value)}}
         
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

export default CreateAdvances