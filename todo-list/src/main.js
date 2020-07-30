import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import App from '@/view/vApp/index.vue';
import router from './router';
import store from './store';
sync(store, router);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
