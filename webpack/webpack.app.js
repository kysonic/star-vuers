'use strict'
const webpack = require('webpack')
const path = require('path')
const externals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    entry: [
        './server/index.js'
    ],
    output: {
        path: path.resolve(__dirname,'../build/'),
        libraryTarget: 'commonjs2',
        filename: 'compiled.server.js'
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loaders: ['json-loader']
            },
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: [/node_modules/]
            }
        ]
    },
    externals: [externals()],
}
