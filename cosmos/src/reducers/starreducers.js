import {
    ADD_STAR_REQUEST,
    ADD_STAR_SUCCESS,
    ADD_STAR_FAILURE,
    SEE_STAR_FAILURE,
    SEE_STAR_REQUEST,
    SEE_STAR_SUCCESS
} from '../constants/starconstants'

export const addstarReducer = ( state = {} , action ) => {

    switch(action.type) {

        case ADD_STAR_REQUEST:
            return {
                loading: true
            }

        case ADD_STAR_SUCCESS:
            return {
                loading: false,
                addStar: action.payload
            }

        case ADD_STAR_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state

    }

}

export const seestarReducer = ( state={} , action ) => {

    switch(action.type) {

        case SEE_STAR_REQUEST:
            return {
                loading: true
            }

        case SEE_STAR_SUCCESS:
            return {
                loading: false,
                seeStar: action.payload
            }

        case SEE_STAR_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state

    }

}