import React, { useContext } from 'react'
import Componet2 from './Componet2'
import { MainContext } from './Context'

const Component1 = () => {

  const {message} = useContext(MainContext)

  return (
    <div style={{ width : '200px'}} className=' ms-5 border'>
        <h3>1</h3>
        <p>{message}</p>
        <Componet2/>
    </div>
  )
}

export default Component1