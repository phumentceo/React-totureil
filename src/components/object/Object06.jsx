import React from 'react'
import { students } from './Data'
const Object06 = () => {

  return (
    <div>
        <h1>Student List using Array Destructuring</h1>
        {students.map(({ id, name, age }) => (
          <div key={id}>
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
          </div>
        ))}
    </div>
  )
}

export default Object06