import React, { useContext } from 'react'
import './style.css'
import { ThemeContext } from './ThemeContext';
const Page1 = () => {

  const {darkMode,toggleMode}  = useContext(ThemeContext);

  return (
    <div className='main-page'  style={{ 
         backgroundColor: darkMode ? 'black' : 'white',
         color : darkMode ? 'white' : 'black' 
        }}>

        <div className=' mx-auto w-50'>
           <button onClick={toggleMode} className=' btn btn-primary'>{darkMode ? 'Dark' : 'Light' }</button>
           <h3>{darkMode ? 'Dark Mode' : 'Light Mode' }</h3>
        </div>

        
    </div>
  )
}

export default Page1