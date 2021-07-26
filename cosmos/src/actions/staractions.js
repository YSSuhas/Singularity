import axios from '../axios'
import {
    ADD_STAR_QUESTION_REQUEST,
    ADD_STAR_QUESTION_SUCCESS,
    ADD_STAR_QUESTION_FAILURE,
    SEE_STAR_QUESTION_REQUEST,
    SEE_STAR_QUESTION_SUCCESS,
    SEE_STAR_QUESTION_FAILURE,
    REMOVE_STAR_QUESTION_REQUEST,
    REMOVE_STAR_QUESTION_SUCCESS,
    REMOVE_STAR_QUESTION_FAILURE,
    ADD_STAR_ANSWER_REQUEST,
    ADD_STAR_ANSWER_SUCCESS,
    ADD_STAR_ANSWER_FAILURE,
    SEE_STAR_ANSWER_REQUEST,
    SEE_STAR_ANSWER_SUCCESS,
    SEE_STAR_ANSWER_FAILURE,
    REMOVE_STAR_ANSWER_REQUEST,
    REMOVE_STAR_ANSWER_SUCCESS,
    REMOVE_STAR_ANSWER_FAILURE
} from '../constants/starconstants'

export const addstarquestionAction = ( question ) => async(dispatch,getState) => {

    try {
        
        dispatch({
            type: ADD_STAR_QUESTION_REQUEST
        })

        const { login: {userInfo} } = getState();

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization : `${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            '/api/stars/questions',
            { question },
            config
        )

        dispatch({
            type: ADD_STAR_QUESTION_SUCCESS,
            payload: data
        })

    } catch (error) {
        
        dispatch({
            type: ADD_STAR_QUESTION_FAILURE,
            payload: error.message
        })

    }

}

export const seestarquestionAction = ( question ) => async(dispatch,getState) => {

    try {
        
        dispatch({
            type: SEE_STAR_QUESTION_REQUEST
        })

        const { login: {userInfo} } = getState();

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization : `${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/stars/questions/${question}`,
            config
        )

        dispatch({
            type: SEE_STAR_QUESTION_SUCCESS,
            payload: data
        })

    } catch (error) {
        
        dispatch({
            type: SEE_STAR_QUESTION_FAILURE,
            payload: error.message
        })

    }

}

export const removestarquestionAction = ( question ) => async(dispatch,getState) => {

    try {
        
        dispatch({
            type: REMOVE_STAR_QUESTION_REQUEST
        })

        const { login: {userInfo} } = getState();

        const config = {
            headers: {
                Authorization : `${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `/api/stars/questions/${question}`,
            config
        )

        dispatch({
            type: REMOVE_STAR_QUESTION_SUCCESS,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: REMOVE_STAR_QUESTION_FAILURE,
            payload: error.message
        })

    }

}

export const addstaranswerAction = ( answer ) => async(dispatch,getState) => {

    try {
        
        dispatch({
            type: ADD_STAR_ANSWER_REQUEST
        })

        const { login: {userInfo} } = getState();

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization : `${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            '/api/stars/answers',
            { answer },
            config
        )

        dispatch({
            type: ADD_STAR_ANSWER_SUCCESS,
            payload: data
        })

    } catch (error) {
        
        dispatch({
            type: ADD_STAR_ANSWER_FAILURE,
            payload: error.message
        })

    }

}

export const seestaranswerAction = ( answer ) => async(dispatch,getState) => {

    try {
        
        dispatch({
            type: SEE_STAR_ANSWER_REQUEST
        })

        const { login: {userInfo} } = getState();

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization : `${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/stars/answers/${answer}`,
            config
        )

        dispatch({
            type: SEE_STAR_ANSWER_SUCCESS,
            payload: data
        })

    } catch (error) {
        
        dispatch({
            type: SEE_STAR_ANSWER_FAILURE,
            payload: error.message
        })

    }

}

export const removestaranswerAction = ( answer ) => async(dispatch,getState) => {

    try {
        
        dispatch({
            type: REMOVE_STAR_ANSWER_REQUEST
        })

        const { login: {userInfo} } = getState();

        const config = {
            headers: {
                Authorization : `${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `/api/stars/answers/${answer}`,
            config
        )

        dispatch({
            type: REMOVE_STAR_ANSWER_SUCCESS,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: REMOVE_STAR_ANSWER_FAILURE,
            payload: error.message
        })

    }

}