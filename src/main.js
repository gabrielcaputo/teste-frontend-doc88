import Vue from "vue";
import App from "./App";
import VueKinesis from "vue-kinesis";
import router from "./router";

Vue.use(VueKinesis);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
