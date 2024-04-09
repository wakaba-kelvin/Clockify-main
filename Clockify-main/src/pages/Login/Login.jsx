import React from 'react'
import '../Login/Login.scss'
import LoginFormbackgroundImage from '../../assets/login_background_image.avif'
import logo from '../../assets/Clockify-logo.png'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { Navigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import {ErrorToast, LoadingToast, SuccessToast, ToasterContainer} from '../../components/Toaster/Toaster'
import { useLoginUserMutation } from '../../features/Login/loginApi'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'





const Login = () => {


    const [loginUser]=useLoginUserMutation()
    const [userDetails, setUserDetails] = useLocalStorage('user', null);
    const [token, setToken] = useLocalStorage('token ', null);
    const[isAdmin, setAdmin]=useState('')
    // console.log("user form the local storage ", userDetails,token )
    const navigate=useNavigate()

    const schema=yup.object().shape({
        email:yup.string().email().required("email is required"),
        password:yup.string().min(4).max(20).required("password is required "),

    })

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver:yupResolver(schema)
      });
     
      const onSubmit=async(data)=>{
       LoadingToast()
        try {
            const response=await loginUser(data).unwrap();
            console.log(response)
            console.log("Response status:", response.status);
            console.log("Response data:", response);
         
            LoadingToast(false)
            setUserDetails(response.user);
            setToken(response.token)
            // navigate('/admin')
            console.log("user details",userDetails.role,token )
            
            // console.log(isAdmin)
            console.log("checking the user",(userDetails.role=='user'))

            if(token){
                if(userDetails.role=='admin'){
                    SuccessToast(`Login successful Welcome ${data.email}`)
                    setTimeout(()=>{
                     navigate('/admin')
                    },3000)

                }
                if(userDetails.role=='user'){
                    SuccessToast(`login in successfull, Welcome${data.email}`)
                    setTimeout(()=>{
                        navigate('/employee')
                       },3000)

                }
                  

                // else{
                //     ErrorToast(`Login unscuccessful`)
                //     setTimeout(()=>{
                //         navigate('/')
                //     },3000)
                   
                // }

             
               
            }
            else{
                ErrorToast('Invalid Credentials user does not exist')
                navigate('/')
            }

            
        } catch (error) {
            console.log(error)
            ErrorToast(`${error.data} or account does not exists`)
        }
        finally{
            LoadingToast(false)
        }

       
    }






  return (
    <div className='login-layout'>
    <ToasterContainer/>
        <div className='login-container'>
            <div className='login-background-theme-image-wrapper'>
                <img src={LoginFormbackgroundImage} alt=""  className='login-background-theme-image'/>
                <img src={logo} alt=""  className='logo'/>
            </div>
            <div className='login-form-wrapper'>
                <form  className='login-form'  onSubmit={handleSubmit(onSubmit)}>
                    
                <h3>Hi Welcome back </h3>
                <span>Please fill in your details to log in</span>
                <div class="label-input-group">
                    <label>Email</label><br/>
                    <input 
                        type="text"
                         name="" id="email" 
                         placeholder="Email" 
                         {...register("email")}
                        
                         />  
                         <p className='error-message'>{errors.email?.message}</p>   

                </div>
    
                <div class="label-input-group">
                    <label>Password</label><br/>
                    <input 
                        type="password"
                         name="" id="password" 
                         placeholder="Password"
                         {...register("password")}
                         
                         />

                         <p className='error-message'>{errors.password?.message}</p>
                 
                </div>
    
                {/* <NavLink  to='/admin' className="label-input-group"  > */}
                    <div className='label-input-group'>
                             <input type="submit" class="sign-up-btn" value="Login"  />
                    </div>
                  
                {/* </NavLink> */}
             
                </form>

            </div>
        </div>
    
    </div>
  )
}

export default Login