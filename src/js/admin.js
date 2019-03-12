// require('./bootstrap')
import VueRouter from 'vue-router'
import routes from './routes'

const router = new VueRouter({
    routes : routes,
    base   : '/',
    mode   : 'history'
})

import Vue from 'vue'
import ElementUI from 'element-ui'

Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.component('vla-page', require('./components/vla-page').default)
Vue.component('vla-sidebar', require('./components/vla-sidebar').default)
Vue.component('vla-rightbar', require('./components/vla-rightbar').default)
Vue.component('vla-panel', require('./components/vla-panel').default)

window.vue = new Vue({
    router,
    el : '#app'
})
