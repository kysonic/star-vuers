import Koa from 'koa'
import path from 'path'
import fs from 'fs'
import serve from 'koa-static'
import favicon from 'koa-favicon'
import {createBundleRenderer} from 'vue-server-renderer'
import setupVueDevSsr from './vue-dev-ssr'
import LRU from 'lru-cache'

const app = new Koa()
export default app

const isProduction = process.env.NODE_ENV ==='production'
const useCache = process.env.USE_CACHE === 'true'
/** Server Side Rendering **/
const TEMPLATE_PATH = path.resolve(process.cwd(),'./templates/index.template.html')

let renderer

/**
 * Check cacheable routes
 * @param url
 * @private
 */
function _isCacheable(url){
    // Define your own rules
}

/**
 * Create bundle renderer. Serves bundled files for production.
 * Observes and updates bundle, manifest and template in dev mode.
 * @private
 */
function _createRenderer({template,bundle,manifest}={}){
    const viewTemplate = template || fs.readFileSync(TEMPLATE_PATH,'utf-8')
    const serverBundle = bundle || require('./../build/vue-ssr-server-bundle.json')
    const clientManifest = manifest || require('./../build/vue-ssr-client-manifest.json')

    return createBundleRenderer(serverBundle,{
        runInNewContext:false,
        template:viewTemplate,clientManifest,
        cache:useCache?LRU({max:1000,maxAge:1000 * 60 * 15}):false
    })
}

if(isProduction) {
    renderer = _createRenderer()
    // Serve static files [comment for nginx]
    app.use(favicon(path.resolve(process.cwd(),'./favicon.ico')))
    app.use(serve(path.resolve(process.cwd(),'./build')))
}else {
    setupVueDevSsr(TEMPLATE_PATH).on('update',(payload)=>renderer = _createRenderer(payload))
}

/** Routing **/

const Router = require("koa-router");
const router = new Router();

const microCache = LRU({max: 100, maxAge: 1000})

router.get("*", async ctx => {
     const context = { url: ctx.req.url}
     // Cache
     let cacheable = false
     if(useCache) {
         cacheable = _isCacheable(ctx.req.url)
         if(cacheable)  {
             const routeCache = microCache.get(ctx.req.url)
             if(routeCache) return ctx.body = routeCache
         }
     }
     const html = await renderer.renderToString(context)
     if(useCache && cacheable) microCache.set(ctx.req.url,html)
     ctx.body = html
});

app.use(router.routes())






