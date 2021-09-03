import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VTooltip from 'v-tooltip'
import VueTyperPlugin from 'vue-typer'
var VueScrollTo = require('vue-scrollto');


Vue.use(VueScrollTo)
Vue.use(VTooltip)
library.add(faUserSecret)
Vue.use(VueTyperPlugin)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  mounted(){
    AOS.init()

  },
}).$mount("#app");
