import "babel-core/polyfill"
import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import {ReduxRouter} from "redux-router"

import store from "./store"

if (__DEVTOOLS__) {
    const {DebugPanel, DevTools, LogMonitor} = require("redux-devtools/lib/react")

    render(
        <section>
            <Provider store={store}>
                <ReduxRouter />
            </Provider>
            <DebugPanel top right bottom>
                <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
        </section>,
        document.getElementById("app")
    )
} else {
    render(
        <Provider store={store}>
            <ReduxRouter />
        </Provider>,
        document.getElementById("app")
    )
}
