import React from 'react'
import { Link } from 'react-router-dom'

const ContactPage = () => {
  return (
    <div>
        <h1>Contact Page</h1>
        <Link to={"/home"}>Home</Link>
    </div>
  )
}

export default ContactPage