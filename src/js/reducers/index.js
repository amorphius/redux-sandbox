import {combineReducers} from "redux"
import {routerStateReducer as router} from "redux-router"

let reducer = (state = {norm: 42}, action) => state

const rootReducer = combineReducers({
    reducer,
    router
})

export default rootReducer