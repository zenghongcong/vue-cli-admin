import Vue from "vue";
import router from "@/router";
import store from "@/store";
import {ajax, upload, regex, delay } from "@/utils";
import App from "@/App.vue";
import "@/element-ui"
import 'reset-css';
import "@/App.styl";

Vue.config.productionTip = false;

if (process.globalConfig.uweb) {
  require("@/uweb");
}

Vue.prototype.$delay = delay;
Vue.prototype.$upload = upload;
Vue.prototype.$ajax = ajax;
Vue.mixin(regex);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
