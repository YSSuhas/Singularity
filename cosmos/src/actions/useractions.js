import axios from '../axios'
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

export const registerAction = ( mailid , password , username ) => async(dispatch) => {
    try {

        dispatch({
            type: REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/users/register',
            { mailid , password , username },
            config
        )

        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo',JSON.stringify(data));

    } catch (error) {

        dispatch({
            type: REGISTER_FAILURE,
            payload: error.message
        })

    }
}

export const loginAction = ( mailid , password ) => async(dispatch) => {
    
    try {

        dispatch({
            type: LOGIN_REQUEST
        })
        
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const { data } = await axios.post(
            '/api/users/login',
            { mailid , password },
            config
        )

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo' , JSON.stringify(data));

    } catch (error) {
        
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.message
        })

    }

}

export const viewprofileAction = ( username ) => async(dispatch,getState) => {

    try {
        
        dispatch({
            type: VIEW_PROFILE_REQUEST
        })

        const { login: {userInfo}} = getState();

        const config = {
            headers: {
                Authorization : `${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/users/${username}`,
            config
        )

        dispatch({
            type: VIEW_PROFILE_SUCCESS,
            payload: data
        })

    } catch (error) {
        
        dispatch({
            type: VIEW_PROFILE_FAILURE,
            payload: error.message
        })

    }

}

export const updateprofileAction = ( mailid , username , profilepic , description ) => async( dispatch , getState ) => {

    try {
        
        dispatch({
            type: UPDATE_PROFILE_REQUEST
        })

        const { login: { userInfo } } = getState();

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization : `${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            '/api/users/',
            { mailid , username , profilepic , description },
            config
        )

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo' , JSON.stringify(data));

    } catch (error) {
        
        dispatch({
            type: UPDATE_PROFILE_FAILURE,
            payload: error.message
        })

    }

}

export const seeuserchatsAction = () => async( dispatch , getState ) => {

    try {
        
        dispatch({
            type: SEE_USER_CHATS_REQUEST
        })

        const { login: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/users/${userInfo.username}/chats`,
            config
        )

        dispatch({
            type: SEE_USER_CHATS_SUCCESS,
            payload: data
        })

    } catch (error) {
        
        dispatch({
            type: SEE_USER_CHATS_FAILURE,
            payload: error.message
        })

    }

}

export const viewprofilebyidAction = (id) => async(dispatch, getState ) => {

    try {
        
        dispatch({
            type: VIEW_PROFILE_BY_ID_REQUEST
        })

        const { login: {userInfo} } = getState();

        const config = {
            headers: {
                Authorization: `${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/users/userid/${id}`,
            config
        )

        dispatch({
            type: VIEW_PROFILE_BY_ID_SUCCESS,
            payload: data
        })

    } catch (error) {
        
        dispatch({
            type: VIEW_PROFILE_BY_ID_FAILURE,
            payload: error.message
        })

    }

}