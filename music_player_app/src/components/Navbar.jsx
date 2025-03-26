import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-around p-4 float-right bg-red-600 w-[100%] text-white hover:bg-sky-700 m-auto '>

        <Link to='/'>Home</Link>
        <Link to='/library'>Library</Link>
        <Link to='/login'>login</Link>
        <Link to='/playlist'>playList</Link>
        <Link to='/settings'>settings</Link>
        <Link to='/signup'>signUp</Link>
        <Link to='/userprofile'>profile</Link>
    </div>
  )
}

export default Navbar