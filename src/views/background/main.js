import Vue from "vue";
import App from "./background.vue";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
