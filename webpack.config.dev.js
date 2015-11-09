import webpack from "webpack"
import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"


export default {
    entry: [
        "webpack-hot-middleware/client",
        "./src/js/entry.js"
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    cache: true,
    debug: true,
    devtool: "sourcemap",
    stats: {
      colors: true,
      reasons: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            'actions': __dirname + '/src/js/actions/',
            'components': __dirname + '/src/js/components/',
            'pages': __dirname + '/src/js/pages/',
            'reducers': __dirname + '/src/js/reducers/'
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
          __DEVELOPMENT__: true,
          __DEVTOOLS__: true
        }),
        new HtmlWebpackPlugin({
          template: 'src/static/index.html'
        })
    ]
};