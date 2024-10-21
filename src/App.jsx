import React from 'react'
import Intro01 from './components/introduction/Intro01'
import Intro02 from './components/introduction/intro02'
import Props01 from './components/props/Props01'
import Condition01 from './components/condition/Condition01'
import Condition02 from './components/condition/Condition02'
import Condition03 from './components/condition/Condition03'
import Condition04 from './components/condition/Condition04'

const App = () => {
  return (
    <div>
      {/* <Intro01/> */}

      {/* <Intro02/>
      <Props01 size={300}/>
      <Props01 size={200}/>
      <Props01 size={100}/> */}
      <Condition01/>
      <Condition02/>
      <Condition03/>
      <Condition04 status={true}/>
    </div>
  )
}

export default App