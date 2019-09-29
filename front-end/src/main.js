// import Vue from 'vue'

import 'normalize.css/normalize.css'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en'

import '@/styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

import '@/icons'

// Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
