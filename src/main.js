import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Essay from './components/contents/Essay'
import Profile from './components/contents/Profile'
import Wrapper from './components/Wrapper'
import Container from './components/Container'
import Content from './components/Content'

// router initialize
Vue.use(VueRouter)
let router = new VueRouter()
router.map({
  '/': {
    component: Wrapper,
    subRoutes: {
      '/index': {
        name: 'index',
        component: Container,
        subRoutes: {
          '/content': {
            name: 'content',
            component: Content,
            subRoutes: {
              '/profile': {
                name: 'profile',
                component: Profile
              },
              '/essay': {
                name: 'essay',
                component: Essay
              }
            }
          }
        }
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

// start router
router.start(App, '#app')
