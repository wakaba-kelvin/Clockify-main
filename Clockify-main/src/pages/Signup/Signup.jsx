import React from 'react'
import './Signup.scss'
import logo from '../../assets/Clockify-logo.png'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useGetPositionsQuery, useGetScheduleQuery, useRegisterNewUserMutation } from '../../features/Register/registerApi'
import { ErrorToast, LoadingToast, SuccessToast, ToasterContainer } from '../../components/Toaster/Toaster'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'



const Signup = () => {

    const [registerNewUser,{error,isLoading}]=useRegisterNewUserMutation();
    const[selectedPosition, setSelectedPosition]=useState('')
    const[selectedSchedule, setSelectedSchedule]=useState('')
    const navigate=useNavigate()
    const {data:positions, isError, isFetching}=useGetPositionsQuery();
    const {data:schedules}=useGetScheduleQuery()
    console.log("schedueles",schedules)

    const handleChange=(e)=>{
        setSelectedPosition(e.target.value)
    }

    const handleChangeSchedule=(e)=>{
        setSelectedSchedule(e.target.value)
    }
    console.log("selected  postion", selectedPosition,selectedSchedule)
    

    console.log(`data:${positions}, isFethcing :${isFetching}, isLoading:${isLoading}`)
    // if (error) {
    //     return <h1>error..</h1>
    //  }
    //  if (isLoading) {
    //     return <h1>loading...</h1>
  
    //  }

    const handleRegisterNewUser=()=>{
        try{

        }
        catch(error){

        }
    }




    const schema=yup.object().shape({
        firstname:yup.string().required("firstname is required"),
        middlename:yup.string().required("middlename is required"),
        lastname:yup.string().required("lastname is required"),
        date_of_birth:yup.date().required("date of birth is required"),
        email:yup.string().email().required("email is required"),
        gender:yup.string().min(3).required("gender is required"),
        phone_number:yup.number().positive().integer().min(0).required("phone is required "),
        place_of_residence:yup.string().required("place of residence is required"),
        identification_number:yup.string().required(" passport number/ national identification number is required"),
        marital_status:yup.string().required("marital status is requred"),
        course_of_study:yup.string().required("course of study is required"),
        institution:yup.string().required("institution of study is required"),
        graduation_date:yup.date().required("graduation date is required "),
        emergency_contact_person_name:yup.string().required("emergency contact  person's name is required"),
        emergency_contact_person_number:yup.string().required("emergency contact person's number is required"),
        emergency_contact_person_relationship:yup.string().required("relationship is required"),
        skills_languages:yup.string().required("languages are required"),
        skills_technical:yup.string().required("technical skills are required")
         
    })
   const{register,handleSubmit, formState:{errors}}=useForm({
    resolver:yupResolver(schema)
   })

   
const submit=async(data)=>{
        
  try {
    const{firstname,middlename,lastname,date_of_birth,gender,identification_number,marital_status,email,phone_number,course_of_study,institutiton,graduation_date,emergency_person_name,
        emergency_phone_number,relationship,language,technical
    }=data
        // console.log(data)
        const formattedData = {
            ...data,
            
            date_of_birth: data.date_of_birth.toISOString(), 
            graduation_date: data.graduation_date.toISOString(), 
            phone_number: data.phone_number.toString(),
            position_id:selectedPosition,
            schedule_id:selectedSchedule
        };

        console.log(formattedData)
        const response = await registerNewUser(
            formattedData
        ).unwrap();
        
    
      console.log(response)
    // console.log("isLaoding",isLoading)
      LoadingToast(true)
      SuccessToast(response.message)

      setTimeout(()=>{
        navigate('/employeelisting')
      },5000)
    
  } catch (error) {
    console.log(error)
    console.log(error.data.message)
   
    ErrorToast(error.data.message)
    
    

  }
  finally{
    LoadingToast(false)
  }
    
    
}




  return (
    
    <div className='signup-layout'>
        <ToasterContainer/>
        <div className='signup-container'>
        <form  className='signup-form' onSubmit={handleSubmit(submit)}>
                    
             <img src={logo} alt=""  className='logo'/>
             <span>Please fill in your details to register</span>
                    <div className='label-input-wrapper'>
                            <div className="label-input-group">
                                    <label> First Name </label><br/>
                                    <input type="text"
                                     name="firstname" id="firstname" 
                                     placeholder="First name"
                                     {...register('firstname')}
                                     
                                     />    
                                     <p className='error-message' >{errors.firstname?.message}</p>              
                                </div>
                                <div className="label-input-group">
                                    <label> Middle  Name </label><br/>
                                    <input type="text"
                                     name="middlename" id="middlename"
                                     placeholder="Middle name" 
                                     {...register("middlename")}
                                     
                                     /> 
                                     <p className="error-message">{errors.middlename?.message}</p>  
                              
                                </div>
                    
                                <div className="label-input-group">
                                    <label> Last Name </label><br/>
                                    <input type="text"
                                     name="lastname" id="lastname"
                                     placeholder="Password" 
                                     {...register("lastname")}
                                      
                                      />
                                     <p className="error-message">{errors.lastname?.message}</p>
                                
                                </div>
                            </div>

                     <div className='label-input-wrapper'>
                            <div className="label-input-group">
                                    <label>Date of Birth</label><br/>
                                    <input type="date"
                                     name="date_of_birth" id="date_of_birth" placeholder="date of birth"  min="1900-01-01"  max="2007-12-31"
                                     {...register("date_of_birth")}
                                    
                                     
                                     /> 
                                     <p className="error-message">{errors.date_of_birth?.message}</p>                 
                                </div>

                                <div className="label-input-group">
                                    <label>Gender</label><br/>
                                    <input type="text"
                                     name="gender" id="gender" placeholder=" for example :male, female or intersex" 
                                     {...register("gender")}
                                    
                                     
                                     /> 
                                     <p className="error-message">{errors.gender?.message}</p>                 
                                </div>

                                <div className="label-input-group">
                                    <label> Email </label><br/>
                                    <input type="email" name="email" id="email" placeholder="username@example.com" 
                                    
                                    {...register("email")}
                                    />  
                                    <p className="error-message">{errors.email?.message}</p>                
                                </div>
                    
                                <div className="label-input-group">
                                    <label> Phone Number </label><br/>
                                    <input type="number" name="phone_number" id="phone_number" placeholder="070383983477" 
                                    
                                    {...register("phone_number")}
                                    
                                    
                                    />
                                    <p className="error-message">{errors.phone_number?.message}</p>
                                </div>
                                <div className="label-input-group">
                                    <label> Place of Residence </label><br/>
                                    <input type="text" name="place_of_residence" id="place_of_residence" placeholder="Example:Nyeri"
                                      {...register("place_of_residence")}
                                    />
                                    <p className="error-message">{errors.place_of_residence?.message}</p>
                                </div>

                            </div>

                      <div className='label-input-wrapper'>
                            <div className="label-input-group">
                                    <label>Passport Number/ National Id. Number</label><br/>
                                    <input type="text" name="identification_number" id="identification_number" placeholder="passport no/national identification number"
                                    
                                    {...register("identification_number")}
                                    
                                    /> 
                                    <p className="error-message">{errors.identification_number?.message}</p>                 
                                </div>
                                <div className="label-input-group">
                                    <label> Marital Status</label><br/>
                                    <input type="text" name="mariatal_status" id="marital_status" placeholder="marital status" 
                                      {...register("marital_status")}
                                    
                                    />

                                    <p className="error-message">{errors.marital_status?.message}</p>
                                </div>
                                 <div class="label-input-group">
                                    <label> Job Title/Position </label><br/>
                                  
                                    <select onChange={handleChange} value={selectedPosition}>
                                        <option value="">Select an Job/Position</option>
                                        {positions&&positions.map((position,index)=>(
                                             <option key={position.position_id} value={position.position_id}>{position.position_description}</option>
                                        ))}
                                    </select>
                                             
                                </div> 



                                <div class="label-input-group">
                                    <label> Assigned Schedule</label><br/>
                                  
                                    <select onChange={handleChangeSchedule} value={selectedSchedule}>
                                        <option value="">Select a schedule for an employee</option>
                                        {schedules&&schedules.map((schedule,index)=>(
                                             <option key={schedule.schedule_id} value={schedule.schedule_id}>{schedule.schedule_description}</option>
                                        ))}
                                    </select>
                                             
                                </div> 
                                


                                {/* <div class="label-input-group">
                                    <label> Proposed Gross Salary </label><br/>
                                    <input type="number" name="" id="" placeholder="Ksh 30000"  min='1'
                                    //  {...register("gross_salary")}
                                     disabled

                                    />  
                                    {/* <p className="error-message">{errors.gross_salary?.message}</p>                 
                                </div> */}
                    
                               

                            </div>
                   
                      <div className='label-input-wrapper'>
                        <div className="label-input-group">
                                <label>Course of Study</label><br/>
                                <input type="text" name="course_of_study" id="course_of_study" placeholder="example : BSc.Computer Science"
                                
                                {...register("course_of_study")}
                                
                                
                                />    
                                <p className="error-message">{errors.course_of_study?.message}</p>              
                            </div>
                            <div className="label-input-group">
                                <label> Institution</label><br/>
                                <input type="text" name="institutiton" id="institutiton" placeholder="example : University of Nairobi"
                                
                                {...register("institution")}
                                
                                
                                
                                />    
                                <p className="error-message">{errors.institution?.message}</p>              
                            </div>
                
                            <div className="label-input-group">
                                <label> Graduation Year</label><br/>
                                <input type="date" name="graduation_date" id="graduation_date" placeholder="graduation year" min="1900-01-01"  max="today"
                                {...register("graduation_date")}
                                
                                
                                />
                                <p className="error-message">{errors.graduation_date?.message}</p>
                            </div>

                        </div>

                      <div className='label-input-wrapper'>
                            <div className="label-input-group">
                                    <label>Emergency Contact : Person's Name</label><br/>
                                    <input type="text" name="emergency_person_name" id="emergency_person_name" placeholder="example:John Doe"
                                     {...register("emergency_contact_person_name")}
                                                                        
                                    /> 
                                    <p className="error-message">{errors.emergency_contact_person_name?.message}</p>                 
                                </div>
                                <div className="label-input-group">
                                    <label> Emergency contact: Person's Number</label><br/>
                                    <input type="number" name="emergency_person_number" id="emergency_person_number" placeholder="07056576788" min="0"
                                     {...register("emergency_contact_person_number")}
                                    
                                    />   
                                    <p className="error-message">{errors.emergency_contact_person_number?.message}</p>               
                                </div>
                    
                                <div className="label-input-group">
                                    <label> Emergency Contact:Relationship</label><br/>
                                    <input type="text" name="relationship" id="relationship" placeholder="Example: brother, father ,sister ,spouse"
                                    {...register("emergency_contact_person_relationship")}
                                    
                                    />
                                    <p className="error-message">{errors.emergency_contact_person_relationship?.message}</p>
                                </div>

                            </div>

                      <div className='label-input-wrapper'>
                        <div className="label-input-group">
                                <label>Skills : Languages</label><br/>
                                <input type="text" name="language" id="language" placeholder="English, Kiswahil, French ,etc"
                                 {...register("skills_languages")}
                                
                                
                                /> 
                                <p className="error-message">{errors.skills_languages?.message}</p>                 
                            </div>
                            <div className="label-input-group">
                                <label> Skills: Technical </label><br/>
                                <input type="text" name="technical" id="technical" placeholder="Example: Javascript, MS-Word, Access, Microsoft Sql Server" 
                                 {...register("skills_technical")}
                                
                                /> 
                                <p className="error-message">{errors.skills_technical?.message}</p>                 
                            </div>
                    
                        </div>
                   
                   
                   <div className='label-input-wrapper'>
                   {/* <div class="label-input-group">
                        <label>Password</label><br/>
                        <input type="password" name="" id="" placeholder="password"
                        //  {...register("password")}  password is generated automatically in the server
                        disabled
                        
                        />  
                
                    </div> */}
                    {/* <div class="label-input-group">
                        <label> Confirm Password </label><br/>
                        <input type="password" name="" id="" placeholder=" confirm password" 
                        // {...register("confirm_password")}
                        disabled
                         
                        /> 
                       

                    </div> */}


        
               

                   </div>


        
                    <div className="label-input-group">
                        <button type="submit" className="sign-up-btn" value="Register">Register</button>
                    </div>
                    <div className="form-footer">
                        <a href="/" > Already an  Employee? Log in</a>
                        {/* <a href="/reset">Forgot Password?</a> */}
                    </div>
                    </form>
            
        </div>




    </div>
  )
}

export default Signup