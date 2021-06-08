import React , { useState , useEffect } from 'react'
import './login.css'
import MailIcon from '@material-ui/icons/Mail'

function Login() {

    const [ mailid , setMailid ] = useState('');
    const [ password , setPassword ] = useState('');

    return (
        <div className="login">
            <img src="https://ik.imagekit.io/yssuhas/Singularity/BH_jYxtc2dFS.jpg"/>
            <h5 className="loginh">Welcome back</h5>
            <form>
                <h6 className="loginft">Enter your EMail ID</h6>
                <input className="loginfi" placeholder="example@example.com" value={mailid} onChange={ (e) => setMailid(e.target.value) }></input>
                <h6 className="loginft">Enter your Password</h6>
                <input className="loginfi" placeholder="PA$$w0rd" value={password} onChange={ (e) => setPassword(e.target.value) }></input>
                <h1></h1>
                <button className="loginfb" type="submit">Get In</button>
            </form>
        </div>
    )
}

export default Login