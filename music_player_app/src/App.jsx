import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
function App() {
  return (
    <div className='w-screen h-screen bg-slate-400 flex justify-center items-center text-base font-bold'>
      
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          

          

        </Routes>
       
    </div>
  )
}

export default App
