import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

function Loader() {
    return (
        <div>
            <Spinner animation="grow" variant="light" size="lg"/>
        </div>
    )
}

export default Loader