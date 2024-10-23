import React from 'react'

const Condition3 = ({avg,name}) => {
  return (
    <div>
        <h1>Condition 3 Component</h1>
         {  avg >= 90 && <h2>Congratulations <span style={{color:"red",fontWeight : "bold"}}> {name} </span> ! You passed the exam with an A grade.</h2> }
         { (avg >= 80 && avg <90) && <h2>Congratulations <span style={{color:"red",fontWeight : "bold"}}> {name} </span> ! You passed the exam with an B grade.</h2> }
         { (avg >= 70 && avg <80) && <h2>Congratulations <span style={{color:"red",fontWeight : "bold"}}> {name} </span> ! You passed the exam with a C grade.</h2> }
         { (avg >= 60 && avg <70) && <h2>Congratulations <span style={{color:"red",fontWeight : "bold"}}> {name} </span> ! You passed the exam with a D grade.</h2> }
         { (avg >= 50 && avg <60) && <h2>Congratulations <span style={{color:"red",fontWeight : "bold"}}> {name} </span> ! You passed the exam with a E grade.</h2> }
         { avg < 50 && <h2>Sorry <span style={{color:"red",fontWeight : "bold"}}> {name} </span> , you failed the exam.</h2> }

    </div>
  )
}

export default Condition3