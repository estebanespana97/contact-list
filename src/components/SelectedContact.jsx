import { useState , useEffect} from 'react'

function SelectedContact({selectedContactId}){
    const [contact, setContact] = useState([
        { id: 1, name: "R2-D2", username: "fakeUsername", website: "fakeWebsite" },
      ]);

    console.log(selectedContactId);

    useEffect(()=>{
        console.log('am i in use effect')
        async function fetchThisContacts(){
            const url = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
            try{
                const data = await fetch(url);
                const result = await data.json();
                setContact(result);
                console.log(result.name);
                console.log(result.username);
                console.log(result.website);
            }
            catch(error){
                console.error(error);
            }
        }
        fetchThisContacts();
    },[]);

      return(
        <tbody>
            <tr>
              <td>Name</td>
              <td>Username</td>
              <td>Website</td>
            </tr>
            <tr>
                <td>{contact.name}</td>
                <td>{contact.username}</td>
                <td>{contact.website}</td>
            </tr>
          </tbody>
      );
}

export default SelectedContact;