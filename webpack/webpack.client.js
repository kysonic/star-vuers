'use strict'
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')


module.exports = merge(webpackBaseConfig,{
    target: 'web',
    entry: [
        './vue/entry-client.js'
    ],
    output: {
        publicPath: '/',
        filename: 'bundle.client.js'
    },
    plugins: [
        new VueSSRClientPlugin()
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
})
