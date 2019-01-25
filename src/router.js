import Vue from 'vue'
import Router from 'vue-router'

import ZeroVue from './views/ZeroVue.vue'

Vue.use(Router)

// FIXME Note that all `webpackChunkName` names are `bundle`,
//       to prevent packager from using `~` in filename.
//       As of 2019.1.24, there is a bug that prevents `~` in filenames,
//       when using ZeroNet Core.

export default new Router({
    routes: [
        {
            path: '/',
            name: 'zerovue',
            component: ZeroVue
        }, {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "bundle" */ './views/About.vue')
        }, {
            path: '/buidl',
            name: 'buidl',
            component: () => import(/* webpackChunkName: "bundle" */ './views/Buidl.vue')
        }, {
            path: '/chans',
            name: 'chans',
            component: () => import(/* webpackChunkName: "bundle" */ './views/Chans.vue')
        }, {
            path: '/dmca',
            name: 'dmca',
            component: () => import(/* webpackChunkName: "bundle" */ './views/DMCA.vue')
        }, {
            path: '/events',
            name: 'events',
            component: () => import(/* webpackChunkName: "bundle" */ './views/Events.vue')
        }, {
            path: '/file-manager',
            name: 'file-manager',
            component: () => import(/* webpackChunkName: "bundle" */ './views/FileManager.vue')
        // }, {
        //     path: '/legal',
        //     name: 'legal',
        //     component: () => import(/* webpackChunkName: "bundle" */ './views/Legal.vue')
        }, {
            path: '/messages',
            name: 'messages',
            component: () => import(/* webpackChunkName: "bundle" */ './views/Messages.vue')
        }, {
            path: '/zerolife',
            name: 'zerolife',
            component: () => import(/* webpackChunkName: "bundle" */ './views/ZeroLife.vue')
        }, {
            path: '/privacy',
            name: 'privacy',
            component: () => import(/* webpackChunkName: "bundle" */ './views/Privacy.vue')
        }, {
            path: '/search',
            name: 'search',
            component: () => import(/* webpackChunkName: "bundle" */ './views/Search.vue')
        }
    ]
})
