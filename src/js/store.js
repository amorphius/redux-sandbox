import {compose, createStore, applyMiddleware} from "redux"
import {reduxReactRouter} from "redux-router"
import {createHashHistory as createHistory} from "history"
import {devTools} from "redux-devtools"
import thunk from "redux-thunk"

import routes from "./routes"
import reducer from "./reducers"

const finalCreateStore = compose(
    applyMiddleware(thunk),
    reduxReactRouter({routes, createHistory}),
    devTools()
)(createStore)

const store = finalCreateStore(reducer)

if(module.hot) {
    module.hot.accept("./reducers", () => {
        const nextReducer = require("./reducers")
        store.replaceReducer(nextReducer)
    })
}

export default store