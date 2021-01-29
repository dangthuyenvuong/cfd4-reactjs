import { combineReducers } from 'redux'
import homeReducer from './homeReducer'
import counterReducer from './counterReducer'
import courseReducer from './courseReducer'
import userReducer from './userReducer'

export default combineReducers({
    counter: counterReducer,
    home: homeReducer,
    courses: courseReducer,
    user: userReducer
})