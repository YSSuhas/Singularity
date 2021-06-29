import axios from 'axios'
import {
    ADD_STAR_REQUEST,
    ADD_STAR_SUCCESS,
    ADD_STAR_FAILURE,
    SEE_STAR_REQUEST,
    SEE_STAR_SUCCESS,
    SEE_STAR_FAILURE
} from '../constants/starconstants'

export const addstarAction = ( user , question , answer , blog , comment ) => async(dispatch) => {

    try {
        
        dispatch({
            type: ADD_STAR_REQUEST
        })

        const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        }

        const { data } = await axios.post(
            '/api/stars/',
            { user , question , answer , blog , comment },
            config
        )

        dispatch({
            type: ADD_STAR_SUCCESS,
            payload: data
        })

    } catch (error) {
        
        dispatch({
            type: ADD_STAR_FAILURE,
            payload: error.message
        })

    }

}

export const seestarAction = ( question , answer , blog , comment ) => async(dispatch,getState) => {

    try {
        
        dispatch({
            type: SEE_STAR_REQUEST
        })

        const { login: {userInfo} } = getState();

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization : `${userInfo.id}`
            }
        }

        const { data } = await axios.get(
            '/api/stars',
            { params: { question , answer , blog , comment } },
            config
        )
        
        console.log(data);

        dispatch({
            type: SEE_STAR_SUCCESS,
            payload: data
        })

    } catch (error) {
        
        dispatch({
            type: SEE_STAR_FAILURE,
            payload: error.message
        })

    }

}