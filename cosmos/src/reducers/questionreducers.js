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

export const askquestionReducer = ( state = {} , action ) => {

    switch (action.type) {

        case ASK_QUESTION_REQUEST: 
            return {
                loading: true
            }
    
        case ASK_QUESTION_SUCCESS:
            return {
                loading: false,
                questionInfo: action.payload
            }

        case ASK_QUESTION_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
            
        default:
            return state

    }

}

export const allquestionsReducer = ( state={question:[]} , action ) => {

    switch(action.type) {

        case ALL_QUESTIONS_REQUEST:
            return {
                loading: true
            }
        
        case ALL_QUESTIONS_SUCCESS:
            return {
                loading: false,
                questions: action.payload
            }

        case ALL_QUESTIONS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state

    }

}

export const viewquestionReducer = ( state={} , action ) => {

    switch(action.type) {

        case VIEW_QUESTION_REQUEST:
            return {
                loading: true
            }

        case VIEW_QUESTION_SUCCESS:
            return {
                loading: false,
                viewQuestion: action.payload
            }

        case VIEW_QUESTION_FAILURE:
            return {
                loading: false,
                erroe: action.payload
            }
        
        default:
            return state

    }

}