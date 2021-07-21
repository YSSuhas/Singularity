import React, { useEffect } from 'react'
import './myquestions.css'
import Navbars from '../components/navbar'
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { viewprofileAction } from '../actions/useractions';

function Myquestions( { match } ) {

    const dispatch = useDispatch();

    const viewprofile = useSelector( state => state.viewprofile );
    const { loading , error , viewProfile } = viewprofile;

    useEffect( () => {
        document.title = "My Questions > SINGULARITY";
        dispatch(viewprofileAction(match.params.id));
    } , [ dispatch ] )

    return (
        <div className="myquestions">
            <Navbars />
            { viewProfile && viewProfile.questions.map(question => {
                
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

                    <div className="myquestionsq">
                        <div className="myquestionsqf">
                            <p>{time}</p>
                            <h6>{viewProfile.username}</h6>
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

export default Myquestions