import Vue from 'vue';
import Vuex, {Store} from 'vuex';
import auth from './modules/auth';
import user from './modules/user';

Vue.use(Vuex);

export default new Store({
  modules: {
    auth,
    user
  }
})


