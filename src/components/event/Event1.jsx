import React from 'react'

const Event1 = () => {
   const handleClick = () => {
      alert(1)
   }
   const handleInput = (e) => {
     console.log(e.target.value)
   }

  return (
    <div>
        <button onClick={handleClick}>Click me</button>
        <input type="text" onInput={handleInput} />
    </div>
  )
}

export default Event1