import React , { useEffect, useState } from 'react'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { useDispatch, useSelector } from 'react-redux';
import { addstarAction , seestarAction } from '../actions/staractions';

function Star({ question , answer , blog , comment }) {

    const user = JSON.parse(localStorage.getItem('userInfo'));

    const seestar = useSelector( state=> state.seestar );
    const { loading , error , seeStar } = seestar;

    const [ starred , setStarred ] = useState(false);
    
    const dispatch = useDispatch();

    useEffect( () => { 
        dispatch( seestarAction( user._id , question , answer , blog , comment ) );
        if(seeStar) {
        if(starred) {
            dispatch( addstarAction( user._id , question , answer , blog , comment ) );
        } }
        if(seeStar!=[]) {
            setStarred(true);
        }
    } , [ starred , dispatch ])

    const starredHandler = (e) => {
        e.preventDefault();
        setStarred(!starred);
    }

    return (
        <div>
            <form onClick={starredHandler}>
                { seeStar=='' ? <StarBorderRoundedIcon /> : <StarRoundedIcon /> }
            </form>
        </div>
    )
}

export default Star