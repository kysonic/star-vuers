'use strict'
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')

const webpackClientConfig = require('./webpack.client')

module.exports = merge(webpackClientConfig,{
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&overlay=false'
    ],
    output: {
        libraryTarget: 'var'
    },
    devtool: '#eval-source-map',
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
})
