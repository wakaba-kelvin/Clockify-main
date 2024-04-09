import React from 'react'
import '../Position/CreatePosition.scss'
import { useState } from 'react'
import { ErrorToast, LoadingToast, SuccessToast, ToasterContainer } from '../../components/Toaster/Toaster'
import { useCreateNewPositionMutation } from './positionApi'
import { useNavigate } from 'react-router-dom'


const CreatePosition = () => {
    const [position,setPositionDescription]=useState('');
    const[gross_salary,setGrossSalary]=useState('');
    const [createNewPosition]=useCreateNewPositionMutation()
    const navigate=useNavigate()




    const handleCreatePosition=async(e)=>{
      //   alert("hey")
        e.preventDefault()
        const position_description=e.target.position.value
        const grossSalary=e.target.gross_salary.value
        console.log(grossSalary,position_description)

        if(position_description=='' || grossSalary==''){
             ErrorToast("input fields cannot be empty. Please input the required data")
        }
        else{
            try {
                 const response =await createNewPosition({position_description:position,gross_salary:grossSalary}).unwrap();
                 console.log(response)
                 SuccessToast(response.message)
                 e.target.reset()
               
               
            } catch (error) {
               console.log(error.data.message)
               ErrorToast(error.data.message)
               e.target.reset()
              
               
            }
            finally{
               // window.reload()
               navigate('/positions')
            }
        }
    }




  return (
    <div className='create-position-container'>
      <ToasterContainer/>
            <div className='add-group-modal'>
 

 <form action="" onSubmit={handleCreatePosition}>
   <h3 className='create-group-header'>Create Position</h3>
    <div className="textarea">
        <input  placeholder='position' id='position'
           onChange={(e)=>{setPositionDescription(e.target.value)}}
        
        />

        </div>

   <div className="textarea">
      <input type="text" placeholder='gross salary' id='gross_salary'
            onChange={(e)=>{setGrossSalary(e.target.value)}}
         
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

export default CreatePosition