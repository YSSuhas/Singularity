import React , { useEffect } from 'react'
import './myanswers.css'
import Navbars from '../components/navbar'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { viewprofileAction } from '../actions/useractions'

function Myanswers({ match }) {

    const dispatch = useDispatch();

    const viewprofile = useSelector( state => state.viewprofile );
    const { loading , error , viewProfile } = viewprofile;

    useEffect( () => {
        document.title = "My Answers > SINGULARITY";
        dispatch(viewprofileAction(match.params.id));
    } , [ dispatch ] )

    return (
        <div className="myanswers">
            <Navbars />
            { viewProfile && viewProfile.answers.map(answer => {

                var date;
                var time;

                if(answer.question) {

                    if(answer.question.statement.length>100) {
                        var problem = answer.question.statement.substr(0,100);
                        problem = problem + "...";
                    }
                    else {
                        var problem = answer.question.statement;
                    }

                    date = answer.question.createdAt.substr(0,10);
                    time = answer.question.createdAt.substr(11,12);

                }

                if(answer.solution.length>100) {
                    var sol = answer.solution.substr(0,100);
                    sol = sol + "...";
                }
                else {
                    var sol = answer.solution;
                }

                const datea = answer.createdAt.substr(0,10);
                const timea = answer.createdAt.substr(11,12);

                return (

                    <div>
                    { answer.question && 
                    <div className="myanswersa">
                        <div className="myanswersaf">
                            <p>{time}</p>
                            <h6>{answer.question.user.username}</h6>
                            <p>{date}</p>
                        </div>
                        <LinkContainer to={`/questions/${answer.question._id}`} className="myanswersas">
                            <h6>{problem}</h6>
                        </LinkContainer>
                        <div className="myanswersaa">
                            <p>{timea}</p>
                            <h6>{viewProfile.username}</h6>
                            <p>{datea}</p>
                        </div>
                        <div className="myanswersas">
                            <h6>{sol}</h6>
                        </div>
                    </div>
                    }
                    </div>

                )

            })}
        </div>
    )
}

export default Myanswers