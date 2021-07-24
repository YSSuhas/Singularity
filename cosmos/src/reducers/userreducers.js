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
    UPDATE_PROFILE_FAILURE,
    SEE_USER_CHATS_REQUEST,
    SEE_USER_CHATS_SUCCESS,
    SEE_USER_CHATS_FAILURE,
    VIEW_PROFILE_BY_ID_REQUEST,
    VIEW_PROFILE_BY_ID_SUCCESS,
    VIEW_PROFILE_BY_ID_FAILURE
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

export const seeuserchatsReducer = ( state={} , action ) => {

    switch(action.type) {
    
        case SEE_USER_CHATS_REQUEST:
            return {
                loading: true
            }

        case SEE_USER_CHATS_SUCCESS:
            return {
                loading: false,
                seeUserChats: action.payload
            }

        case SEE_USER_CHATS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    
    }

}

export const viewprofilebyidReducer = ( state={} , action ) => {

    switch(action.type) {

        case VIEW_PROFILE_BY_ID_REQUEST:
            return {
                loading: true
            }

        case VIEW_PROFILE_BY_ID_SUCCESS:
            return {
                loading: false,
                viewProfileById: action.payload
            }

        case VIEW_PROFILE_BY_ID_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state

    }

}