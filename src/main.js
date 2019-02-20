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

/* Import application framework. */
import router from './router'
import store from './store'
import style from './style'

/* Initialize globals. */
import { ethers } from 'ethers'
import moment from 'moment'
import numeral from 'numeral'

/* Initialize Web3. */
// FIXME Why do we still need both Web3 AND Ethers?
//       Web3 is currently failing to interface with contracts due to
//       conflicts existing when using in VueJs
//       (maybe if we disable observers??)
import Web3 from 'web3'

/* Initialize window.web3 global. */
// const HTTP_PROVIDER = 'https://mainnet.infura.io/v3/773850fb37e546dca04e04faf7ba2c58'
const HTTP_PROVIDER = 'https://ropsten.infura.io/v3/773850fb37e546dca04e04faf7ba2c58'
window.web3 = new Web3(new Web3.providers.HttpProvider(HTTP_PROVIDER))

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
