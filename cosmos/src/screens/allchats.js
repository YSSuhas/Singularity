import React from 'react'
import { useDispatch } from 'react-redux'
import Navbars from '../components/navbar'
import './allchats.css'

function Allchats() {

    useDispatch();

    return (
        <div className="allchats">
            <Navbars />
            <div>

            </div>
        </div>
    )
}

export default Allchats