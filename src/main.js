import Vue from 'vue'
import './plugins/fontawesome'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import './config/axios'
import './config/mq'

import store from './config/store'
import router from './config/router'


// VUE-FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, } from '@fortawesome/vue-fontawesome'
import { faSearch, faUser, faEnvelope, faPhone, faComment } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch, faUser, faEnvelope, faPhone, faComment)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')