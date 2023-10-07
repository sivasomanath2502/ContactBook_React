import './App.css';
import React from 'react'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import ContactDetails from './components/ContactDetails'
import EditContact from './components/EditContact';
import { ContactsCrudContextProvider } from './context/ContactsCurdContext';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() { 
    // const LOCAL_STORAGE_KEY = 'contacts'
    // useEffect(()=>{
    //   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
    // },[contacts])
    return (
      <div className="ui container">
        <BrowserRouter>
          <Header />
          <ContactsCrudContextProvider>
            <Routes>
              <Route path='/' exact element={<ContactList />} />
              <Route path='/add' element={ <AddContact />} />
              <Route path='/contact/:id' element={<ContactDetails />} />
              <Route path='/edit' element={ <EditContact />} />
            </Routes>
          </ContactsCrudContextProvider>
        </BrowserRouter>
      </div>
    )
}

export default App;
