import React , { useEffect, useState } from 'react'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { useDispatch, useSelector } from 'react-redux';
import { addstaranswerAction , removestaranswerAction, seestaranswerAction } from '../actions/staractions';

function Staranswer({ answer }) {

    const user = JSON.parse(localStorage.getItem('userInfo'));

    const [ starred , setStarred ] = useState(false);

    const seestaranswer = useSelector( state => state.seestaranswer );
    const { loading , error , seeStarAnswer } = seestaranswer;

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( seestaranswerAction ( answer ) ); 
    } , [ starred , dispatch ])

    const starredHandler = () => {
        setStarred(!starred);
        if(seeStarAnswer && seeStarAnswer.id && seeStarAnswer.answerid==answer ) {
            dispatch(removestaranswerAction ( answer ) );
        }
        else {
            dispatch(addstaranswerAction ( answer ) );
        }
    }

    return (
        <div>
            <form onClick={starredHandler}>
                { ( seeStarAnswer && seeStarAnswer.id && seeStarAnswer.answerid==answer ) ? <StarRoundedIcon /> : <StarBorderRoundedIcon /> }
            </form>
        </div>
    )
}

export default Staranswer