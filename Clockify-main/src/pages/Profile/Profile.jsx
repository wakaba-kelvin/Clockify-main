import React from 'react'
import '../Profile/Profile.scss'
import useLocalStorage from '../../hooks/useLocalStorage';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal'
import EditProfile from '../../features/Profile/EditProfile';
import noDp from '../../assets/no_profile_avatar.avif'
import axios from "axios"
import { SuccessToast } from '../../components/Toaster/Toaster';

const Profile = () => {
    const [userDetails, setUserDetails] = useLocalStorage('user');
    const [isModalOpen,setModalOpen]=useState(false);
    const [image, setImage]=useState(null);
    const [imageUrl,setImageUrl]=useState('')
    const [uploading, setUploading]=useState(false)


    

    const openModal=()=>{
    
        setModalOpen(true)
    }

    const closeModal=()=>{
        setModalOpen(false)
    }

    const handleImageChange=(e)=>{
        const selectedImage=e.target.files[0]
        setImage(selectedImage)
    }

    const handleImageUpload=async ()=>{
          try {
            alert("uploading")

            const formData=new FormData()
            formData.append('file',image)   
            formData.append("upload_preset", "Talky2")
            formData.append("cloud_name", "dpxmkgoty")
            setUploading(true)
    
    
            const uploadResponse = await fetch('https://api.cloudinary.com/v1_1/dpxmkgoty/image/upload', {
                method: "POST",
                body: formData,
              });
            
            
              const uploadData=await uploadResponse.json()
              setImageUrl(uploadData.secure_url)
    
    
              const saveData = {
                // "video_description": null,
                "photo_url": uploadData.secure_url,
              };
    
              const response = await axios.post(`http://localhost:3000/api/photo/${userDetails.user_id}`, saveData, {
            headers: {
              'Content-Type': 'application/json',
             
            },
          });

           console.log("uploading response", response)
            
          } catch (error) {
            console.error('Error uploading video:', error.response ? error.response.data.error : error.message);
          }
          finally{
            setUploading(false);
          }

    };



    




    
  return (
    <div className='profile-container'>
    <div className='title-bar'>
        <span>Profile</span>
        <button onClick={openModal}>Edit profile</button>

        {
            isModalOpen&&(<Modal onClose={closeModal}>
                <EditProfile/>
          
            </Modal>)
        }
    </div>

    <div className='content-wrapper'>
        <div className='profile-section-one'>
            {
                image ?<img src={URL.createObjectURL(image)} alt="no profile image" className="profile-img" />:<img src={noDp} alt="no profile image" className="profile-img" />
            }
            {/* <img src="" alt="no profile image" className="profile-img" /> */}
             <button className='upload-image-btn' onClick={handleImageUpload}>Change photo</button>
             <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
        </div>

        <div className='profile-section-two'>
            <div className='basic-info'>
            <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label> First Name </label><br/>
                                    <input readonly type="text"
                                     name="firstname" id="" 
                                     placeholder="First name"
                                     value={userDetails.firstname}
                                     
                                     />    
                                     
                                </div>
                                <div class="label-input-group">
                                    <label> Middle  Name </label><br/>
                                    <input readonly type="text"
                                     name="middlename" id=""
                                     placeholder="Middle name" 
                                     value={userDetails.middlename}  
                                     
                                     />   
                              
                                </div>
                    
                                <div class="label-input-group">
                                    <label> Last Name </label><br/>
                                    <input readonly type="text"
                                     name="lastname" id=""
                                     placeholder="Password" 
                                     value={userDetails.lastname} 
                                      
                                      />
                                  
                                
                                </div>
                </div>
                <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label> Email </label><br/>
                                    <input readonly type="text"
                                     name="email" id="" 
                                     placeholder="First name"
                                     value={userDetails.email}
                                     
                                     />    
                                     
                                </div>
                                <div class="label-input-group">
                                    <label> Passport No./National Id. No</label><br/>
                                    <input readonly type="text"
                                     name="identification" id=""
                                     placeholder="Middle name" 
                                     value={userDetails.identification_number}
                                     
                                     />   
                              
                                </div>
                    
                                <div class="label-input-group">
                                    <label> Marital Status</label><br/>
                                    <input readonly type="text"
                                     name="marital status" id=""
                                     placeholder="Password" 
                                     value={userDetails.marital_status}
                                      
                                      />
                                  
                                
                                </div>
                </div>
                <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label> Job Description/Position</label><br/>
                                    <input readonly type="text"
                                     name="position" id="" 
                                     placeholder="no position"
                                     value={userDetails.position_description}
                                     
                                     />    
                                     
                                </div>
                                <div class="label-input-group">
                                    <label> Gross Salary</label><br/>
                                    <input readonly type="text"
                                     name="identification" id=""
                                     placeholder="Ksh XXXXXXX" 
                                     value={userDetails.gross_salary} 
                                     
                                     />   
                              
                                </div>
                    
                                <div class="label-input-group">
                                    <label> Course of study</label><br/>
                                    <input readonly type="text"
                                     name="course of study" id=""
                                     placeholder="Course of study " 
                                     value={userDetails.course_of_study} 
                
                                      />
                                  
                                
                                </div>
                </div>

                <div className='label-input-wrapper'>
                        <div class="label-input-group">
                                <label>Skills : Languages</label><br/>
                                <input type="text" name="" id="" placeholder="English, Kiswahil, French ,etc"
                                value={userDetails.language}
                                
                                
                                /> 
                 
                            </div>
                            <div class="label-input-group">
                                <label> Skills: Technical </label><br/>
                                <input type="text" name="" id="" placeholder="Example: Javascript, MS-Word, Access, Microsoft Sql Server" 
                                value='React, Angular,Node, Javascript, TypeScript'
                                
                                /> 
             
                            </div>

                    
                    

                        </div>

                <div className='label-input-wrapper'>
                            
                <div className='label-input-wrapper'>
                            <div class="label-input-group">
                                    <label>Emergency Contact : Person's Name</label><br/>
                                    <input type="text" name="" id="" placeholder="example:John Doe"
                                    value='John Doe'
                                    
                                    
                                    
                                    /> 

                                </div>
                                <div class="label-input-group">
                                    <label> Emergency contact: Person's Number</label><br/>
                                    <input type="number" name="" id="" placeholder="07056576788" min="0"
                               
                                    value='07037383993'
                                    />   
              
                                </div>
                    
                                <div class="label-input-group">
                                    <label> Emergency Contact:Relationship</label><br/>
                                    <input type="text" name="" id="" placeholder="Example: brother, father ,sister ,spouse"
                                   value='brother'
                                    
                                    />

                                </div>

                            </div>
                </div>
                <div className='label-input-wrapper'>
                   <div class="label-input-group">
                        <label>Password</label><br/>
                        <input type="password" name="" id="" placeholder="password"
                        value='kkekkkkw'
                        disabled
                        
                        />  
                                       
                    </div>
                    <div class="label-input-group">
                        <label> Confirm Password </label><br/>
                        <input type="password" name="" id="" placeholder=" confirm password" 
                        value ='ddjdjdjdjdjdj'
                         disabled
                        /> 
                        

                    </div>


        
               

                   </div>

            </div>
            
        </div>
      
      
    </div>

        
   </div>
  )
}

export default Profile