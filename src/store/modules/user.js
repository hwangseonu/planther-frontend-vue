import * as types from '@/store/mutation_types';
import router from '@/router';
const state = {
  username: '',
  name: '',
  grade: 0,
  cls: 0,
  num: 0,
  classId: '',
  studentId: ''
};

const getters = {
  userData: state => state,
  username: state => state.username,
  name: state => state.name,
  grade: state => state.grade,
  cls: state => state.cls,
  num: state => state.num,
  classId: state => state.classId,
  studentId: state => state.studentId
};

const actions = {
  updateUserData({commit}) {
    const jwt = this._vm.$cookie.get('JWT');
    console.log(jwt);

    return new Promise((resolve, reject) => {
      if (jwt) {
        this._vm.$http.get('/users', {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }).then(res => {
          commit(types.SET_USER_DATA, res.data);
          commit(types.SET_LOGIN_STATUS, {isLogin: true});
          resolve(res);
        }).catch(_ => {
          this._vm.$cookie.delete('JWT');
          commit(types.SET_LOGIN_STATUS, {isLogin: false});
          router.go(0);
        })
      } else {
        commit(types.SET_LOGIN_STATUS, {isLogin: false});
        reject("Token doesn't exists.");
      }
    });
  }
};

const mutations = {
  [types.SET_USER_DATA] (state, payload) {
    const {username, name, grade, cls, number, classId, studentId} = payload;
    state.username = username;
    state.num = name;
    state.grade = grade;
    state.cls = cls;
    state.num = number;
    state.classId = classId;
    state.studentId = studentId;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
