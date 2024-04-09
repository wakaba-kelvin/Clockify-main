import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorToast, LoadingToast, SuccessToast, ToasterContainer } from '../../components/Toaster/Toaster';
import { useEditcashAdvancesforAnEmployeeMutation } from './cashAdvancesApi';

const EditcashAdvances = ({cashadvanceDetails,onClose}) => {
    

 const [amount,setAmount]=useState( cashadvanceDetails?cashadvanceDetails.amount:'');
 const [user_id, setUserID]=useState(cashadvanceDetails?cashadvanceDetails.user_id[0]:'');
 const [editcashAdvancesforAnEmployee]=useEditcashAdvancesforAnEmployeeMutation();

 const navigate=useNavigate();
 const[loading, setLoading]=useState('')

 const handleEditCashAdvance=async(e)=>{
    e.preventDefault()

   
    const amountValue=e.target.amount.value
    const userIDValue=e.target.user_id.value
    
    try {

        if( amountValue=="" || userIDValue==""){
            ErrorToast("The input fields cannot be empty")
             navigate('/advances')
             
        }
        else{
           
            const response=await editcashAdvancesforAnEmployee({amount:amount, user_id:user_id}).unwrap()
            console.log(response)
            SuccessToast(response.message)     

            setTimeout(()=>{
              navigate('/advances')
              onClose()
            },3000)
           
        }
      

    } catch (error) {
        console.log(error)
        ErrorToast(error.data.message)
        LoadingToast(false)
        setTimeout(()=>{
            navigate('/advances')
            onClose()
         },1000)
    }

    finally{
        navigate('/advances')
        // onClose()
    }

}



  return (
                
    <div className='create-position-container'>
        <ToasterContainer/>
            <div className='add-group-modal'>

    <form action="" onSubmit={handleEditCashAdvance}>
   <h3 className='create-group-header'>Edit Advances  for {cashadvanceDetails.firstname} {cashadvanceDetails.lastname}</h3>
   

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

export default EditcashAdvances