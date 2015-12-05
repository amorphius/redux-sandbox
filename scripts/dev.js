import "babel/register"
import webpack from "webpack"
import express from "express"
import WebpackDevMiddleware from "webpack-dev-middleware"
import WebpackHotMiddleware from "webpack-hot-middleware"

import config from "../webpack.config.dev.js"

const app = express()
const compiler = webpack(config)

app.use(WebpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    hot: true,
    stats: {
        colors: true
    }
}))

app.use(WebpackHotMiddleware(compiler))

app.listen(3000, "localhost", (err) => {
    if(err) {
        console.log(err)
        return;
    }

    console.log("Webpack Dev Server started at http://localhost:3000")
})

