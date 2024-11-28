import React from 'react'
import Component1 from './Component1'
import { MainContext } from './Context'

const Main = () => {
  return (
    <div>
        <MainContext.Provider value={{ message : "Hello Context", color : 'red'}}>
               <Component1/>
        </MainContext.Provider>
    </div>
  )
}

export default Main