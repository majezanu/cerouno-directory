import React, {Component} from 'react'
import contactsData from './contactsData';
import ContactCard from '../../atoms/ContactCard/ContactCard';
import AddContact from '../../atoms/AddContact/AddContact';
import DeleteContact from '../../atoms/DeleteContact/DeleteContact';
import AddContactForm from '../../molecules/AddContactForm/AddContactForm';

const url = 'https://jsonplaceholder.typicode.com/users';
class Directory extends Component {
    state = {contacts: []};

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
        fetch(url)
            .then(response => response.json())
            .then(
                data => {
                    this.setContacts(data);
                }
            );
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
                    <div className='row'>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                <DeleteContact action={this.deleteContacts} text={'Eliminar contactos'}></DeleteContact>
                                </div>
                            </div>
                            <div className="row">
                                    {
                                    this.state.contacts.map((contact, idx)=>{
                                        return <div className='col-6' key={idx}>
                                            <ContactCard contact={contact} action={this.addContact}></ContactCard>
                                            
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    
                     :
                    <div className='row'>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <AddContact action={this.addContacts} text={'Agregar contactos'}></AddContact>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h1>No hay contactos disponibles</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <AddContactForm action={this.addContact}></AddContactForm>
            </div>
        )
    }
}

export default Directory;