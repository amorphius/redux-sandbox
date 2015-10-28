export default {
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: "babel"
    }
  ]
}