import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import './question.css'
import { askquestionAction } from '../actions/questionactions';

function Question( { redirect } ) {

    const [ statement , setStatement ] = useState('');
    const user = JSON.parse(localStorage.getItem('userInfo'));

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch( askquestionAction( statement , user._id ) );
        redirect.push('/questions');
    }

    return (
        <div className="question">
            <div>
                <h5>My Question</h5>
                <form onSubmit={submitHandler}>
                    <textarea placeholder="Ask anything..." rows="10" value={statement} onChange={ (e) => setStatement(e.target.value)}></textarea>
                    <button type="submit">Ask</button>
                </form>
            </div>
        </div>
    )
}

export default Question