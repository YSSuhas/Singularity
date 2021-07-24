import React from 'react'
import './chats.css'

function Chats({ chat }) {

    const user = JSON.parse(localStorage.getItem('userInfo'));

    return (
        <div className="chats">
            { chat.from===user.id ? 
            <div className="chatsyes">
                <p>{chat.message}</p>
                <p className="chatst">{chat.time}</p>
            </div> : 
            <div className="chatsno">
                <p>{chat.message}</p>
                <p className="chatst">{chat.time}</p>
            </div>
            }
        </div>
    )
}

export default Chats