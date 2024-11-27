import React, { useContext } from 'react'
import Component4 from './Component4'

const Component3 = ({value}) => {
  
  return (
    <div style={{ width : '100px'}} className=' ms-5 border'>
        <h1>2</h1>
        <Component4 value={value}/>
    </div>
  )
}

export default Component3