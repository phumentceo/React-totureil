import React from 'react'

const Condition02 = () => {
  const isLoggedIn = true;
  return (
    <div>
        <h1>Condition 02</h1>
        {isLoggedIn &&  <h2>You are logged in</h2> }
    </div>
  )
}

export default Condition02