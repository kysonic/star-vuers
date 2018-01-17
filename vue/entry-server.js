import { createApp } from './main'

export default context => {
    // поскольку могут быть асинхронные хуки маршрута или компоненты,
    // мы будем возвращать Promise, чтобы сервер смог дожидаться
    // пока всё не будет готово к рендерингу.
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp()

        // устанавливаем маршрут для маршрутизатора серверной части
        router.push(context.url)

        // ожидаем, пока маршрутизатор разрешит возможные асинхронные компоненты и хуки
        router.onReady(async () => {
            const matchedComponents = router.getMatchedComponents()
            // нет подходящих маршрутов, отклоняем с 404
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
                reject(err,'<<<<')
            }



            context.state = store.state

            // Promise должен разрешиться экземпляром приложения, который будет отрендерен
            resolve(app)
        }, reject)
    })
}