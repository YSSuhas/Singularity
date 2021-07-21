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

export const addanswerReducer = ( state={} , action ) => {

    switch(action.type) {

        case ADD_ANSWER_REQUEST:
            return {
                loading: true
            }

        case ADD_ANSWER_SUCCESS:
            return {
                loading: false,
                answerInfo: action.payload
            }
        
        case ADD_ANSWER_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state

    }

}

export const viewanswersReducer = ( state={viewAnswers:[]} , action ) => {

    switch(action.type) {

        case VIEW_ANSWERS_REQUEST:
            return {
                loading: true
            }

        case VIEW_ANSWERS_SUCCESS:
            return {
                loading: false,
                viewAnswers: action.payload
            }

        case VIEW_ANSWERS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state

    }

}

export const deleteanswerReducer = ( state={} , action ) => {

    switch(action.type) {
    
        case DELETE_ANSWER_REQUEST:
            return {
                loading: true
            }
        
        case DELETE_ANSWER_SUCCESS:
            return {
                loading: false,
                deleteAnswer: action.payload
            }

        case DELETE_ANSWER_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state

    }

}