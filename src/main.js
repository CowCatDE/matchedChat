import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faGlobe,faClock,faCodeBranch, faMoneyBillWaveAlt, faUsers, faUserSecret, faFolder, faMapMarkerAlt, faLaptopHouse} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faUserSecret)
library.add(faGlobe)
library.add(faUsers)
library.add(faFolder)
library.add(faMapMarkerAlt)
library.add(faGithub)
library.add(faMoneyBillWaveAlt)
library.add(faLaptopHouse)
library.add(faClock)
library.add(faCodeBranch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
