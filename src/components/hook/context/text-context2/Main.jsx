import React from 'react'
import Parent from './Parent'
import { Context } from './Context'

const Main = () => {
  return (
    <div>
        <Context.Provider value={{color : 'red'}}>
           <Parent/>
        </Context.Provider>
    </div>
  )
}

export default Main