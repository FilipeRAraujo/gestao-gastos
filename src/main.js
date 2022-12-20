import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSession from 'vue-session'

// import loginCSS from './assets/css/login-styles.css'
// import appCSS from './assets/css/app-styles.css'
// import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// import { MdButton, MdContent, MdTabs }
//     from 'vue-material/dist/components'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

// Vue.use(MdButton)
// Vue.use(MdContent)
// Vue.use(MdTabs)

var vueSessionOptions = {
    persist: true
}

// Vue.use(VueMaterial)
Vue.use(VueSession, vueSessionOptions)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    // loginCSS,
    render: h => h(App)
}).$mount('#app')
