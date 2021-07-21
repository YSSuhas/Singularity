import React , { useEffect } from 'react'
import './starredanswers.css'
import Navbars from '../components/navbar'
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { viewprofileAction } from '../actions/useractions';

function Starredanswers({ match }) {

    const dispatch = useDispatch();

    const viewprofile = useSelector( state => state.viewprofile );
    const { loading , error , viewProfile } = viewprofile;

    useEffect( () => {
        document.title = "Starred Answers > SINGULARITY";
        dispatch(viewprofileAction(match.params.id));
    } , [ dispatch ] )

    return (
        <div className="starredanswers">
            <Navbars />
            { viewProfile && viewProfile.starredanswers.map(sanswer => {

            var date;
            var time;

            if(sanswer.answer.question) {
                console.log(sanswer.answer.question);
                if(sanswer.answer.question.statement.length>100) {
                    var problem = sanswer.answer.question.statement.substr(0,100);
                    problem = problem + "...";
                }
                else {
                    var problem = sanswer.answer.question.statement;
                }

                date = sanswer.answer.question.createdAt.substr(0,10);
                time = sanswer.answer.question.createdAt.substr(11,12);

            }

            if(sanswer.answer.solution.length>100) {
                var sol = sanswer.answer.solution.substr(0,100);
                sol = sol + "...";
            }
            else {
                var sol = sanswer.answer.solution;
            }

            const datea = sanswer.answer.createdAt.substr(0,10);
            const timea = sanswer.answer.createdAt.substr(11,12);

            return (

                <div>
                { sanswer.answer.question && 
                <div className="starredanswersa">
                    <div className="starredanswersaf">
                        <p>{time}</p>
                        <h6>{sanswer.answer.question.user.username}</h6>
                        <p>{date}</p>
                    </div>
                    <LinkContainer to={`/questions/${sanswer.answer.question._id}`} className="starredanswersas">
                        <h5>{problem}</h5>
                    </LinkContainer>
                    <div className="starredanswersaa">
                        <p>{timea}</p>
                        <h6>{viewProfile.username}</h6>
                        <p>{datea}</p>
                    </div>
                    <div className="starredanswersas">
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

export default Starredanswers