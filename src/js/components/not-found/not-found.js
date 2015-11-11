import React, {Component} from "react"
import {Link} from "react-router"


export default class NotFound extends Component {
    render() {
        return <section>
            <h2>Not found. 404, sorry</h2>
            <Link to="/">Go Home</Link>
        </section>
    }
}