import ContactRow from "./ContactRow";

function ContactList({ contacts }){
    return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
               contacts.map((thisContact) => {
                return <ContactRow key={thisContact.Id} contact={thisContact}/>;
               })
             }
          </tbody>
        </table>
    );
}

export default ContactList;