import React from 'react'

const Condition04 = ({status}) => {
  return (
    <div>
        <h1>Condition04</h1>
        {/* condition with props */}
        {status && <h2>Status is true</h2>}
    </div>
  )
}

export default Condition04