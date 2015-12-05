import {combineReducers} from 'redux'
import reduceReducers from 'reduce-reducers'
import {routerStateReducer} from 'redux-router'

import reducer1 from './reducer1'
import reducer2 from './reducer2'


const rootReducer = combineReducers({
    router: routerStateReducer,
    app: reduceReducers(reducer1, reducer2)
})

export default rootReducer