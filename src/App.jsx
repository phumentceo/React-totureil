import React from 'react'
import Var01 from './components/variables/Var01'
import Props01 from './components/props/Props01'
import Props02 from './components/props/Props02'
const App = () => {
  return (
    <div>
       {/* <Var01/>
       <Var01/>
       <Var01/>
       <Var01/>
       <Var01/> */}

       <Props01 name={"Phument"} address={"Kompong Thome"}/>

       {/* <Props01 name={"Reaksa"} address={"Kompong Cham"}/> */}
       <Props02 size={100} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/640px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg"}/>
       <Props02 size={500} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/640px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg"}/>
    </div> 
  )
}

export default App