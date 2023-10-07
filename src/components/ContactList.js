import ContactCard from './ContactCard'
import {Link} from 'react-router-dom'
import React, {useEffect} from "react"
import { useContactsCrud } from '../context/ContactsCurdContext'
const ContactList = (props) => {
    const {contacts, retrieveContacts, searchHandler, text, searchResults} = useContactsCrud();
  useEffect(() => {
    retrieveContacts();
  }, []);
  const renderContactList = (text.length < 1 ? contacts : searchResults).map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
      />
    );
  });
  const onUserSearch = (e) => {
    searchHandler(e.target.value);
  }
  return (
    <div className='main'>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <h2>Contact List</h2>
            <Link to='/add'><button className='ui button blue right'>Add Contact</button></Link>
        </div>
        <div className='ui search'>
            <div className='ui icon input ' style={{ width:'80%',marginLeft:'80px',fontSize:'1.1rem' }}>
                <input type="text" placeholder="Search Contacts" className="prompt" value={text}
                onChange={(e) => onUserSearch(e)}/>
                <i className='search icon' />
            </div>
        </div>
        <div className="ui celled list">
            {renderContactList.length > 0 ? renderContactList : <div className='ui header' style={{ width:'80%',marginLeft:'80px' }}>No Contacts available</div>}
      </div>
    </div>
  )
}

export default ContactList