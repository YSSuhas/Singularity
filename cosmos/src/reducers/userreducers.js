import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    VIEW_PROFILE_REQUEST,
    VIEW_PROFILE_SUCCESS,
    VIEW_PROFILE_FAILURE,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE
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

export const viewprofileReducer = ( state={} , action ) => {

    switch(action.type) {

        case VIEW_PROFILE_REQUEST:
            return {
                loading: true
            }
        
        case VIEW_PROFILE_SUCCESS:
            return {
                loading: false,
                viewProfile: action.payload
            }

        case VIEW_PROFILE_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state

    }

}

export const updateprofileReducer = ( state={} , action ) => {

    switch(action.type) {

        case UPDATE_PROFILE_REQUEST:
            return {
                loading: true
            }
        
        case UPDATE_PROFILE_SUCCESS:
            return {
                loading: false,
                updateProfile: action.payload
            }

        case UPDATE_PROFILE_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state

    }

}