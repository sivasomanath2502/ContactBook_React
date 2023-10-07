import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Profile from '../assets/profile.png'
import DeleteConfirmation from './DeleteConfirmation'
import { useContactsCrud } from '../context/ContactsCurdContext'
const ContactCard = (props) => {
    const contact = props.contact;
    const {removeContactHandler} = useContactsCrud();
    const [isModalOpen, setIsModalOpen] =useState(false)
    const handleDeleteClick = () => {
        setIsModalOpen(true)
    }
    const handleConfirmDelete = () => {
        removeContactHandler(contact.id)
        setIsModalOpen(false)
    }
    const handleCloseModal = () => {
        setIsModalOpen(false)
    }
  return (
    <div className='item'>
        <div style={{display:'flex'}}>
          <Link to={`/contact/${contact.id}`} state={{ contact }} >
            <img className='ui avatar image' src={Profile} alt='Profile'/>
          </Link>
          <div className='content'>
              <div className='header'>{contact.name}</div>
              <div>{contact.mobile}</div>
              <div>{contact.email}</div>
          </div>
        </div>
        <i className='trash alternate outline icon' style={{color:'red', marginTop:'7px'}} onClick={handleDeleteClick}/>
        <Link to={`/edit`} state={{ contact }} >
          <i className='edit alternate outline icon' style={{color:'green',marginTop:'7px'}} />
        </Link>
        <DeleteConfirmation
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  )
}

export default ContactCard