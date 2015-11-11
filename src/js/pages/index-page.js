import React, {Component} from "react"
import {Link} from "react-router"


export default class IndexPage extends Component {
    render() {
        return (
            <section className="index-page">
                <h1>Index page</h1>
                <Link to="test">Test router!</Link>
            </section>
        )
    }
}