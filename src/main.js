import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

/* use vue-router for SPA*/
Vue.use(VueRouter)
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
