import React from 'react'
import { ThemeContext } from './ThemeContext'
import Page1 from './Page1';

const Main = () => {
   //state for dark mode and lighth mode
  const [darkMode, setDarkMode] = React.useState(false);
  
  //toggle dark mode and light mode
  const toggleMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div>
        <ThemeContext.Provider value={{darkMode,toggleMode}}>
            <Page1/>
        </ThemeContext.Provider>
    </div>
  )
}

export default Main