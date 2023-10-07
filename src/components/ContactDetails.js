import React from 'react'
import User from '../assets/user.jpg'
import { useLocation,Link } from 'react-router-dom'
const ContactDetails = () => {
    const location = useLocation()
  const { contact } = location.state || {}
  return (
    <div className='main'>
        <div className='ui card centered'>
            <div className='image'>
                <img src={User} alt='image' />
            </div>
            <div className='content'>
                <div className='header'>{contact.name}</div>
                <div className='description'>{contact.mobile}</div>
                <div className='description'>{contact.email}</div>
            </div>
        </div>
        <div className='center-div' style={{textAlign: "center"}}>
            <Link to='/'>
                <button className='ui button blue'>Back</button>
                </Link>
        </div>
    </div>
  )
}

export default ContactDetails