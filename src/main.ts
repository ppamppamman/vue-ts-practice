import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./routes/index";
import store from "./store";

Vue.config.productionTip = false;
// Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
