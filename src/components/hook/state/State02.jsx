import React, { useState } from 'react'

const State02 = () => {
  const [count, setCount] = useState(0);
  
  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <div>
        <div className=" d-flex align-items-center">
            <button onClick={handleDecrement} className=' btn btn-danger'>-</button>
            <p className=' p-3 mt-2'>{count}</p>
            <button onClick={handleIncrement} className=' btn btn-success'>+</button>
        </div>
    </div>
  )
}

export default State02