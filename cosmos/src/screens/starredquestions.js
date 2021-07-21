import React , { useEffect } from 'react'
import './starredquestions.css'
import Navbars from '../components/navbar'
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { viewprofileAction } from '../actions/useractions';

function Starredquestions({ match }) {

    const dispatch = useDispatch();

    const viewprofile = useSelector( state => state.viewprofile );
    const { loading , error , viewProfile } = viewprofile;

    useEffect( () => {
        document.title = "Starred Questions > SINGULARITY";
        dispatch(viewprofileAction(match.params.id));
    } , [ dispatch ] )

    return (
        <div className="starredquestions">
            <Navbars />
            { viewProfile && viewProfile.starredquestions.map(squestion => {

                var date;
                var time;

                if(squestion.question) {

                    if(squestion.question.statement.length>100) {
                        var problem = squestion.question.statement.substr(0,100);
                        problem = problem + "...";
                    }
                    else {
                        var problem = squestion.question.statement;
                    }

                    date = squestion.question.createdAt.substr(0,10);
                    time = squestion.question.createdAt.substr(11,12);

                }

                return (

                    <div className="starredquestionsd">
                    { squestion.question && 
                    <div className="starredquestionsq">
                        <div className="starredquestionsqf">
                            <p>{time}</p>
                            <h6>{squestion.question.user.username}</h6>
                            <p>{date}</p>
                        </div>
                        <LinkContainer to={`/questions/${squestion.question._id}`}>
                            <h5>{problem}</h5>
                        </LinkContainer>
                    </div>
                    }
                    </div>

                )

                })}
        </div>
    )
}

export default Starredquestions