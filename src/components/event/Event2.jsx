import React from 'react'

const Event2 = ({message,children}) => {
  return (
    <div>
        <button onClick={() => alert(message)}>
            {children}
        </button>
    </div>
  )
}

export default Event2