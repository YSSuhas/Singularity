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

export const addstarquestionReducer = ( state = {} , action ) => {

    switch(action.type) {

        case ADD_STAR_QUESTION_REQUEST:
            return {
                loading: true
            }

        case ADD_STAR_QUESTION_SUCCESS:
            return {
                loading: false,
                addStarQuestion: action.payload
            }

        case ADD_STAR_QUESTION_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state

    }

}

export const seestarquestionReducer = ( state={} , action ) => {

    switch(action.type) {

        case SEE_STAR_QUESTION_REQUEST:
            return {
                loading: true
            }

        case SEE_STAR_QUESTION_SUCCESS:
            return {
                loading: false,
                seeStarQuestion: action.payload
            }

        case SEE_STAR_QUESTION_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state

    }

}

export const removestarquestionReducer = ( state={} , action ) => {

    switch(action.types) {

        case REMOVE_STAR_QUESTION_REQUEST:
            return {
                loading: true
            }

        case REMOVE_STAR_QUESTION_SUCCESS:
            return {
                loading: false,
                removeStarQuestion: action.payload
            }

        case REMOVE_STAR_QUESTION_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state

    }

}

export const addstaranswerReducer = ( state = {} , action ) => {

    switch(action.type) {

        case ADD_STAR_ANSWER_REQUEST:
            return {
                loading: true
            }

        case ADD_STAR_ANSWER_SUCCESS:
            return {
                loading: false,
                addStarAnswer: action.payload
            }

        case ADD_STAR_ANSWER_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state

    }

}

export const seestaranswerReducer = ( state={} , action ) => {

    switch(action.type) {

        case SEE_STAR_ANSWER_REQUEST:
            return {
                loading: true
            }

        case SEE_STAR_ANSWER_SUCCESS:
            return {
                loading: false,
                seeStarAnswer: action.payload
            }

        case SEE_STAR_ANSWER_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state

    }

}

export const removestaranswerReducer = ( state={} , action ) => {

    switch(action.types) {

        case REMOVE_STAR_ANSWER_REQUEST:
            return {
                loading: true
            }

        case REMOVE_STAR_ANSWER_SUCCESS:
            return {
                loading: false,
                removeStarAnswer: action.payload
            }

        case REMOVE_STAR_ANSWER_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state

    }

}