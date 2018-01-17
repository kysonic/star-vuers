'use strict'
const path = require('path')

module.exports = {
    output: {
        path: path.resolve(__dirname,'../build/')
    },
    resolve: {
        extensions: ['.vue', '.js', '.json'],
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
        ]
    }
}
