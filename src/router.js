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
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }, {
            path: '/buidl',
            name: 'buidl',
            component: () => import(/* webpackChunkName: "buidl" */ './views/Buidl.vue')
        }, {
            path: '/chans',
            name: 'chans',
            component: () => import(/* webpackChunkName: "chans" */ './views/Chans.vue')
        }, {
            path: '/events',
            name: 'events',
            component: () => import(/* webpackChunkName: "events" */ './views/Events.vue')
        }, {
            path: '/file-manager',
            name: 'file-manager',
            component: () => import(/* webpackChunkName: "file-manager" */ './views/FileManager.vue')
        }, {
            path: '/legal',
            name: 'legal',
            component: () => import(/* webpackChunkName: "legal" */ './views/Legal.vue')
        }, {
            path: '/messages',
            name: 'messages',
            component: () => import(/* webpackChunkName: "messages" */ './views/Messages.vue')
        }, {
            path: '/zerolife',
            name: 'zerolife',
            component: () => import(/* webpackChunkName: "zerolife" */ './views/ZeroLife.vue')
        }, {
            path: '/privacy',
            name: 'privacy',
            component: () => import(/* webpackChunkName: "privacy" */ './views/Privacy.vue')
        }, {
            path: '/search',
            name: 'search',
            component: () => import(/* webpackChunkName: "search" */ './views/Search.vue')
        }
    ]
})
