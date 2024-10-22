import React from 'react'

const Condition02 = () => {
  const a = 10;
  const status = false;
  const total  = 100;
  return (
    <div>
        <h1>Condition 02 Example</h1>
        { (a == 10) ? <h3>Condition is true</h3> : <h3>Conditon is false</h3> }

        { status ? <h3>Condtion for status true</h3> : <h3>Condtion for status false</h3>  }

        { (total <= 100) && <h3>Condtion for total is true</h3> }
    </div>
  )
}

export default Condition02