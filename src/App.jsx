import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList.jsx'


function App() {
  const [count, setCount] = useState(0)
  const [contacts, setContacts] = useState( [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ]);

  console.log("Contacts: ", contacts)

  return (
    <>
      <div className="card">
        <ContactList contacts={contacts}/>
      </div>
    </>
  )
}

export default App
