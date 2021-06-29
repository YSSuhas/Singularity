import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './allquestions.css'
import Navbars from '../components/navbar'
import { allquestionsAction } from '../actions/questionactions';
import {LinkContainer} from 'react-router-bootstrap'

function Allquestions( { history } ) {

    const dispatch = useDispatch();

    const allquestions = useSelector( state => state.allquestions );
    const { loading , error , questions } = allquestions;

    useEffect( () => {
        dispatch(allquestionsAction());
        document.title = "Questions > SINGULARITY";
    } , [ dispatch ])

    return (
        <div className="allquestions">
            <Navbars />
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