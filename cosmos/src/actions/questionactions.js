import axios from '../axios'
import {
    ASK_QUESTION_REQUEST,
    ASK_QUESTION_SUCCESS,
    ASK_QUESTION_FAILURE,
    ALL_QUESTIONS_REQUEST,
    ALL_QUESTIONS_SUCCESS,
    ALL_QUESTIONS_FAILURE,
    VIEW_QUESTION_REQUEST,
    VIEW_QUESTION_SUCCESS,
    VIEW_QUESTION_FAILURE,
    DELETE_QUESTION_SUCCESS,
    DELETE_QUESTION_REQUEST,
    DELETE_QUESTION_FAILURE,
    SEARCH_QUESTION_REQUEST,
    SEARCH_QUESTION_SUCCESS,
    SEARCH_QUESTION_FAILURE
} from '../constants/questionconstants'

export const askquestionAction = ( statement , user ) => async(dispatch,getState) => {

    try {

        dispatch({
            type: ASK_QUESTION_REQUEST
        })

        const { login: {userInfo} } = getState();

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization: `${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            '/api/questions/ask',
            { statement , user },
            config
        )

        dispatch({
            type: ASK_QUESTION_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        
        dispatch({
            type: ASK_QUESTION_FAILURE,
            payload: error.message
        })

    }

}

export const allquestionsAction = ( sortby ) => async(dispatch) => {

    try {
        
        dispatch({
            type: ALL_QUESTIONS_REQUEST
        })

        var sortfor , type;

        switch(sortby) {

            case "stars1":
                    sortfor = 'stars',
                    type = 1
                    break;

            case "stars-1":
                    sortfor = 'stars',
                    type = -1
                    break;

            case "createdAt1":
                    sortfor = 'createdAt',
                    type = 1
                    break;

            case "createdAt-1":
                    sortfor = 'createdAt',
                    type = -1
                    break;

            case "answers1":
                    sortfor = 'answers',
                    type = 1
                    break;

        }

        const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        }

        const { data } = await axios.get(
            '/api/questions/',
            {
                params: {
                    sortfor: sortfor,
                    type: type
                }
            },
            config
        )

        dispatch({
            type: ALL_QUESTIONS_SUCCESS,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: ALL_QUESTIONS_FAILURE,
            payload: error.message 
        })

    }

}

export const viewquestionAction = ( id ) => async(dispatch) => {

    try {

        dispatch({
            type: VIEW_QUESTION_REQUEST
        })

        const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        }

        const { data } = await axios.get(
            `/api/questions/${id}`,
            {},
            config
        )

        dispatch({
            type: VIEW_QUESTION_SUCCESS,
            payload: data
        })

    }

    catch(error) {

        dispatch({
            type: VIEW_QUESTION_FAILURE,
            payload: error.message
        })

    }

}

export const deletequestionAction = ( id ) => async( dispatch , getState ) => {

    try {
        
        dispatch({
            type: DELETE_QUESTION_REQUEST
        })

        const { login: {userInfo} } = getState();

        const config = {
            headers: {
                Authorization : `${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `/api/questions/${id}`,
            config
        )

        dispatch({
            type: DELETE_QUESTION_SUCCESS,
            payload: data
        })

    } catch (error) {
        
        dispatch({
            type: DELETE_QUESTION_FAILURE,
            payload: error.message
        })

    }

}

export const searchquestionAction = ( text ) => async( dispatch ) => {

    try {
        
        dispatch({
            type: SEARCH_QUESTION_REQUEST
        })

        const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        }

        const { data } = await axios.get(
            `/api/search/${text}`,
            config
        )

        dispatch({
            type: SEARCH_QUESTION_SUCCESS,
            payload: data
        })

    } catch (error) {
        
        dispatch({
            type: SEARCH_QUESTION_FAILURE,
            payload: error.message
        })

    }

}