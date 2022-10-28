import React, { useState, useEffect } from 'react';
import ContactComponent from './pure/contactComponent';
import ContactForm from '../containers/forms/contactForm';
import { Contact } from '../models/contact.class';
const ContactListComponent = () => {

    const defaultContact1 = 
        new Contact("Lydia","Manzanares","lydiamb12@gmail.com",true);
    const defaultContact2 = 
        new Contact("Raul","Manzanares","raul@gmail.com",false);
    const defaultContact3 = 
        new Contact("Miguel","Riojano","miguelR@gmail.com",false);

    const [contacts, setContacts] =  useState([defaultContact1, defaultContact2, defaultContact3]);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        console.log("Constac state has been modified");
        setLoading(false);

        return () => {
           console.log("ContactList component is going to unmount...");
        };
    }, [contacts]);  

    function connectedContact(contact){
        console.log('Connected this contact', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].connected = !tempContacts[index].connected;
        setContacts(tempContacts);
    }

    
    function addContact(contact){
        console.log('complete this contact', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    function deleteContact(contact){
        console.log('deleting this contact');
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        setContacts(tempContacts);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header'>
                        <h5>
                            Your Contacts:
                        </h5>
                    </div>
                    <div className='card-body' style={ {position: 'relative', height: '400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Surname</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>IsConnected</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index)=>{
                                    return(
                                        <ContactComponent 
                                            key={index} 
                                            contact={contact}
                                            connected={connectedContact}
                                            remove={deleteContact}>
                                        </ContactComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
}

export default ContactListComponent;
