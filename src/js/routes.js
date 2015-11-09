import React from "react"
import {Route} from "react-router"

import {IndexPage, TestPage} from "./pages"

const routes = (
    <Route path="/" component={IndexPage}>
        <Route path="test" component={TestPage} />
    </Route>
)

export default routes