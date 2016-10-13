import 'veak/dist/css/veak.css'

import Veak from 'veak'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(Veak)

import RouterLinks from './routerlinks'

const scrollBehavior = (to, from, savedPosition) => {
  
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    position.x = 0
    position.y = 0
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  
}

let router = new VueRouter({
	scrollBehavior,
	routes: RouterLinks.routers
})


let app = new Vue({
	router: router,
	el: '#app',
	render: h => h(App)
})
