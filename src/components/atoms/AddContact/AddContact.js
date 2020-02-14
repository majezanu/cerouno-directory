import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const AddContact = (props) => {

    return <React.Fragment>        
            <button className={'btn btn-primary'} onClick={props.action}>
                <FontAwesomeIcon icon={faPlus}/>
                {
                    props.text ? props.text : 'Agregar contacto'
                }
            </button>
        </React.Fragment>
} 

export default AddContact