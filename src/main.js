import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import p0rtalCss from './css/p0rtal.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
