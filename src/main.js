import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './style.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'vue-tel-input/dist/vue-tel-input.css'
import VueTelInput from 'vue-tel-input'
/* import * as fb from 'firebase' */

Vue.use(Vuetify, {
  theme: {
    primary: '#234D6B',
    secondary: '#0E3249',
    warning: '#FF8C00',
    bGoundContent: '#fff'
  }
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDaS-ZsL5pddJl0F5PWuhcWu31fWohvSUA',
    libraries: 'places,drawing,visualization'
  }
})

Vue.use(VueTelInput)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
