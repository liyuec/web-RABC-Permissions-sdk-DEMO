import Vue from 'vue'
import App from './App.vue'
import routerConfig from './router/index'

Vue.config.productionTip = false


new Vue({
  router: routerConfig,
  render: h => h(App),
}).$mount('#app')
