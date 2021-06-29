import React, { useEffect } from 'react'
import Navbars from '../components/navbar'
import Potd from '../components/potd'

function Picoftheday( { history } ) {

    /*useEffect( () => {

        const user = JSON.parse(localStorage.getItem('userInfo'));
        if(!user) {
            history.push('/login');
        }

    } , [ history ])*/

    return (
        <div className="picoftheday">
            <Navbars />
            <Potd />
        </div>
    )
}

export default Picoftheday