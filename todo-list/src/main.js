import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import App from '@/view/vApp/index.vue';
import router from './router';
import store from './store';
sync(store, router);

Vue.config.productionTip = false;

// Register a global custom directive called `v-focus`
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function(el) {
    // Focus the element
    el.focus();
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
