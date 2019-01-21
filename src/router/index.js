import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main'
import Calendar from '../pages/Calendar';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    }
  ]
});
