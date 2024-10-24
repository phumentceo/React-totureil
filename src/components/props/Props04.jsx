import React from 'react'

const Props04 = ({id,name,gender,addrees,age,position}) => {
  return (
    <div>
        <hr />
        <ul>
            <li>Student Id     : {id}</li>
            <li>Student name   : {name}</li>
            <li>Student Gender : {gender}</li>
            <li>Student Age : {age}</li>
            <li>Student Address : {addrees}</li>
            <li>Student Position : {position}</li>
        </ul>
    </div>
  )
}

export default Props04