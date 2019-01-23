import Vue from 'vue'
import App from './App.vue'
import Stage from './Stage.vue'
import Identity from './Identity.vue'
import router from './router'
import store from './store'

import p0rtalCss from './css/p0rtal.css'

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
