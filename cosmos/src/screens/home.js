import React from 'react'
import './home.css'
import Potd from '../components/potd'
import Navbars from '../components/navbar'

function Home() {
    return (
        <div className="Home">
            <Navbars />
            <Potd />
        </div>
    )
}

export default Home