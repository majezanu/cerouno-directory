import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
const DeleteContact = (props) => {

    return <React.Fragment>        
            <button className={'btn btn-danger'} onClick={props.action}>
                <FontAwesomeIcon icon={faMinus}/>
                {
                    props.text ? props.text : 'Eliminar contacto'
                }
            </button>
        </React.Fragment>
} 

export default DeleteContact