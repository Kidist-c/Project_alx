import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import MusicPlayer from './pages/MusicPlayer'
import PlayList from './pages/PlayList'
import Settings from './pages/Settings'
import SignUp from './pages/SignUp'
import UserProfile from './pages/UserProfile'
import Library from './pages/Library'
import Sidebar from './components/Sidebar'
function App() {
  return (
    <div className="bg-black h-screen rounded-lg flex">
       <Router>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/musicplayer" element={<MusicPlayer/>}/>
          <Route path="/setting" element={<Settings/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/userprofile" element={<UserProfile/>}/>
          <Route path="/library" element={<Library/>}/>

          

        </Routes>
       </Router>
    </div>
  )
}

export default App
