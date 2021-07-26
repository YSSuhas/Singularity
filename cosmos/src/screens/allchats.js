import React, { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { seeuserchatsAction } from '../actions/useractions';
import Navbars from '../components/navbar'
import './allchats.css'
import {LinkContainer} from 'react-router-bootstrap'

function Allchats({ history }) {

    const user = JSON.parse(localStorage.getItem('userInfo'));

    const seeuserchats = useSelector( state => state.seeuserchats );
    const { loading , error , seeUserChats } = seeuserchats;

    const dispatch = useDispatch();

    useEffect( () => {
        if(!(localStorage.getItem('userInfo'))) {
            history.push('/login');
        }
        document.title = "Chats > SINGULARITY";
        dispatch(seeuserchatsAction());
    } , [ dispatch ])

    return (
        <div className="allchats">
            <Navbars />
            { seeUserChats && seeUserChats.chats.map( userchat => {

                var username , profilepic , userid ;

                if(userchat.usera._id==user.id) {
                    username = userchat.userb.username;
                    profilepic = userchat.userb.profilepic;
                    userid = userchat.userb._id;
                }

                else if(userchat.userb._id==user.id) {
                    username = userchat.usera.username;
                    profilepic = userchat.usera.profilepic;
                    userid = userchat.usera._id;
                }
                
                var msg = userchat.chats[userchat.chats.length-1].message;
                var msgfrom = userchat.chats[userchat.chats.length-1].from == user.id ;

                return (
                    <div className="allchatsc">
                        <img src={profilepic}></img>
                        <div className="allchatscf">
                            <LinkContainer to={`/chat/${userid}`}>
                                <h5>{username}</h5>
                            </LinkContainer>
                            { msgfrom ? <p className="allchatscfy">{msg}</p> : <p className="allchatscfn">{msg}</p> }
                        </div>
                    </div>
                )

            } )
            }
        </div>
    )
}

export default Allchats