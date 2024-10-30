import React from 'react'

const Envent01 = () => {
  
  const handleClick = () => {
    alert("Hello");
  }

  const handleInput = (e) => {
     console.log(e.target.value);
  }
  return (
    <div>
        <button onClick={handleClick}>click me</button>
        <input type="text" name="" onInput={handleInput} id="" placeholder='enter you name' />
    </div>
  )
}

export default Envent01