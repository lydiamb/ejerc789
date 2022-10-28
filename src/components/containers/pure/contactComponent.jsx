import Reac, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({ contact, connected, remove }) => {

    useEffect(() => {
        console.log("Created Contact");
        return () => {
            console.log(`Contact: ${contact.name} is going to unmount`);
        };
    }, [contact]);

    function contacConnected(){
        console.log("Estoy en el contacConnected");
        if(contact.connected){
            return (<i onClick={()=>connected(contact)} className="bi bi-toggle-on"><span className='badge bg-success'>'Connected'</span></i>)
        }else{
            return (<i onClick={()=>connected(contact)} className="bi bi-toggle-off"><span className='badge bg-danger'>'Disconnected'</span></i>)
        }
    }

    return (
    <tr className='fw-normal'>
        <th>
            <span className='ms-2'>{ contact.name }</span>
        </th>
        <td className='align-middle'>
            <span>{ contact.surname }</span>
        </td>
        <td className='align-middle'>
            <span>{ contact.email }</span>
        </td>
        <td className='align-middle'>
            {contacConnected()} 
        </td>
        <td>
            <i className="bi bi-trash" style={{color: 'tomato'}} onClick={() => remove(contact)}></i>
        </td>
    </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    connected: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
