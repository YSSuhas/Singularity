import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    loginReducer,
    registerReducer,
    seeuserchatsReducer,
    updateprofileReducer,
    viewprofileReducer
} from './reducers/userreducers'
import {
    askquestionReducer,
    allquestionsReducer,
    viewquestionReducer,
    deletequestionReducer,
    searchquestionReducer
} from './reducers/questionreducers'
import {
    addanswerReducer,
    viewanswersReducer,
    deleteanswerReducer
} from './reducers/answerreducers'
import { 
    addstarquestionReducer, 
    seestarquestionReducer,
    removestarquestionReducer,
    addstaranswerReducer, 
    seestaranswerReducer,
    removestaranswerReducer
} from './reducers/starreducers'
import { 
    addchatReducer,
    seechatReducer 
} from './reducers/chatreducers'

const reducer = combineReducers({
    login                        : loginReducer,
    register                     : registerReducer,
    askquestion                  : askquestionReducer,
    allquestions                 : allquestionsReducer,
    viewquestion                 : viewquestionReducer,
    addanswer                    : addanswerReducer,
    viewanswers                  : viewanswersReducer,
    viewprofile                  : viewprofileReducer,
    addstarquestion              : addstarquestionReducer,
    seestarquestion              : seestarquestionReducer,
    removestarquestion           : removestarquestionReducer,
    deletequestion               : deletequestionReducer,
    addstaranswer                : addstaranswerReducer,
    seestaranswer                : seestaranswerReducer,
    removestaranswer             : removestaranswerReducer,
    deleteanswer                 : deleteanswerReducer,
    updateprofile                : updateprofileReducer,
    addchat                      : addchatReducer, 
    seechat                      : seechatReducer,
    searchquestion               : searchquestionReducer,
    seeuserchats                 : seeuserchatsReducer
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