import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    loginReducer,
    registerReducer,
    viewprofileReducer
} from './reducers/userreducers'
import {
    askquestionReducer,
    allquestionsReducer,
    viewquestionReducer
} from './reducers/questionreducers'
import {
    addanswerReducer,
    viewanswersReducer
} from './reducers/answerreducers'
import { 
    addstarReducer, seestarReducer 
} from './reducers/starreducers'

const reducer = combineReducers({
    login                        : loginReducer,
    register                     : registerReducer,
    askquestion                  : askquestionReducer,
    allquestions                 : allquestionsReducer,
    viewquestion                 : viewquestionReducer,
    addanswer                    : addanswerReducer,
    viewanswers                  : viewanswersReducer,
    viewprofile                  : viewprofileReducer,
    addstar                      : addstarReducer,
    seestar                      : seestarReducer
})

const middleware = [ thunk ]

const userInfoFromStorage = localStorage.getItem('userInfo') ? (JSON.parse(localStorage.getItem('userInfo'))) : null

const initialState = {
    login: {userInfo: userInfoFromStorage}
}

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)

export default store