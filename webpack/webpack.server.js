'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const externals = require('webpack-node-externals')
const webpackBaseConfig = require('./webpack.base')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(webpackBaseConfig,{
    target: 'node',
    entry: [
        './vue/entry-server.js'
    ],
    output: {
        libraryTarget: 'commonjs2',
        filename: 'bundle.server.js'
    },
    devtool: 'source-map',
    plugins: [new VueSSRServerPlugin()],
    externals: [externals()],
})
