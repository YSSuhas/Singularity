import axios from 'axios'
import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    VIEW_PROFILE_REQUEST,
    VIEW_PROFILE_SUCCESS,
    VIEW_PROFILE_FAILURE
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

        console.log(data);

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
        console.log(userInfo.token);

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