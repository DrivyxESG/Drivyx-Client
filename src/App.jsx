import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginRegister from './pages/Auth/LoginRegister/LoginRegister'
import DrivyxPreDashboard from './DrivyxPreDashboard/DrivyxPreDashboard'
import MainDashBoard from './MainDashBoard/MainDashBoard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/loginRegister" element={<LoginRegister/>}/>
        <Route path="/DrivyxPreDashboard" element={<DrivyxPreDashboard/>}/>
        <Route path='/mainDashboard' element={<MainDashBoard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App