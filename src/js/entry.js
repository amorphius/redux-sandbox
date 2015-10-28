import React from "react"
import ReactDOM from "react-dom"
import { Router, Route } from "react-router"

import App from "./app"
import NotFound from "./components/not-found/not-found"
import Test from "./components/test/test"

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="test" component={Test} />
        </Route>
    </Router>
), document.getElementById("app"))

