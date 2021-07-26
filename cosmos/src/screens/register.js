import React , { useState , useEffect } from 'react'
import './register.css'
import { registerAction } from '../actions/useractions'
import { useSelector , useDispatch } from 'react-redux'
import Message from '../components/message'
import {LinkContainer} from 'react-router-bootstrap'

function Register( { history } ) {

    const [ mailid , setMailid ] = useState('');
    const [ password , setPassword ] = useState('');
    const [ username , setUsername ] = useState('');
    const [ confirmpassword , setConfirmpassword ] = useState('');
    const [ alertmistake , setAlertmistake ] = useState(false);
    const [ message , setMessage ] = useState('');

    const redirect = '/login';

    const dispatch = useDispatch();

    const register = useSelector(state => state.register);

    const { loading , error , userInfo } = register;

    useEffect(() => {
        if(userInfo) {
            history.push('/');
        }
        document.title = "Register > SINGULARITY";
    }, [ history , userInfo , dispatch ])

    const handleSubmit = (e) => {
        e.preventDefault();
        var cap=0,low=0,num=0;
        for( var i=0 ; i<password.length ; i++ ) {
            if( password[i] >= '0' && password[i] <= '9' ) {
                num++;
            }
            else if( password[i] == password[i].toUpperCase() ) {
                cap++;
            }
            else if( password[i] == password[i].toLowerCase() ) {
                low++;
            }
        }
        if( ( password.length > 7 && cap > 0 ) && ( low > 0 && num > 0 ) ) {
            if( password !== confirmpassword ) {
                setAlertmistake(true);
                setMessage("Passwords do not match");
            }
            else {
                dispatch( registerAction ( mailid , password , username ) );
            }
        }
        else {
            setAlertmistake(true);
            setMessage("Password should atleast contain a capital letter, a lower letter and a number");
        }
    }

    return (
        <div className="register">
            <img src="https://ik.imagekit.io/yssuhas/Singularity/BH_jYxtc2dFS.jpg"/>
            <h5 className="registerh">Welcome</h5>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <h6 className="registerft">Enter your EMail ID</h6>
                        <input className="registerfi" placeholder="example@example.com" type="email" value={mailid} onChange={ (e) => setMailid(e.target.value) }></input>
                    </div>
                    <div>
                        <h6 className="registerft">Enter your Password</h6>
                        <input className="registerfi" placeholder="PA$$w0rd" type="password" value={password} onChange={ (e) => setPassword(e.target.value) }></input>
                    </div>
                </div>
                <div>
                    <div>
                        <h6 className="registerft">Enter an Username</h6>
                        <input className="registerfi" placeholder="user_001" value={username} onChange={ (e) => setUsername(e.target.value) }></input>
                    </div>
                    <div>
                        <h6 className="registerftcp">Confirm your Password</h6>
                        <input className="registerficp" placeholder="PA$$w0rd" type="password" value={confirmpassword} onChange={ (e) => setConfirmpassword(e.target.value) }></input>
                    </div>
                </div>
                <h1></h1>
                <button className="registerfb" type="submit">Get In</button>
                <div className="registerf"><p>Have an account already???</p><p>Click here to Login</p><LinkContainer to={redirect}><h6>Login</h6></LinkContainer></div>
            </form>
            <div className="registerm">
                { alertmistake && <Message type="error" message={message}></Message> }
            </div>
        </div>
    )
}

export default Register