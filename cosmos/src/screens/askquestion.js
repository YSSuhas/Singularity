import React , { useEffect } from 'react'
import './askquestion.css'
import Navbars from '../components/navbar'
import Question from '../components/question'

function Askquestion( { history } ) {

    useEffect( () => {
        if(!(localStorage.getItem('userInfo'))) {
            history.push('/login');
        }
        document.title = "Ask Question > SINGULARITY" ;
    })

    const clickHandler = () => {
        history.push('/questions');
    }

    return (
        <div className="question">
            <Navbars />
            <Question redirect={history} />
            <button onClick={clickHandler}>Go back</button>
        </div>
    )
}

export default Askquestion;