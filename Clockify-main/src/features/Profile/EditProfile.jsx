import React from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';
import '../Profile/EditProfile.scss'
import { useState } from 'react';
import { ErrorToast, LoadingToast, SuccessToast, ToasterContainer } from '../../components/Toaster/Toaster';
import { useUpdateUserProfileMutation } from './profileApi';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {


    const [userDetails, setUserDetails] = useLocalStorage('user');
    // console.log(userDetails.user_id)
    const [password,setPassword]=useState('');
    const[confirmPassword, setconfrimPassword]=useState('');
    const[maritalStatus,setMaritalStatus]=useState(userDetails.marital_status);
    const[firstname, setFirstname]=useState(userDetails.firstname)
    const[middlename,setMiddlename]=useState(userDetails.middlename)
    const[lastname,setLastname]=useState(userDetails.lastname)
    const[updateUserProfile]=useUpdateUserProfileMutation()
    const navigate=useNavigate()

    


    const handleUpdate=async(e)=>{
        e.preventDefault()
      
        console.log(userDetails.user_id)
        const id=userDetails.user_id
        console.log(password,confirmPassword)
        try{
            if(password!==''||confirmPassword!==''){
                if(password===confirmPassword){
                 
                    const data={
                        firstname:firstname,middlename:middlename,lastname:lastname,password:password,marital_status:maritalStatus,
                        user_id:userDetails.user_id
                    }
                  
                    const updateResponse=await updateUserProfile(data).unwrap()
                    setTimeout(()=>{
                        navigate('/profile')
                    },2000)
                    // LoadingToast(true)
                    SuccessToast(updateResponse.message)
                   

                }
                else{
                    ErrorToast('password mismatch')
                }
                
            }
            else{
                ErrorToast('password cannot be empty')
            }


        }
        catch(error){
          console.log(error.data.message)
          ErrorToast(error.data.message)
        }
        finally{
            LoadingToast(false)
        }



    }




  return (
    <form className='profile-section-two' onSubmit={handleUpdate}>
        <ToasterContainer/>
        <h3>Edit profile</h3>
            <div className='basic-info'>
            <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label> First Name </label><br/>
                                    <input readonly type="text"
                                     name="firstname" id="" 
                                     placeholder="First name"
                                     value={firstname}

                                    onChange={(e)=>{setFirstname(e.target.value)}}
                                     
                                     />    
                                     
                                </div>
                                <div class="label-input-group">
                                    <label> Middle  Name </label><br/>
                                    <input readonly type="text"
                                     name="middlename" id=""
                                     placeholder="Middle name" 
                                     value={middlename}  
                                    onChange={(e)=>{setMiddlename(e.target.value)}}
                                     
                                     />   
                              
                                </div>
                    
                                <div class="label-input-group">
                                    <label> Last Name </label><br/>
                                    <input readonly type="text"
                                     name="lastname" id=""
                                     placeholder="Password" 
                                     value={lastname}
                                    onChange={(e)=>{setLastname(e.target.value)}}

                                      
                                      />
                                  
                                
                                </div>
                </div>
                <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label> Email </label><br/>
                                    <input readonly type="text"
                                     name="email" id="" 
                                     placeholder="First name"
                                    //  value={userDetails.email}

                                     
                                     />    
                                     
                                </div>
                              
                    
                                <div class="label-input-group">
                                    <label> Marital Status</label><br/>
                                    <input readonly type="text"
                                     name="marital status" id="maritalStatusValue"
                                     placeholder="Password" 
                                     value={maritalStatus}
                                        onChange={(e)=>{setMaritalStatus(e.target.value)}}
                                      
                                      />
                                  
                                
                                </div>
                </div>
                           
                <div className='label-input-wrapper'>
                   <div class="label-input-group">
                        <label>Password</label><br/>
                        <input type="password" name="" id="passwordValue" placeholder="password"
                        // value=''
                            onChange={(e)=>{setPassword(e.target.value)}}
                        
                        
                        />  
                                       
                    </div>
                    <div class="label-input-group">
                        <label> Confirm Password </label><br/>
                        <input type="password" name="" id="confirmPasswordValue" placeholder=" confirm password" 
                        // value =''
                           onChange={(e)=>{setconfrimPassword(e.target.value)}}
                         
                        /> 
                        

                    </div>


        
               

                   </div>

            </div>

            <button type="submit" className='update-btn'>Update</button>            
        </form>
  )
}

export default EditProfile