import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Index.vue';
import SubPage1 from '@/views/SubPage1.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Home,
    },
    {
      path: '/sub1',
      name: 'SubPage1',
      component: SubPage1,
    },
  ],
});
