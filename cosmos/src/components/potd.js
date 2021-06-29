import React , { useState , useEffect } from 'react'
import axios from 'axios'
import './potd.css'
import { Container } from '@material-ui/core';
import Loader from './loader';

function Potd() {

    const [ picurl , setPicurl ] = useState('');
    const [ title , setTitle ] = useState('');
    const [ description , setDescription ] = useState('');
    const [ copyright , setCopyright ] = useState('');
    const [ clicked , setClicked ] = useState(false);
    const [ loading , setLoading ] = useState(true);
    const { REACT_APP_NASAApi } = process.env;

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_NASAApi}`);
            setPicurl(data.hdurl);
            setDescription(data.explanation);
            setTitle(data.title);
            setCopyright(data.copyright);
        }
        getData();
        setLoading(false);
    }, []);

    const desc = (e) => {
        e.preventDefault();
        setClicked(!clicked);
    }

    return (
        <div className="potd">
            { loading && <Loader /> }
            <Container className="potdc">
                <h3>Pic of the day</h3>
                <img src={`${picurl}`} className={`potdimg ${clicked && 'potdimgclick'}`} onClick={desc}></img>
                { clicked && 
                <div className={`${clicked && 'potdd'}`}>
                    <h4 className={`${clicked && 'potdt'}`}>{title}</h4>
                    <p className={`${clicked && 'potdp'}`}>{description}</p>
                    <h5 className={`${clicked && 'potdc'}`}>By {copyright}</h5>
                </div>
                }
            </Container>     
        </div>
    )
}

export default Potd;