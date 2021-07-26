import axios from '../axios';
import React , { useState , useEffect } from 'react'
import './profileedit.css'
import { useDispatch, useSelector } from 'react-redux';
import Navbars from '../components/navbar';
import { viewprofileAction , updateprofileAction } from '../actions/useractions'

function Profileedit({ match , history , redirect }) {

    const user = JSON.parse(localStorage.getItem('userInfo'));

    const [ username , setUsername ] = useState('');
    const [ description , setDescription ] = useState('');
    const [ mailid , setMailid ] = useState('');
    const [ profilepic , setProfilepic ] = useState('');
    const [ uploading , setUploading ] = useState(false);

    const dispatch = useDispatch();

    const viewprofile = useSelector( state => state.viewprofile );
    const { loading , error , viewProfile } = viewprofile;

    useEffect( () => {
        if(!user) {
            history.push('/login');
        }
        document.title = "Edit Profile > SINGULARITY";
        dispatch(viewprofileAction(match.params.id));
    } , [ dispatch , history ] )

    const uploadHandler = async(e) => {
    
        const propic = e.target.files[0];
        const formdata = new FormData();
        formdata.append( 'image' , propic );

        try {
            
            const config = {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            }

            const { data } = await axios.post(
                '/api/upload',
                formdata,
                config
            )
            setProfilepic(data.filePath[0]);
            setUploading(true);

        } catch (error) {
            setUploading(false);
        }

    }
    
    const updateHandler = () => {
    
        dispatch( updateprofileAction( mailid , username , profilepic , description ) );
        var name;
        if(username) {
            name = username;
        }
        else {
            name = user.username;
        }
        history.push(`/${name}/profile`);

    }
    console.log(user.username);

    return (
        <div className="profileedit">
            <Navbars />
            { viewProfile &&
            <div>
                <form onSubmit={updateHandler}>
                    <div className='imageupload profileeditf'>
                        <img src={viewProfile.profilepic}></img>
                        <form onChange={uploadHandler}>
                            <label for="myfile">Select Profile Picture:</label>
                            <input type="file" id="myfile" name="myfile" />
                        </form>
                    </div>
                    <div className="profileeditf">
                        <h5>Username</h5>
                        <input placeholder="user_001" value={username} onChange={ (e) => setUsername(e.target.value) }></input>
                    </div>    
                    <div className="profileeditf">
                        <h5>Mail ID</h5>
                        <input placeholder="example@example.com" type="email" value={mailid} onChange={ (e) => setMailid(e.target.value) } />
                    </div>
                    <div className="profileeditd">
                        <h5>Description</h5>
                        <textarea placeholder="About yourself..." rows="4" value={description} onChange={ (e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="profileeditb">
                        <button type="submit">Save changes</button>
                    </div>
                </form>
            </div>
            }
        </div>
    )
}

export default Profileedit