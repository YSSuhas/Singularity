import { 
    ADD_CHAT_FAILURE,
    ADD_CHAT_REQUEST,
    ADD_CHAT_SUCCESS,
    SEE_CHAT_FAILURE,
    SEE_CHAT_REQUEST,
    SEE_CHAT_SUCCESS 
} from '../constants/chatconstants'

export const addchatReducer = ( state={} , action ) => {

    switch(action.type) {

        case ADD_CHAT_REQUEST:
            return {
                loading: true
            }

        case ADD_CHAT_SUCCESS:
            return {
                loading: false,
                addChat: action.payload
            }

        case ADD_CHAT_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state

    }

}

export const seechatReducer = ( state={} , action ) => {

    switch(action.type) {
    
        case SEE_CHAT_REQUEST:
            return {
                loading: true
            }

        case SEE_CHAT_SUCCESS:
            return {
                loading: false,
                seeChat: action.payload
            }

        case SEE_CHAT_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    
    }

}