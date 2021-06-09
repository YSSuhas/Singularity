import React from 'react'
import './message.css'
import { Alert } from '@material-ui/lab'

function Message( { color , type , message } ) {
    return (
        <div className="message">
            <Alert severity={type} className="messagea">
                {message}
            </Alert>
        </div>
    )
}

export default Message