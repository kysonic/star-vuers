import EventEmitter from 'events'
import webpack from 'webpack'
import path from 'path'
import chokidar from 'chokidar'
import MFS from 'memory-fs'
import fs from 'fs'
import convert from 'koa-convert'
import devMiddleware from 'koa-webpack-dev-middleware'
import hotMiddleware from 'koa-webpack-hot-middleware'

import webpackClientConfig from '../webpack/webpack.client.dev'
import webpackServerConfig from '../webpack/webpack.server'

const clientCompiler = webpack(webpackClientConfig)
const serverCompiler = webpack(webpackServerConfig)

const ee = new EventEmitter()
const mfs = new MFS()

import app from './index'

const DEBUG_MESSAGES = {
    'template':'template is changed...',
    'server': 'server bundle is changed...',
    'client': 'client bundle is changed...'
}

const VUE_SSR_SERVER_BUNDLE_PATH = path.resolve(webpackClientConfig.output.path,'vue-ssr-server-bundle.json')
const VUE_SSR_CLIENT_MANIFEST_PATH = path.resolve(webpackClientConfig.output.path,'vue-ssr-client-manifest.json')

let template,
    bundle,
    manifest


function _handleChange(type,err,stats){
    if (err) throw err
    if(stats) stats = stats.toJson()
    if (stats && stats.errors.length) return
    if(type && DEBUG_MESSAGES[type]) console.debug(`[VueDevSsr]:${DEBUG_MESSAGES[type]}`)
    if(bundle && manifest) ee.emit('update',{template,bundle,manifest})
}

function _setupClientWebpack() {
    app.use(convert(devMiddleware(clientCompiler, {
        publicPath: webpackClientConfig.output.publicPath,
        stats: {
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }
    })))
    app.use(convert(hotMiddleware(clientCompiler)))
}

export default function setupVueDevSsr(templatePath){
    /** Setting up client dev hot **/
    _setupClientWebpack()

    /** Watch template changes **/
    template = fs.readFileSync(templatePath,'utf-8')
    chokidar.watch(templatePath).on('change', () => {
        template = fs.readFileSync(templatePath,'utf-8')
        _handleChange('template')
    })
    /** Server bundle changes **/
    serverCompiler.outputFileSystem = mfs
    serverCompiler.watch({}, (err, stats) => {
        bundle = JSON.parse(mfs.readFileSync(VUE_SSR_SERVER_BUNDLE_PATH,'utf-8'))
        _handleChange('server',err,stats)
    })
    /** Observe client compiler changes to update manifest **/
    clientCompiler.plugin('done', stats => {
        manifest = JSON.parse(fs.readFileSync(VUE_SSR_CLIENT_MANIFEST_PATH,'utf-8'))
        _handleChange('client',null,stats)
    })

    return ee
}

