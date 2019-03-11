// require('./bootstrap')
import VueRouter from 'vue-router'
import routes from './routes'

const router = new VueRouter({
    routes : routes,
    base   : '/',
    mode   : 'history'
})

window.Vue = require('vue')
Vue.use(VueRouter)

Vue.component('vla-sidebar', require('./components/vla-sidebar').default)
Vue.component('vla-header', require('./components/vla-header').default)

window.vue = new Vue({
    router,
    el : '#app'
})
