import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../constants/userconstants'

export const registerReducer = ( state = {} , action ) => {

    switch(action.type) {

        case REGISTER_REQUEST: 
            return {
                loading: true
            }
        
        case REGISTER_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }

        case REGISTER_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    
    }
}

export const loginReducer = ( state = {} , action ) => {

    switch(action.type) {

        case LOGIN_REQUEST: 
            return {
                loading: true
            }

        case LOGIN_SUCCESS:
            return {
                loading: true,
                userInfo: action.payload
            }

        case LOGIN_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state

    }

}