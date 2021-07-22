import React, { useEffect } from 'react'
import './home.css'
import Navbars from '../components/navbar'
import Footer from '../components/footer'

function Home() {

    useEffect( () => {
        document.title = "SINGULARITY"
    } , [])

    return (
        <div className="home">
            <Navbars />
            <div className="homef">
                <div className="homeff">
                    <h5>Ask Questions</h5>
                </div>
                <div className="homeff">
                    <h5>Answer Questions</h5>
                </div>
            </div>
            <div className="homef">
                <div className="homeff">
                    <h5>Chat with others</h5>
                </div>
                <div className="homeff">
                    <h5>View Picture of the Day</h5>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home