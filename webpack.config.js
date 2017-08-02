module.exports = {
    entry: './src/index.js',
    devtool: "inline-sourcemap",
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },{
            test: /\.scss$/,
            loaders: ['css',"sass"]
        }]
    },
}