import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/all',
    name: 'all',
  },
  {
    path: '/uncomplete',
    name: 'uncomplete',
  },
  {
    path: '/complete',
    name: 'complete',
  },
  {
    path: '*',
    redirect: '/all',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
