/* Import Babel polyfill. */
// FIXME How can we remove this hack (smh)??
import 'babel-polyfill'

/* Import Vue. */
import Vue from 'vue'

/* Import application windows. */
import App from './App.vue'
import Stage from './stage/App.vue'
import Identity from './identity/App.vue'

/* Import plugins. */
import './plugins/bugsnag'
import i18n from './plugins/i18next'
import './plugins/toggle-button'

/* Import application framework. */
import router from './router'
import store from './store'
import style from './style'

/* Initialize globals. */
import { ethers } from 'ethers'
import moment from 'moment'
import numeral from 'numeral'

/* Add globals to window. */
window.ethers = ethers
window.moment = moment
window.numeral = numeral

/* Production flag. */
Vue.config.productionTip = false

/* Initialize MAIN window. */
window.p0rtal = new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')

/* Initialize STAGE window. */
window.p0rtalStage = new Vue({
    store,
    i18n,
    render: h => h(Stage)
}).$mount('#_0vueStageMount')

/* Initialize IDENTITY window. */
window.p0rtalIdentity = new Vue({
    store,
    i18n,
    render: h => h(Identity)
}).$mount('#_0vueIdentityMount')
