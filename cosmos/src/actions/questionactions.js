import axios from 'axios'
import {
    ASK_QUESTION_REQUEST,
    ASK_QUESTION_SUCCESS,
    ASK_QUESTION_FAILURE,
    ALL_QUESTIONS_REQUEST,
    ALL_QUESTIONS_SUCCESS,
    ALL_QUESTIONS_FAILURE,
    VIEW_QUESTION_REQUEST,
    VIEW_QUESTION_SUCCESS,
    VIEW_QUESTION_FAILURE
} from '../constants/questionconstants'

export const askquestionAction = ( statement , user ) => async(dispatch) => {

    try {

        dispatch({
            type: ASK_QUESTION_REQUEST
        })

        const config = {
            headers: {
                "Content-Type" : "application/json"
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

export const allquestionsAction = () => async(dispatch) => {

    try {
        
        dispatch({
            type: ALL_QUESTIONS_REQUEST
        })

        const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        }

        const { data } = await axios.get(
            '/api/questions/',
            {},
            config
        )
        console.log(data);

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