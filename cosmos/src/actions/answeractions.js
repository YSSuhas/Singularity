import axios from "../axios"
import {
    ADD_ANSWER_REQUEST,
    ADD_ANSWER_SUCCESS,
    ADD_ANSWER_FAILURE,
    VIEW_ANSWERS_REQUEST,
    VIEW_ANSWERS_SUCCESS,
    VIEW_ANSWERS_FAILURE,
    DELETE_ANSWER_REQUEST,
    DELETE_ANSWER_SUCCESS,
    DELETE_ANSWER_FAILURE
} from '../constants/answerconstants'

export const addanswerAction = ( solution , questionid ) => async(dispatch,getState) => {

    try {
        
        dispatch({
            type: ADD_ANSWER_REQUEST
        })

        const { login: {userInfo} } = getState(); 

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization: `${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            '/api/answers/answer',
            { solution , questionid },
            config
        )

        dispatch({
            type: ADD_ANSWER_SUCCESS,
            payload: data
        })

    } catch (error) {
    
        dispatch({
            type: ADD_ANSWER_FAILURE,
            payload: error.message
        })

    }

}

export const viewanswersAction = ( questionid ) => async(dispatch) => {

    try {
        
        dispatch({
            type: VIEW_ANSWERS_REQUEST
        })

        const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        }

        const { data } = await axios.get(
            '/api/answers/',
            { questionid },
            config
        )

        dispatch({
            type: VIEW_ANSWERS_SUCCESS,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: VIEW_ANSWERS_FAILURE,
            payload: error.message
        })

    }

}

export const deleteanswerAction = ( id ) => async(dispatch,getState) => {

    try {
    
        dispatch({
            type: DELETE_ANSWER_REQUEST
        })

        const { login: {userInfo} } = getState();

        const config = {
            headers: {
                Authorization: `${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `/api/answers/${id}`,
            config
        )

        dispatch({
            type: DELETE_ANSWER_SUCCESS,
            payload: data
        })

    }

    catch (error) {

        dispatch({
            type: DELETE_ANSWER_FAILURE,
            payload: error.message
        })

    }

}