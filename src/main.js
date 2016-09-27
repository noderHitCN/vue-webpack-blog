import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import Essay from './components/contents/Essay'
// import Profile from './components/contents/Profile'
// import Wrapper from './components/Wrapper'
// import Container from './components/Container'
// import Content from './components/Content'

// router initialize
Vue.use(VueRouter)
let router = new VueRouter()
// router map
router.map({
  '/profile': {
    component: (resolve) => {
      require(['./components/contents/Profile'], resolve)
    },
    name: 'profile'
  },
  '/essay': {
    // component: Essay,
    component: (resolve) => {
      require(['./components/contents/Essay'], resolve)
    },
    name: 'essay'
  },
  '/essay/:id': {
    component: (resolve) => {
      require(['./components/contents/EssayPage'], resolve)
    },
    name: 'articleContent'
  }
})

router.redirect({
  '/': 'profile'
})

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

// start router
router.start(App, '#app')
