import React from 'react'

const Intro02 = () => {
  const name = "Phument";
  const course = "React JS";
  const dateTime = new Date().toLocaleString();
  const totalStudent = 6;
  return (
    <div>
        <h1>Intro to React JS 02</h1>
        <h1>Teach by : {name} </h1>
        <h1>Course   : {course}</h1>
        <h1>Teach Now: {dateTime}</h1>
        <h1>Total Student: {totalStudent}</h1>
    </div>
  )
}

export default Intro02;