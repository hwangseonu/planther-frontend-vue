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
    if (!getters.isLogin) {
      this._vm.$http.post('/auth', {
        username: payload.username,
        password: payload.password
      }).then(res => {
        this._vm.$cookie.set('JWT', res.data.access);
        router.go(0);
      }).catch(err => {
        alert("로그인에 실패했습니다.");
      })
    }
  },
  signUp({commit, getters}, payload) {
    this._vm.$http.post('/users', {
      username: payload.username,
      password: payload.password,
      name: payload.name,
      grade: payload.grade,
      cls: payload.cls,
      number: payload.num
    }).then(res => {
      alert("회원가입되었습니다.");
      router.go(0);
    }).catch(err => {
      alert("회원가입에 실패했습니다.");
    })
  },
  signOut({commit, getters}) {
    if (getters.isLogin) {
      this._vm.$cookie.delete('JWT');
      commit(types.SET_LOGIN_STATUS, {isLogin: false});
      alert("로그아웃 되었습니다.");
      router.go(0);
    }
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
