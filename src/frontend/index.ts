import Vue from 'vue'

import store from './store'
import router from './routes'
import App from './App.vue'

import './plugins/Components'
import './plugins/FontAwesome'
import './plugins/Moment'
import './plugins/Toasted'

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
