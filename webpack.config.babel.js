import path from "path"
import loaders from "./dev/loaders"

export default {
    context: __dirname,
    entry: "./src/js/entry.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        ...loaders
    },
    resolve: {
        extensions: ["", ".js"],
        root: path.resolve(__dirname, "src/js")
    }
}