import React, { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './allquestions.css'
import Navbars from '../components/navbar'
import { allquestionsAction } from '../actions/questionactions';
import {LinkContainer} from 'react-router-bootstrap'

function Allquestions( { history } ) {

    const [ sortby , setSortby ] = useState('stars1');

    const dispatch = useDispatch();

    const allquestions = useSelector( state => state.allquestions );
    const { loading , error , questions } = allquestions;

    useEffect( () => {
        dispatch(allquestionsAction(sortby));
        document.title = "Questions > SINGULARITY";
    } , [ sortby , dispatch ])

    const clickHandler = () => {
        history.push('/ask_question');
    }

    return (
        <div className="allquestions">
            <Navbars />
            <div className="allquestionsf">
                <button onClick={clickHandler}>Ask question</button>
                <select value={sortby} onChange={e => setSortby(e.target.value)}>
                    <option value="stars1">Stars increasing</option>
                    <option value="stars-1">Stars decreasing</option>
                    <option value="createdAt1">Time increasing</option>
                    <option value="createdAt-1">Time decreasing</option>
                    <option value="answers-1">Most answered</option>
                </select>
            </div>
            { questions && questions.map(question => {

                if(question.statement.length>100) {
                    var problem = question.statement.substr(0,100);
                    problem = problem + "...";
                }
                else {
                    var problem = question.statement;
                }

                const date = question.createdAt.substr(0,10);
                const time = question.createdAt.substr(11,12);

                return (

                    <div className="allquestionsq">
                        <div className="allquestionsqf">
                            <p>{time}</p>
                            <h6>{question.user.username}</h6>
                            <p>{date}</p>
                        </div>
                        <LinkContainer to={`/questions/${question._id}`}>
                            <h5>{problem}</h5>
                        </LinkContainer>
                    </div>

                )

            })}
        </div>
    )
}

export default Allquestions