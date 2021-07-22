import React, { useEffect } from 'react'
import './profile.css'
import Navbars from '../components/navbar'
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { viewprofileAction } from '../actions/useractions';

function Profile({ match , history }) {

    const user = JSON.parse(localStorage.getItem('userInfo'));

    const dispatch = useDispatch();

    const viewprofile = useSelector( state => state.viewprofile );
    const { loading , error , viewProfile } = viewprofile;

    useEffect( () => {
        document.title = "Profile > SINGULARITY";
        dispatch(viewprofileAction(match.params.id));
    } , [ dispatch ] )

    const editHandler = () => {
    
        if(user) {
            history.push(`/${user.username}/edit_profile`);
        }
        else {
            history.push('/login');
        }

    }

    const logoutHandler = () => {
        localStorage.removeItem('userInfo')
        history.push('/');
    }

    const chatHandler = () => {
        
        if(user) {
            history.push(`/chat/${viewProfile._id}`);
        }

    }

    return (
        <div className="profile">
            <Navbars />
            { viewProfile && 
            <div>
                { user.id === viewProfile._id ?
                    <div>
                        <form onSubmit={editHandler}>
                            <button type="submit">Edit Profile</button>
                        </form>
                        <form onSubmit={logoutHandler}>
                            <button type="submit">Logout</button>
                        </form>
                    </div> :
                    <div>
                        <form onSubmit={chatHandler}>
                            <button type="submit">Chat</button>
                        </form>
                    </div>
                }
                <div className="profileinfo">
                    <img src={viewProfile.profilepic}></img>
                    <h5>{viewProfile.username}</h5>
                </div>
                <div className="profiledesc">
                    {viewProfile.description && 
                    <p>{viewProfile.description}</p>
                    }
                </div>
                <div>
                    <h5>View My Questions</h5>
                    <LinkContainer className="profilefc" to={`/${viewProfile.username}/questions`}>
                        <button>My Questions</button>
                    </LinkContainer>
                </div>
                <div>
                    <h5>View My Answers</h5>
                    <LinkContainer className="profilefc" to={`/${viewProfile.username}/answers`}>
                        <button>My Answers</button>
                    </LinkContainer>
                </div>
                <div>
                    <h5>View My Starred Questions</h5>
                    <LinkContainer className="profilefc" to={`/${viewProfile.username}/starredquestions`}>
                        <button>Starred Questions</button>
                    </LinkContainer>
                </div>
                <div>
                    <h5>View My Starred Answers</h5>
                    <LinkContainer className="profilefc" to={`/${viewProfile.username}/starredanswers`}>
                        <button>Starred Answers</button>
                    </LinkContainer>
                </div>
            </div>
            }
        </div>
    )
}

export default Profile