import React from 'react'
import Children from './Children'
const Parent = () => {
  return (
    <div style={{width : '200px'}} className=' border p-2 ms-5'>
        <p>Parent Components</p>
        <Children/>
    </div>
  )
}

export default Parent