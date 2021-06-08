import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    loginReducer,
    registerReducer
} from './reducers/userreducers'

const reducer = combineReducers({
    login                        : loginReducer,
    register                     : registerReducer
})

const middleware = [ thunk ]

const userInfoFromStorage = localStorage.getItem('userInfo') ? (JSON.parse(localStorage.getItem('userInfo'))) : null

const initialState = {
    login: {userInfo:userInfoFromStorage}
}

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)

export default store