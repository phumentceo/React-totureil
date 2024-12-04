import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <h1>My Home Page</h1>
        <Link to={"/contact"}>Contact</Link>
    </div>
  )
}

export default HomePage