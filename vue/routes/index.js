import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import XPath from '../components/XPath.vue'

Vue.use(VueRouter)

export function createRouter(){
    return new VueRouter({
        mode: 'history',
        routes: [
            {path: '/', component: Home},
            {path: '/xpath', component: XPath},
        ]
    })
}
