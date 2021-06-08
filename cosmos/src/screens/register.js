import React , { useState , useEffect } from 'react'
import './register.css'
import { registerAction } from '../actions/useractions'
import { useSelector , useDispatch } from 'react-redux'

function Register( { history } ) {

    const [ mailid , setMailid ] = useState('');
    const [ password , setPassword ] = useState('');
    const [ username , setUsername ] = useState('');
    const [ confirmpassword , setConfirmpassword ] = useState('');

    const redirect = '/home';

    const dispatch = useDispatch();

    const register = useSelector(state => state.register);

    const { loading , error , userInfo } = register;

    useEffect(() => {
        if(userInfo) {
            history.push(redirect);
        }
    }, [ userInfo , history , redirect ])

    const handleSubmit = (e) => {
        e.preventDefault();
        if( password !== confirmpassword ) {
            alert("Passwords do not match");
        }
        else {
            dispatch( registerAction ( mailid , password , username ) );
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
            </form>
        </div>
    )
}

export default Register