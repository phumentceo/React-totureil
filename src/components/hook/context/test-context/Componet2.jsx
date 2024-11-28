import React, { useContext } from 'react'
import { MainContext } from './Context'

const Componet2 = () => {

  const {message,color} = useContext(MainContext);

  return (
    <div style={{ width : '200px', backgroundColor : color}} className=' ms-5 border'>
        <h3>2</h3>
        <p>{message}</p>
    </div>
  )
}

export default Componet2