import React from 'react'
import '../Position/EditPosition.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEditPositionMutation, useGetOnePositionQuery } from './positionApi';
import { ErrorToast, SuccessToast, ToasterContainer } from '../../components/Toaster/Toaster';

const EditPosition = ({position, closeGroup}) => {
 console.log(position)
    const[gross_salary,setGrossSalary]=useState(position?position.gross_salary:'');
    const[position_description,setPositionDescription]=useState(position?position.position_description:'')

    const [editPosition]=useEditPositionMutation()
    const navigate=useNavigate()

    const handleEditPosition=async(e)=>{
      e.preventDefault();
      console.log(position)

      const editedPositionDetails={
         position_id:position.position_id,
         position_description:position_description,
         gross_salary:position.gross_salary
      }

      console.log("editing",editedPositionDetails)

      try{
         const response=await  editPosition({position_description:position_description,gross_salary:gross_salary, position_id:position.position_id}).unwrap();
         console.log(response)
         SuccessToast(response.message)
          setTimeout(()=>{
            closeGroup()
          },5000)
            
      }
      catch(error){
        console.log(error)
        ErrorToast(error.data.message)

      }
    }



  return (
    <div className='create-position-container'>
      <ToasterContainer/>
            <div className='add-group-modal'>
 

 <form action="" onSubmit={handleEditPosition} >
   <h3 className='create-group-header'>Edit Position</h3>
    <div className="textarea">
        <input  placeholder='position' id='position'
           onChange={(e)=>{setPositionDescription(e.target.value)}}
           value={position_description}
        />

        </div>

   <div className="textarea">
      <input type="text" placeholder='gross salary' id='gross_salary'
            onChange={(e)=>{setGrossSalary(e.target.value)}}
            value={gross_salary}
            
         />
   </div>
       
        <div className="footer">
         <div className="btn">
            <button type='submit' >Edit  </button>
         </div>
         </div>
      </form>


    </div>
    </div>
  )
}

export default EditPosition