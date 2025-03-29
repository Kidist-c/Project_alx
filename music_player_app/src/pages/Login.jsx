import React from 'react'
import { FcGoogle } from 'react-icons/fc'

function Login() {
  return (
    <div className='relative w-screen h-creen'>
        <div className='absolute  item-center bg-darkOverlay justify-center'>
          <div className='w-full md:400 p-5 bg-slate-400 shadow-3xl  rounded-md flex flex-col item-center  '>
            <div> 
               <FcGoogle/>
               <p> sign in with google</p>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Login
