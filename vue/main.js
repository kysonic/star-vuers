import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './routes'
import { createStore } from './vuex/store'
import { sync } from 'vuex-router-sync'

export function createApp () {

    const router = createRouter()
    const store = createStore()

    sync(store, router)

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })

    // возвращаем и приложение и маршрутизатор
    return { app, router, store }
}