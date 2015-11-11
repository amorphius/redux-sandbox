import React, {Component} from "react"
import Test from "components/test/test"
import {Link} from "react-router"


export default class TestPage extends Component {
    render() {
        return (
            <section className="test-page">
                <h1>Test page!</h1>
                <Test />
                <Link to="/">Go Home</Link>
            </section>
        )
    }
}