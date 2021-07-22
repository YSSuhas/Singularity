import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletequestionAction, viewquestionAction } from '../actions/questionactions';
import './viewquestion.css'
import Navbars from '../components/navbar';
import Answer from '../components/answer';
import Starquestion from '../components/starquestion';
import Staranswer from '../components/staranswer';
import { deleteanswerAction } from '../actions/answeractions';
import { LinkContainer } from 'react-router-bootstrap';

function Viewquestion( { match , history } ) {

    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('userInfo'));

    const viewquestion = useSelector( state => state.viewquestion );
    const { loading , error , viewQuestion } = viewquestion;

    const questionid = match.params.id;
    useEffect( () => {
        
        if(!user) {
            history.push("/login");
        }
        dispatch(viewquestionAction(match.params.id));

    } , [history , dispatch] )

    const submitHandler = ( () => {
        dispatch(deletequestionAction(match.params.id));
        history.push("/questions");
    })

    return (
        <div className="viewquestion">
            <Navbars />
            {viewQuestion && 
            <div className="viewquestionq">
                <div className="viewquestionqr">
                    <LinkContainer to={`/${viewQuestion.user.username}/profile`}>
                        <h6>{viewQuestion.user.username}</h6>
                    </LinkContainer>
                    { user.id === viewQuestion.user._id &&
                    <form onSubmit={submitHandler}>
                        <button type="submit">Delete</button>
                    </form> }
                    <div className="viewquestionqrf">
                        <p>{viewQuestion.stars.length}</p>
                        <Starquestion question={questionid} />
                    </div>
                </div>
                <h5>{viewQuestion.statement}</h5>
                <Answer questionid={questionid}/>
                {viewQuestion.answers && viewQuestion.answers.map( answer => {

                    const deleteanswerHandler = ( () => {
                        dispatch(deleteanswerAction(answer._id));
                    })

                    const date = answer.createdAt.substr(0,10);
                    const time = answer.createdAt.substr(11,12);

                    return (
                        <div className="viewquestionqa">
                            <div className="viewquestionqaf">
                                <h6>{answer.useranswered.username}</h6>
                                <p>{time}</p>
                                { user.id === answer.useranswered._id &&
                                <form onSubmit={deleteanswerHandler}>
                                    <button type="submit">Delete</button>
                                </form> }
                                <p>{date}</p>
                                <div className="viewquestionqaff">
                                    <p>{answer.stars.length}</p>
                                    <Staranswer answer={answer._id} />
                                </div>
                            </div>
                            <div>
                                <h5>{answer.solution}</h5>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default Viewquestion