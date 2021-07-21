import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addanswerAction } from '../actions/answeractions';
import './answer.css'

function Answer({ questionid }) {

    const [ solution , setSolution ] = useState('');

    const dispatch = useDispatch();

    const submitHandler = () => {
        dispatch( addanswerAction( solution , questionid ) );
    }

    return (
        <div className="answer">
            <form onSubmit={submitHandler}>
                <textarea placeholder="Answer..." rows="4" value={solution} onChange={ (e) => setSolution(e.target.value)}></textarea>
                <button type="submit">Answer</button>
            </form>
        </div>
    )
}

export default Answer