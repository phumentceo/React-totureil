import React, { useState } from 'react'

const State01 = () => {
  const [text,setText] = useState('');
  const [address,setAddress] = useState('');
  const [name,setName] = useState('');

  const handleClick = () => {
    setText('HELLO state');
  }

  const handleInputName = (e) => {
     setName(e.target.value);
  }

  const handleInputAddress = (e) => {
    setAddress(e.target.value);
  }
  
  return (
    <div>
        <h1>State 01</h1>
        <p>This is a simple state example</p>
        <button onClick={handleClick}>Click Me</button>
        <p>{text}</p>
        

        <input type="text" onInput={handleInputName} name="" id="" placeholder='Enter Your name' /><br />
        <p>Your Name : {name}</p>

        <input type="text" onInput={handleInputAddress} placeholder='Enter your address' /><br />
        <p>Your Address: {address}</p>
    </div>
  )
}

export default State01