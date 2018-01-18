const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * Unfortunately webpack-merge cannot find appropriate rule and extend it.
 * Merging just duplicates vue-loader rules and it is reason of bugs.
 * @param config
 * @returns {*}
 */

module.exports = function productionPatcher(config) {
    // Replace vue-loader configuration
    const vueLoaderRule = config.module.rules.find(r=>r.loader=='vue-loader')
    const vueCSSRule = config.module.rules.find(r=>r.use && r.use.indexOf && r.use.indexOf('css-loader')!=-1)
    config.module.rules[config.module.rules.indexOf(vueLoaderRule)] = {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                css: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'vue-style-loader'
                })
            }
        }
    }
    config.module.rules[config.module.rules.indexOf(vueCSSRule)] = {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            use: 'css-loader',
            fallback: 'vue-style-loader'
        })
    }
    return config
}

