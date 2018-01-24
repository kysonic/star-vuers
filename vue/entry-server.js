import { createApp } from './main'

export default context => {
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp()

        router.push(context.url)

        router.onReady(async () => {
            const matchedComponents = router.getMatchedComponents()
            if (!matchedComponents.length) {
                return reject({ code: 404 })
            }

            try {
                await Promise.all(matchedComponents.map(Component=>{
                    if (Component.asyncData) {
                        return Component.asyncData({
                            store,
                            route: router.currentRoute
                        })
                    }
                }))
            }
            catch(err){
                console.debug(err.message)
                resolve(app)
            }

            context.state = store.state

            resolve(app)
        }, reject)
    })
}