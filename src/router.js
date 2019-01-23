import Vue from 'vue'
import Router from 'vue-router'

import ZeroVue from './views/ZeroVue.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'zerovue',
            component: ZeroVue
        }, {
            path: '/home',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
        }, {
            path: '/settings',
            name: 'settings',
            component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue')
        }, {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
