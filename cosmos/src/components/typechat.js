import React , { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addchatAction } from '../actions/chatactions';
import './typechat.css'

function Typechat({ match }) {

    const [ message , setMessage ] = useState('');

    const user = JSON.parse(localStorage.getItem('userInfo'));

    const dispatch = useDispatch();

    const submitHandler = () => {
        if(message!='') {
            dispatch( addchatAction( match , user.id , match , message ) );
        }
    }

    return (
        <div className="typechat">
            <form onSubmit={submitHandler}>
                <textarea placeholder="Type your message" value={message} onChange={ (e) => setMessage(e.target.value)}></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Typechat