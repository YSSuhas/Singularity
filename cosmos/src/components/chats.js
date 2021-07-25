import React from 'react'
import './chats.css'

function Chats({ chat }) {

    const user = JSON.parse(localStorage.getItem('userInfo'));

    const date = chat.time.substr(0,10);
    const time = chat.time.substr(11,12);

    return (
        <div className="chats">
            { chat.from===user.id ? 
            <div className="chatsyes">
                <p>{chat.message}</p>
                <p className="chatst">{time} {date}</p>
            </div> : 
            <div className="chatsno">
                <p>{chat.message}</p>
                <p className="chatst">{time} {date}</p>
            </div>
            }
        </div>
    )
}

export default Chats