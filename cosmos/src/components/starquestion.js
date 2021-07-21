import React , { useEffect, useState } from 'react'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { useDispatch, useSelector } from 'react-redux';
import { addstarquestionAction , removestarquestionAction, seestarquestionAction } from '../actions/staractions';

function Starquestion({ question }) {

    const user = JSON.parse(localStorage.getItem('userInfo'));

    const [ starred , setStarred ] = useState(false);

    const seestarquestion = useSelector( state => state.seestarquestion );
    const { loading , error , seeStarQuestion } = seestarquestion;

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( seestarquestionAction ( question ) ); 
    } , [ starred , dispatch ])

    const starredHandler = () => {
        setStarred(!starred);
        if(seeStarQuestion && seeStarQuestion.id) {
            dispatch(removestarquestionAction ( question ) );
        }
        else {
            dispatch(addstarquestionAction ( question ) );
        }
    }

    return (
        <div>
            <form onClick={starredHandler}>
                { ( seeStarQuestion && seeStarQuestion.id ) ? <StarRoundedIcon /> : <StarBorderRoundedIcon /> }
            </form>
        </div>
    )
}

export default Starquestion