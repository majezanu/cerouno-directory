import React from 'react'
import './ContactCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'

const ContactCard = (props) => {

    return <div className='card contact'>
        <img className="card-img-top" src={props.contact.imgUrl} alt="Not found"></img>
        <div className="card-body">
                <h1>{props.contact.name}</h1>
                <div className="row">
                    <div className="col">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="col">
                        <span>{props.contact.phone}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <FontAwesomeIcon icon={faMailBulk} />
                    </div>
                    <div className="col">
                        <span>{props.contact.email}</span>
                    </div>
                </div>
        </div>
        
        
    </div>
} 

export default ContactCard