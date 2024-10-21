import React from 'react'

const Condition01 = () => {
  const num = 10;
  return (
    <div>
        <h1>Condition 01</h1>
        <h2>Number : { (num > 5) ? 'Greater Than 5' : 'Less Than or Equal to 5' } </h2>
        <h2>Number : {num}</h2>
    </div>
  )
}

export default Condition01