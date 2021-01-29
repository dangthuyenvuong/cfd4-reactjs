import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'







// const logger = store => next => action => {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
// }


// const logger = store => next => action => {
//     console.log(action)
//     next(action);
// }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const thunkFake = store => next => action => {

    if (typeof action === 'function') {

        action(store.dispatch, store.getState())
    } else {
        next(action)
    }
}

let store = createStore(reducer, applyMiddleware(thunkFake))





// store.subscribe(() => {
//     console.log(store.getState())
// })
// setInterval(() => {
//     store.dispatch({ type: 'DECREMENT' })
// }, 1000)


export default store;