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
import { Icon } from '@iconify/vue2';
import VueFlicking from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/vue-flicking/dist/flicking-inline.css";
import{ init } from 'emailjs-com';
init("user_Yx5mVuk2Dm1UivD4OckH2");
Vue.use(VueFlicking);
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(VTooltip)
library.add(faUserSecret)
Vue.use(VueTyperPlugin)
import Snotify from 'vue-snotify'; // 1. Import Snotify
// 2. Use Snotify
// You can pass {config, options} as second argument. See the next example or setConfig in [API] section 
Vue.use(Snotify)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('@iconify/vue2', Icon)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  mounted(){
    AOS.init()

  },
}).$mount("#app");

