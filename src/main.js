import Vue from 'vue'
import App from './App.vue'
import Stage from './Stage.vue'
import Identity from './Identity.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faBookmark,
    faChevronDown,
    faCoffee,
    faHeartbeat,
    faWrench,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import p0rtalStyle from '@/css/p0rtal.css'

// import fontAwesome from 'font-awesome'
// import fontAwesome from '@/lib/font-awesome/css/font-awesome.css'
library.add(faBookmark)
library.add(faChevronDown)
library.add(faCoffee)
library.add(faHeartbeat)
library.add(faWrench)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

new Vue({
    // router,
    // store,
    render: h => h(Stage)
}).$mount('#_0vueStageMount')

new Vue({
    // router,
    // store,
    render: h => h(Identity)
}).$mount('#_0vueIdentityMount')
