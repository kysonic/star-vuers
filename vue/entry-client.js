import { createApp } from './main'

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(()=>{
    router.beforeResolve((to,from,next)=>{
        const matched = router.getMatchedComponents(to)
        const prevMatched = router.getMatchedComponents(from)


        let diffed = false
        const activated = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] !== c)) || from.params!==to.params
        })

        if (!activated.length) {
            return next()
        }

        // start loading
        store.dispatch('setLoadingState',true)

        Promise.all(activated.map(c => {
            if (c.asyncData) {
                return c.asyncData({ store, route: to })
            }
        })).then(() => {
            // stop loading
            store.dispatch('setLoadingState',false)
            next()
        }).catch((err)=>{
            alert(err.message)
            store.dispatch('setLoadingState',false)
            next()
        })
    })

    app.$mount('#app')
})

