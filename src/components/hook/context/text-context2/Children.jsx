import React, { useContext } from 'react'
import { Context } from './Context'

const Children = () => {
  const {color} = useContext(Context);
  return (
    <div style={{width : '200px', backgroundColor : color}} className=' border p-2 ms-5'>
        <p>This is a child component</p>
    </div>
  )
}

export default Children