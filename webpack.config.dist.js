import webpack from "webpack"
import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"


export default {
    entry: "./src/js/entry.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.min.js"
    },
    devtool: "sourcemap",
    resolve: {
        extensions: ["", ".js", ".jsx"],
        alias: {
            "actions": __dirname + "/src/js/actions/",
            "components": __dirname + "/src/js/components/",
            "pages": __dirname + "/src/js/pages/",
            "reducers": __dirname + "/src/js/reducers/"
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel"
            }
        ]
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new webpack.DefinePlugin({
          __DEVELOPMENT__: false,
          __DEVTOOLS__: false
        }),
        new HtmlWebpackPlugin({
          template: "./src/static/index.html"
        })
    ]
};
