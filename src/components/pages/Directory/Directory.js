import React, {Component} from 'react'
import contactsData from './contactsData';
import ContactCard from '../../atoms/ContactCard/ContactCard';
class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {contacts: contactsData};
    }
    render() {
        return (
            <div className='container'>
                {
                    this.state.contacts.map((contact, idx)=>{
                        return <React.Fragment>
                            <br/>
                            <ContactCard contact={contact} key={idx}></ContactCard>
                            <br/>
                        </React.Fragment>
                    })
                }
            </div>
        )
    }
}

export default Directory;