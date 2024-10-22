import React from 'react'
import Object3 from './Object3'

const Object4 = () => {
  const person = [
    {
        id : 1,
        name : 'John Doe',
    },
    {
        id : 2,
        name : 'John Son',
    },
    {
        id : 3,
        name : 'John Davis',
    }


  ]
  return (
    <div>
        <h1>Object 4 Example</h1>
        {person.map((item) => (
            <Object3 id={item.id} name={item.name}/>
        ))}
    </div>
  )
}

export default Object4