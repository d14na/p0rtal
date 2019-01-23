/* Import Vue. */
import Vue from 'vue'

/* Import application windows. */
import App from './App.vue'
import Stage from './stage/App.vue'
import Identity from './identity/App.vue'

/* Import plugins. */
import './plugins/bugsnag'
import i18n from './plugins/i18next'

/* Import application framework. */
import router from './router'
import store from './store'
import style from './style'

/* Production flag. */
Vue.config.productionTip = false

/* Initialize MAIN window. */
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')

/* Initialize STAGE window. */
new Vue({
    // router,
    // store,
    i18n,
    render: h => h(Stage)
}).$mount('#_0vueStageMount')

/* Initialize IDENTITY window. */
new Vue({
    // router,
    // store,
    i18n,
    render: h => h(Identity)
}).$mount('#_0vueIdentityMount')
