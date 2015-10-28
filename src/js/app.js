import React, { Component } from "react"
import { Link } from "react-router"

export default class App extends Component {
    render() {
        return <section>
            <h1>thi is App</h1>
            <Link to="test">Go test</Link>
        </section>
    }
}