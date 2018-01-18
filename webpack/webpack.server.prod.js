'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackServerConfig = require('./webpack.server')
const productionPatcher = require('./productionPatcher')

const config = merge(webpackServerConfig,{
    devtool: false,
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.VUE_ENV': JSON.stringify('server')
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
    ]
})


module.exports = productionPatcher(config)
