import React from 'react'
import Component3 from './Component3'

const Component2 = ({value}) => {
  return (
    <div style={{ width : '100px'}} className=' ms-5 border'>
        <h1>1</h1>
        <Component3 value={value}/>
    </div>
  )
}

export default Component2