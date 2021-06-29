import React, { useEffect } from 'react'
import './profile.css'
import Navbars from '../components/navbar'
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { viewprofileAction } from '../actions/useractions';

function Profile({ match }) {

    const dispatch = useDispatch();

    const viewprofile = useSelector( state => state.viewprofile );
    const { loading , error , viewProfile } = viewprofile;

    useEffect( () => {
        document.title = "Profile > SINGULARITY";
        dispatch(viewprofileAction(match.params.id));
    } , [ dispatch ] )

    return (
        <div className="profile">
            <Navbars />
            { viewProfile && 
            <div>
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
                    <LinkContainer className="profilefc" to={`/`}>
                        <button>My Answers</button>
                    </LinkContainer>
                </div>
            </div>
            }
        </div>
    )
}

export default Profile