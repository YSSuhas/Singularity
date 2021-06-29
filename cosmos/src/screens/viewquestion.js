import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { viewquestionAction } from '../actions/questionactions';
import './viewquestion.css'
import Navbars from '../components/navbar';
import Answer from '../components/answer';
import Star from '../components/star';
import { viewanswersAction } from '../actions/answeractions';

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
        dispatch(viewanswersAction(match.params.id));

    } , [history , dispatch] )

    console.log(viewQuestion);

    return (
        <div className="viewquestion">
            <Navbars />
            {viewQuestion && 
            <div className="viewquestionq">
                <div className="viewquestionqr">
                    <h6>{viewQuestion.user.username}</h6>
                    <Star question={questionid} answer="undefined" blog="undefined" comment="undefined" />
                </div>
                <h5>{viewQuestion.statement}</h5>
                <Answer questionid={questionid}/>
                {viewQuestion.answers && viewQuestion.answers.map( answer => {

                    const date = answer.createdAt.substr(0,10);
                    const time = answer.createdAt.substr(11,12);

                    return (
                        <div className="viewquestionqa">
                            <div className="viewquestionqaf">
                                <p>{time}</p>
                                <h6>{answer.useranswered.username}</h6>
                                <p>{date}</p>
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