import React from 'react'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import MusicPlayer from './components/MusicPlayer'
import PlayList from './pages/PlayList'
import Settings from './pages/Settings'
import SignUp from './pages/SignUp'
import UserProfile from './pages/UserProfile'
import Library from './pages/Library'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SearchBar from './components/Searchbar'

  function App(){
    return(
      
      
        <div className=" ">
           <Router>
            <Header/>
            <Navbar/>
            <SearchBar />
            
            <main className="flex-grow p-4">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              
              <Route path="/setting" element={<Settings/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/userprofile" element={<UserProfile/>}/>
              <Route path="/library" element={<Library/>}/>
    
              
    
            </Routes>
            </main>
            
            <MusicPlayer/>
           </Router>
        </div>
      )
    
  }

  


 


export default App
