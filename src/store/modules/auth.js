import * as types from '@/store/mutation_types';
import router from '@/router';

const state = {
  isLogin: false
};

const getters = {
  isLogin: state => state.isLogin
};

const actions = {
  signIn({commit, getters}, payload) {
    return new Promise((resolve, reject) => {
      if (!getters.isLogin) {
        this._vm.$http.post('/auth', {
          username: payload.username,
          password: payload.password
        }).then(res => {
          this._vm.$cookie.set('JWT', res.data.access);
           resolve();
        }).catch(err => {
          reject(err);
        })
      }
    });
  },
  signUp({commit, getters}, payload) {
    return new Promise((resolve, reject) => {
      this._vm.$http.post('/users', {
        username: payload.username,
        password: payload.password,
        name: payload.name,
        grade: payload.grade,
        cls: payload.cls,
        number: payload.num
      }).then(_ => {
        resolve();
      }).catch(err => {
        reject(err)
      })
    });
  },
  signOut({commit, getters}) {
    return new Promise((resolve) => {
      if (getters.isLogin) {
        this._vm.$cookie.delete('JWT');
        commit(types.SET_LOGIN_STATUS, {isLogin: false});
        resolve();
      }
    });
  }
};

const mutations = {
  [types.SET_LOGIN_STATUS] (state, payload) {
    state.isLogin = payload.isLogin;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
