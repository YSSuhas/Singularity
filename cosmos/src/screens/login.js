import React , { useState , useEffect } from 'react'
import { loginAction } from '../actions/useractions'
import { useDispatch , useSelector } from 'react-redux'
import './login.css'

function Login({ history }) {

    const [ mailid , setMailid ] = useState('');
    const [ password , setPassword ] = useState('');

    const redirect = '/';

    const dispatch = useDispatch();

    const login = useSelector( state => state.login );
    const { loading , error , userInfo } = login;
    
    useEffect( () => {
        if(userInfo) {
            history.push("/");
        }
        document.title = "Login > SINGULARITY"
    } , [ userInfo , history , dispatch] )

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( loginAction ( mailid , password ) );
    }

    return (
        <div className="login">
            <img src="https://ik.imagekit.io/yssuhas/Singularity/BH_jYxtc2dFS.jpg"/>
            <h5 className="loginh">Welcome back</h5>
            <form onSubmit={handleSubmit}>
                <h6 className="loginft">Enter your EMail ID</h6>
                <input className="loginfi" placeholder="example@example.com" type="email" value={mailid} onChange={ (e) => setMailid(e.target.value) }></input>
                <h6 className="loginft">Enter your Password</h6>
                <input className="loginfi" placeholder="PA$$w0rd" type="password" value={password} onChange={ (e) => setPassword(e.target.value) }></input>
                <h1></h1>
                <button className="loginfb" type="submit">Get In</button>
            </form>
        </div>
    )
}

export default Login