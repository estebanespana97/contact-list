import { useState , useEffect} from 'react'
import './App.css'
import ContactList from './components/ContactList.jsx'
import SelectedContact from './components/SelectedContact.jsx'


function App() {
  // const [count, setCount] = useState(0)
  const [contacts, setContacts] = useState( [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ]);
  const [selectedContact, setSelectedContactId] = useState(null);

  useEffect(() => {
    async function fetchContacts(){
      try{
        const data = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
        const result = await data.json();
        setContacts(result);
        console.log(result);
      }
      catch(error){
        console.error(error);
      }
    }
    fetchContacts()
  },[]);
  console.log(selectedContact);
  return (
    <>{selectedContact ? (
      <div><SelectedContact selectedContactId={selectedContact}/></div>
    ) : (
      <div className="card">
        <ContactList setSelectedContactId={setSelectedContactId} contacts={contacts}/>
      </div>
    )}
    </>
  )
}

export default App
