import axios from 'axios'
import { 
    ADD_CHAT_FAILURE,
    ADD_CHAT_REQUEST,
    ADD_CHAT_SUCCESS,
    SEE_CHAT_FAILURE,
    SEE_CHAT_REQUEST,
    SEE_CHAT_SUCCESS 
} from '../constants/chatconstants'

export const addchatAction = ( chatwith , from , to , message ) => async( dispatch , getState ) => {

    try {
        
        dispatch({
            type: ADD_CHAT_REQUEST
        })
        console.log(chatwith + " " + from + ' '+ to+' '+ message);
        const { login: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            'https://singularity-api.herokuapp.com/api/chats/',
            { chatwith , from , to , message },
            config
        )

        dispatch({
            type: ADD_CHAT_SUCCESS,
            payload: data
        })

    } catch (error) {
        
        dispatch({
            type: ADD_CHAT_FAILURE,
            payload: error.message
        })

    }

}

export const seechatAction = ( otheruser ) => async( dispatch , getState ) => {

    try {
        
        dispatch({
            type: SEE_CHAT_REQUEST
        })

        const { login : {userInfo} } = getState();

        const config = {
            headers: {
                Authorization : `${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/chats/${otheruser}`,
            config
        )
        console.log(data);

        dispatch({
            type: SEE_CHAT_SUCCESS,
            payload: data
        })

    } catch (error) {
        
        dispatch({
            type: SEE_CHAT_FAILURE,
            payload: error.message
        })

    }

}