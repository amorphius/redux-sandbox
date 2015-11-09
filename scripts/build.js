import webpack from "webpack"

import config from "../webpack.config.dist.js"

const bundler = webpack(config)

bundler.run((err, stats) => {
    if(err) {
        console.error("err")
    }

    console.log(stats.toString())
})