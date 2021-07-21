import React, { useEffect } from 'react'
import './searchquestions.css'
import { useDispatch, useSelector } from 'react-redux';
import Navbars from '../components/navbar'
import {LinkContainer} from 'react-router-bootstrap'
import { searchquestionAction } from '../actions/questionactions';

function Searchquestions({ match }) {

    const dispatch = useDispatch();

    const searchquestion = useSelector( state => state.searchquestion );
    const { loading , error , searchQuestion } = searchquestion;

    useEffect( () => {
        dispatch( searchquestionAction(match.params.id) );
        document.title = "Questions > SINGULARITY";
    } , [ dispatch , match ])

    return (
        <div className="searchquestions">
            <Navbars />
            { searchQuestion && searchQuestion.map(question => {

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

                    <div className="searchquestionsq">
                        <div className="searchquestionsqf">
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

export default Searchquestions