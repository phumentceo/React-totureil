import React from 'react'
import Var01 from './components/variables/Var01'
import Props01 from './components/props/Props01'
const App = () => {
  return (
    <div>
       {/* <Var01/>
       <Var01/>
       <Var01/>
       <Var01/>
       <Var01/> */}

       <Props01 name={"Phument"} address={"Kompong Thome"}/>

       <Props01 name={"Reaksa"} address={"Kompong Cham"}/>
    </div>
  )
}

export default App