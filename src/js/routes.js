import React from "react"
import {Route} from "react-router"

import {IndexPage, TestPage} from "./pages"

export default (
    <section>
        <Route path="/" component={IndexPage} />
        <Route path="/test" component={TestPage} />
    </section>
)
