import React from "react"
import {Route} from "react-router"

import {IndexPage, TestPage} from "./pages"
import NotFound from "components/not-found/not-found"


export default (
    <section>
        <Route path="/" component={IndexPage} />
        <Route path="/test" component={TestPage} />
        <Route path="**" component={NotFound} />
    </section>
)
