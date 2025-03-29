import React from 'react'
import { useState } from 'react'



function Login() {
  const [Action,setAction]=useState("Sign Up")

  return (
    <div className='bg-blue-700 flex flex-col mt-55px gap-y-6' >
        <div>
          <div className='flex flex-col items-center gap-9 w-screen mt-28 '>
            <div className='text-center text-red-700 text-4xl font-thin'>
              {Action}
              </div>
              <div className='w-32 h-4 bg-red-700 rounded-lg'></div>
                <div className='mt-8 flex flex-col gap-y-6'>
                  <div className='flex items-center m-auto w-96  h-14 bg-slate-200 rounded-md'>
                    <img className='my-0 mx-7' src="../images/person.png" alt=""/>
                    <input className='h-7 w-300 border-0 font-medium' type="text" placeholder='write your name' />
                  </div>
                  <div className='flex items-center m-auto w-96  h-14 bg-slate-200 rounded-md'>
                    <img  className='my-0 mx-7'src="../images/email.png" alt=""/>
                    <input className='h-7 w-300 border-0 font-medium'  type="email" placeholder='email' />
                  </div>
                  <div className='flex items-center m-auto w-96  h-14 bg-slate-200 rounded-md'>
                    <img  className='my-0 mx-7' src="../images/password.png" alt=""/>
                    <input className='h-7 w-300 border-0 font-medium'  type="password" placeholder='password' />
                  </div>
                  <div>
                    <div className='pl-16 mt-7  text-base text-gray-500'>forget password<span
                     className='text-purple-600 cursor-pointer  '>Click here!</span></div>
                     <div className='flex gap-7 my-9 mx-auto justify-center'>
                      
                     <div className={Action==="Login"?"submit gray":"submit"}className='flex items-center justify-center w-225 h-10 rounded-md text-white bg-purple-800 cursor-pointer' >
                      Sign Up
                    </div>
                    <div className={Action==="Sign Up"?"submit gray=":"submit"} className='flex items-center justify-center w-225 h-10 rounded-md text-white bg-purple-800 cursor-pointer' >
                      Login
                    </div>
                     </div>
                    
                  </div>
                </div>
              
            
          </div>
        </div>
    </div>
  )
}

export default Login
