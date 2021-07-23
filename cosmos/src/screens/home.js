import React, { useEffect } from 'react'
import './home.css'
import Navbars from '../components/navbar'
import Footer from '../components/footer'

function Home({ history }) {

    useEffect( () => {
        document.title = "SINGULARITY"
    } , [])

    const submitHandler = (link) => {
        history.push(link);
    }

    return (
        <div className="home">
            <Navbars />
            <div className="homef">
                <div className="homeff" onClick={()=>submitHandler('/ask_question')}>
                    <h5>Ask Questions</h5>
                </div>
                <div className="homeff" onClick={()=>submitHandler('/questions')}>
                    <h5>Answer Questions</h5>
                </div>
            </div>
            <div className="homef">
                <div className="homeff">
                    <h5>Chat with others</h5>
                </div>
                <div className="homeff" onClick={()=>submitHandler('/picture_of_the_day')}>
                    <h5>View Picture of the Day</h5>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home