import React from 'react'


function Sidebar() {
  return (
    <>
       <div className='w-[20%] h-[80%]  gap-2 p-2 border-4 border-black'>Sidebar
        <div className='flex items-center gap-2  text-white'>
          <img className="w-6" src="./images/home.png" alt="Home-icon"/>
          <p>Home</p>
          
        </div>
        <div className='flex items-center gap-2  text-white '>
          <img className="w-6 " src="./images/search.png" alt="search-icon"/>
          <p>search</p>
          </div>
       </div>
       
       
       
    </>
 
  )
}

export default Sidebar