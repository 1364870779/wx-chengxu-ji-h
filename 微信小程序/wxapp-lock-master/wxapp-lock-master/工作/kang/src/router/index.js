import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/shy"
    },
    {
      path: '/shy',
     	component:require("../components/shy/shy.vue")
    }
  ]
})
//redirect
//require	component:require("../components/shy/shy.vue")
//children
