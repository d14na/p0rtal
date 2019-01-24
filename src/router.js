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
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "home" */ './views/About.vue')
        }, {
            path: '/legal',
            name: 'legal',
            component: () => import(/* webpackChunkName: "settings" */ './views/Legal.vue')
        }, {
            path: '/privacy',
            name: 'privacy',
            component: () => import(/* webpackChunkName: "about" */ './views/Privacy.vue')
        }, {
            path: '/search',
            name: 'search',
            component: () => import(/* webpackChunkName: "search" */ './views/Search.vue')
        }
    ]
})
