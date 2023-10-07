import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContactsCrud } from '../context/ContactsCurdContext'
const AddContact = (props) => {
    const [name,setName] = useState('')
    const [mobile,setMobile] = useState('')
    const [email,setEmail] = useState('')
    const [fields,setFields] = useState(false)
    const {addContactHandler} = useContactsCrud()
    const navigate = useNavigate();
    const handleOnAdd = (e) =>{
        e.preventDefault(); 
        if(name === '' || mobile===''){
            setFields(true)
            return
        }
        addContactHandler({name,mobile,email})
        setName('')
        setMobile('')
        setEmail('')
        setFields(false)
        navigate('/')
    } 
  return (
    <div className='ui main'>
        <h2>Add Contact</h2>
        <form className='ui form' onSubmit={handleOnAdd}>
            <div className='field'>
                <label>Name</label>
                <input type='text' name='name' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='field'>
                <label>Mobile</label>
                <input type='tel' name='mobile' placeholder='Enter 10 digit Mobile Number' value={mobile} pattern='[0-9]{3}[0-9]{3}[0-9]{4}' onChange={(e) => setMobile(e.target.value)}/>
            </div>
            <div className='field'>
                <label>Email</label>
                <input type='email' name='email' placeholder='Enter Email Address' value={email} pattern=".+@gmail\.com" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            {fields && <div className='ui header' style={{color:'red'}}>Please fill all the fields</div>}
            <button className='ui button blue'>Add</button>
        </form>
    </div>
  )
}

export default AddContact