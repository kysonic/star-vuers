'use strict'
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const productionPatcher = require('./productionPatcher')

const webpackClientConfig = require('./webpack.client')

const config = merge(webpackClientConfig,{
    output: {
        filename: 'bundle.client.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.VUE_ENV': JSON.stringify('web')
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            },
            comments: false
        }),
        new ExtractTextPlugin("style.css")
    ]
})


module.exports = productionPatcher(config)
