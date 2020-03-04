// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Input,Icon,Loading } from 'element-ui';
Vue.config.productionTip = false
Vue.use(Input)
Vue.use(Icon)
Vue.use(Loading)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
