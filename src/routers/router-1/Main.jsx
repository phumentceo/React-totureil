import React from 'react'
import HomePage from './HomePage'
import ContactPage from './ContactPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Main = () => {
  return (
    <div>

        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
            </Routes>
        </BrowserRouter>
        
             
    </div>
  )
}

export default Main