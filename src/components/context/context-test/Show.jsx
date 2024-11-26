import React from 'react'
import Component2 from './Component2'

const Show = ({value}) => {
  return (
    <div>
        <h1>Main Component</h1>
        <Component2 value={value}/>
    </div>
  )
}

export default Show