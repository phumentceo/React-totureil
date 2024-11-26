import React from 'react'
import Component2 from './Component2'

const Component1 = ({text}) => {
  return (
    <div style={{ width : "200px"}} className=' border ms-5'>
        1
        <p>{text}</p>
        <Component2 text={text}/>
    </div>
  )
}

export default Component1