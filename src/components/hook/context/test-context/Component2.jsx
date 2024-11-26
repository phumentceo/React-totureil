import React from 'react'
import Component3 from './Component3'

const Component2 = ({text}) => {
  return (
    <div style={{ width : "200px"}} className=' border ms-5'>
        2
        <p>{text}</p>
        <Component3 text={text}/>
    </div>
  )
}

export default Component2