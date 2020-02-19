import React, {Component} from 'react'
import contactsData from './contactsData';
import ContactCard from '../../atoms/ContactCard/ContactCard';
import AddContact from '../../atoms/AddContact/AddContact';
import DeleteContact from '../../atoms/DeleteContact/DeleteContact';
import AddContactForm from '../../molecules/AddContactForm/AddContactForm';
class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {contacts: []};
        this.addContact = this.addContact.bind(this);
        this.addContacts = this.addContacts.bind(this);
        this.deleteContacts = this.deleteContacts.bind(this);
        this.setContacts = this.setContacts.bind(this);
    }
    addContact = (contact) => {
        this.setState(
            prevState => ({
                contacts: [
                    ...prevState.contacts,
                    contact
                ]
            })
        )
    }

    addContacts = () => {
        this.setContacts(contactsData);
    }
    deleteContacts = () => {
       this.setContacts([]);
    }
    setContacts = (contacts) => {
        this.setState({
            contacts
        })
    }
    render() {
        return (
            <div className='container'>
                {
                    this.state.contacts.length > 0 ?
                    <React.Fragment>
                        <DeleteContact action={this.deleteContacts} text={'Eliminar contactos'}></DeleteContact>
                        {
                            this.state.contacts.map((contact, idx)=>{
                                return <React.Fragment key={idx}>
                                    <br/>
                                    <ContactCard contact={contact} action={this.addContact}></ContactCard>
                                    <br/>
                                    
                                </React.Fragment>
                            })
                        }
                    </React.Fragment>
                    
                     :
                    <React.Fragment>
                        <AddContact action={this.addContacts} text={'Agregar contactos'}></AddContact>
                        <h1>No hay contactos disponibles</h1>
                    </React.Fragment>
                }
                <AddContactForm action={this.addContact}></AddContactForm>
            </div>
        )
    }
}

export default Directory;