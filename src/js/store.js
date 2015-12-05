import {compose, createStore, applyMiddleware} from 'redux'
import {reduxReactRouter} from 'redux-router'
import {createHashHistory as createHistory} from 'history'
import thunk from 'redux-thunk'
import immutable from 'immutable'

import routes from './routes'
import reducer from './reducers'
import initialState from './state'


const finalCreateStore = compose(
    applyMiddleware(thunk),
    reduxReactRouter({routes, createHistory}),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const store = finalCreateStore(reducer, initialState)
global.__store = store
global.__getState = store.getState
global.__immutable = immutable

if(module.hot) {
    module.hot.accept('./reducers', () => {
        const nextReducer = require('./reducers')
        store.replaceReducer(nextReducer)
    })
}

export default store