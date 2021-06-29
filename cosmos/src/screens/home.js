import React, { useEffect } from 'react'
import './home.css'
import Navbars from '../components/navbar'

function Home() {

    useEffect( () => {
        document.title = "SINGULARITY"
    } , [])

    return (
        <div className="Home">
            <Navbars />
        </div>
    )
}

export default Home