import React from 'react'

const Event1 = () => {
   const handleClick = () => {
      alert(1)
   }
   const handleInput = (e) => {
     console.log(e.target.value)
   }

   const shoot = (a,b) => {
      alert(b.type)
   }

  return (
    <div>
        <button onClick={handleClick}>Click me</button> <br /><br />
        <input type="text" onInput={handleInput} /> <br /><br />

        <button onClick={(event) => shoot("Goal",event) }>Take the shoot</button> <br />
    </div>
  )
}

export default Event1