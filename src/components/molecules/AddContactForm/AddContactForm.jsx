import React, {Component} from 'react';
import Input from '../../atoms/Input/Input';
import AddContact from '../../atoms/AddContact/AddContact';
import DeleteContact from '../../atoms/DeleteContact/DeleteContact';

const INICIAL_CONTACT = {
    name: '',
    email: '',
    phone: ''
};
class AddContactForm extends Component
{
    constructor(props){
        super(props);
        this.state = { 
            contact: INICIAL_CONTACT
        }
    }

    handleInput = (e, key) => {
        let value = e.target.value;
        this.handleContact(key, value);
    }


    handleContact = (key, value) => {
        this.setState(
            (prevState) => ({
                contact: {
                    ...prevState.contact,
                    [key]: value
                }
            })
        );
    }

    handleSubmit = e => {
        e.preventDefault();
        this.handleClearForm(e);
        this.props.action(this.state.contact);
    }

    handleClearForm = e => {
        e.preventDefault();
        this.setState({
            contact: INICIAL_CONTACT
        });
        
    }
    render = () => (
        <div className="container">
            <div className="card row">
                <div className="col">
                    <form >
                    <Input 
                        name="name" 
                        type="text"
                        value={this.state.contact.name}
                        placeholder="Ingresa tu nombre"
                        handleChange={e => this.handleInput(e,'name')}
                        title="Nombre"
                    />
                    <Input 
                        name="email" 
                        type="text"
                        value={this.state.contact.email}
                        placeholder="Ingresa tu correo"
                        handleChange={e => this.handleInput(e,'email')}
                        title="Correo"
                    />
                    <Input 
                        name="phone" 
                        type="number"
                        value={this.state.contact.phone}
                        placeholder="Ingresa tu telefono"
                        handleChange={e => this.handleInput(e,'phone')}
                        title="Teléfono"
                    />
                    <AddContact 
                        action={this.handleSubmit}
                        text='Agregar'/>
                    <DeleteContact 
                        action={this.handleClearForm}
                        text='Reiniciar Formulario'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContactForm;
