// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import cookie from 'vue-cookie';
import axios from 'axios';
import App from './App'
import store from './store';
import router from './router'

Vue.use(cookie);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.baseURL = "https://planther-api.herokuapp.com/";

router.beforeEach(async function (to, from, next) {
  try {
    await store.dispatch('updateUserData')
  } catch (_) {}
  next();
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
